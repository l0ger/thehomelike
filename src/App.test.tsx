import {create} from 'react-test-renderer';
import { MockedProvider as ApolloMockProvider } from '@apollo/client/testing';
import StoreMockProvider, {getMockStore} from "./utils/tests.utils";
import issuesGraphqlMock from "../__mock__/issues.graphql.mock";
import {issuesInitialState} from "./store/issue/slice";
import TheHomeLike from "./components/thehomelike";

const store = getMockStore({
  key: 'issues',
  state: issuesInitialState
});


it('Issue list renders without error', async() => {
  let App = create(
      <StoreMockProvider store={store}>
        <ApolloMockProvider mocks={issuesGraphqlMock} addTypename={false}>
          <TheHomeLike />
        </ApolloMockProvider>
      </StoreMockProvider>
  );
  const testInstance = App.root;
  const element = testInstance.findByProps({ className: "theHomeLike" });
  expect(element).toBeDefined();

});