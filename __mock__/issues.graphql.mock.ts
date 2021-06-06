import issuesSuccessMock from './issues.sucess.mock';
import ISSUE_LIST_QUERY from "../src/services/issue/list.query";
import {issuesErrorMock} from "./issues.error.mock";

const issuesGraphqlMock = [
    {
        request: {
            query: ISSUE_LIST_QUERY,
            variables: {"first":10,"after":null,"issueStates":["OPEN"]}
        },
        result: issuesSuccessMock
    },
];

export const issuesGraphqlErrorMock = [
    {
        request: {
            query: ISSUE_LIST_QUERY,
            variables: {"first":10,"after":null,"issueStates":["OPEN"]}
        },
        ...issuesErrorMock
    },
];

export default issuesGraphqlMock;