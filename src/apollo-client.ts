import ApolloClient, {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from 'apollo-boost';
import result from './generated/graphql';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: result,
});
export const cache = new InMemoryCache({ fragmentMatcher });

console.log('GRAPHQL API', process.env.REACT_APP_API);

export const client = new ApolloClient({
  uri:
    process.env.REACT_APP_API ?? 'https://metaphysics-production.artsy.net/v2/',
  fetchOptions: {
    credentials: 'same-origin',
  },
  cache: cache,
  request: async operation => {
    const token = process.env.REACT_APP_USER_TOKEN;

    operation.setContext({
      headers: token
        ? {
            'x-access-token': token,
          }
        : {},
    });
  },
  onError: ({ graphQLErrors, networkError }) => {
    /**
     * Server error responses are bad
     * message response is bad formatted JSON
     * there are no error codes to denote unauthorized user
     */
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(
            locations
          )}, Path: ${path}`
        )
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
  },
});
