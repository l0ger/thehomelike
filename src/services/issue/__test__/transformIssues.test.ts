import issuesSuccessMock from "../../../../__mock__/issues.sucess.mock";
import {transformIssues} from "../useIssueList.service";
import {issuesErrorMock} from "../../../../__mock__/issues.error.mock";
// @ts-ignore
describe('Issues Service Transform function', () => {
    it('should get graphql response as IssueListSchema input\n and return IssueState', () => {
        const issueSuccessState = transformIssues(issuesSuccessMock.data);
        expect(issueSuccessState.data).toBeDefined();
        expect(issueSuccessState.data.length).toEqual(1);
        expect(issueSuccessState.pageInfo).toBeDefined();
        expect(issueSuccessState.pageInfo.totalCount).toEqual(417);
        // @ts-ignore
        expect(issueSuccessState.data[0].node).toBeUndefined();

    });

    it('should get graphql error response as GraphErrorResponse  input\n and return IssueState with initial state', () => {
        const issueErrorState = transformIssues(issuesErrorMock);
        expect(issueErrorState.data).toBeDefined();
        expect(issueErrorState.data.length).toEqual(0);
        expect(issueErrorState.pageInfo.startCursor).toEqual(null);
        expect(issueErrorState.pageInfo.endCursor).toEqual(null);
        expect(issueErrorState.pageInfo.totalCount).toEqual(0);
        expect(issueErrorState.pageInfo.hasPreviousPage).toEqual(false);
        expect(issueErrorState.pageInfo.hasNextPage).toEqual(false);
    });
})