import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { possibleTypes } from './generated/introspection-result.json';

console.log('GRAPHQL API', process.env.REACT_APP_API);

const cache = new InMemoryCache({
  possibleTypes,
  typePolicies: {
    Artwork: {
      keyFields: ['slug'],
    },
    Query: {
      fields: {
        artwork(existingData, { args, toReference }) {
          return (
            existingData ||
            toReference({ __typename: 'Artwork', slug: args?.id })
          );
        },
      },
    },
  },
});

export const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors && Array.isArray(graphQLErrors))
        graphQLErrors?.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri:
        process.env.REACT_APP_API ??
        'https://metaphysics-production.artsy.net/v2/',
      credentials: 'same-origin',
    }),
  ]),
  cache,
});
