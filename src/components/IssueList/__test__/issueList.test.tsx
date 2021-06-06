import {create} from 'react-test-renderer';
import {MockedProvider as ApolloMockProvider} from '@apollo/client/testing';
import StoreMockProvider, {getMockStore} from "../../../utils/tests.utils";
import issuesGraphqlMock from "../../../../__mock__/issues.graphql.mock";

import {IssueList} from "../index";
import {issuesInitialState} from "../../../store/issue/slice";

const store = getMockStore({
    key: 'issues',
    state: {
        ...issuesInitialState,
        data: [
            {
                title: "ISO-8859-1 encoding.",
                url: "https://github.com/reactjs/reactjs.org/issues/3721"
            }
        ]
    }});


describe("Issue list renders", () => {
    it('Issue list should renders with correct data', async () => {
        let component = create(
            <StoreMockProvider store={store}>
                <ApolloMockProvider mocks={issuesGraphqlMock} addTypename={false}>
                    <IssueList/>
                </ApolloMockProvider>
            </StoreMockProvider>
        )

        let tree = JSON.stringify(component.toJSON());
        expect(tree).toContain("Git issues");
        expect(tree).toContain("ISO-8859-1 encoding.");
    });

})