import {IssueState} from "../../types/issue.types";
import {createSlice} from '@reduxjs/toolkit'
import initialGraphPagination from "../../constants/pagination.constant";
import { asyncSuccessReducer} from "../../utils/reducers.utils";

export const issuesInitialState: IssueState = {
    loading: false,
    error: '',
    data: [],
    pageInfo: initialGraphPagination,
    readMore:false
}

const issueListSlice = createSlice({
    name: 'issues',
    initialState: issuesInitialState,
    reducers: {
        issuesRead(state, action) {
            return {
                ...state,
                loading: true,
                ...action.payload
            }
        },
        issuesSuccess(state: IssueState, action) {
            return asyncSuccessReducer(state,action.payload,state.readMore)
        },
        issuesFailed(state: IssueState, action) {
            return {
                ...issuesInitialState,
                error: action.payload
            }
        }
    }
})


export default issueListSlice;