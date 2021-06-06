import { ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import APOLLO_CONSTANTS from "../constants/apollo.constants";

const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: createHttpLink({
        uri: APOLLO_CONSTANTS.baseUri,
        headers: {
            authorization: `Bearer ${APOLLO_CONSTANTS.accessToken}`,
        },
    }),
});

export default apolloClient;