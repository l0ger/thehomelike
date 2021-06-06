import {ApolloError, useLazyQuery} from "@apollo/client";
import ISSUE_LIST_QUERY from "./list.query";
import {useDispatch} from "react-redux";
import {issuesRead, issuesSuccess, issuesFailed} from "../../store/issue/actions";
import {useEffect} from "react";
import {IssueListSchema} from "../../types/issue.types";
import {graphPageSize} from "../../constants/apollo.constants";
import {GraphErrorResponse, GraphPaginatedQueryVariables, GraphService} from "../../types/app.types";
import {getApolloErrorMessage} from "../../utils/errorHandeling.utils";
import {IssueState} from "../../types/issue.types";
import initialGraphPagination from "../../constants/pagination.constant";

export const transformIssues = (data: IssueListSchema | GraphErrorResponse):Omit<IssueState, "loading"|"error"|"readMore"> => {
   if("errors" in data){
       return {
           data:[],
           pageInfo:initialGraphPagination
       }
   }
    const issues = data?.repository?.issues;
    return {
        data: issues?.edges?.map(edge => edge.node),
        pageInfo: {
            ...issues?.pageInfo,
            totalCount: issues?.totalCount
        },
    };
}

interface IssueServiceVariable extends GraphPaginatedQueryVariables {
    issueStates: Array<string>;
}

export const useIssuesService:GraphService<IssueServiceVariable>=()=>{
    const dispatch = useDispatch();
    const defaultVariables: IssueServiceVariable = {
        first: graphPageSize,
        after: null,
        issueStates: ["OPEN"],
    };
    const [getIssue] = useLazyQuery(
        ISSUE_LIST_QUERY,
        {
            notifyOnNetworkStatusChange: true,
            fetchPolicy: "cache-and-network",
            onError: (error: ApolloError) => {
                dispatch(issuesFailed(getApolloErrorMessage(error)));
            },
            onCompleted: (data) => {
                dispatch(issuesSuccess(transformIssues(data)))
            },
            variables: defaultVariables
        },
    );
    const fetch = (variables: IssueServiceVariable = defaultVariables,readMore:boolean=true) => {
        dispatch(issuesRead({readMore}));
        getIssue({variables: variables});
    }

    useEffect(() => {
        fetch();
    }, []);

    return {fetch}
}

