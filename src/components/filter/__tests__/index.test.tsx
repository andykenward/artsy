import { MockedProvider, MockedResponse, wait } from '@apollo/react-testing';
import { render } from '@testing-library/react';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-boost';
import React from 'react';
import { Filter } from '..';
import { useFilterArtworksQuery } from '../../../generated/graphql';
import introspectionResult from '../../../generated/introspection-result';
import { renderWithRouter } from '../../../utils/tests';
import { QUERY_FILTER } from '../query';
import { FILTER_RESULT_DATA, FILTER_RESULT_DATA_EMPTY } from '../__fixtures__';

/**
 * FYI there is a warning of
 * `Warning: An update to Component inside a test was not wrapped in act(...).`
 * relates to https://github.com/trojanowski/react-apollo-hooks/issues/84
 * next release of react-dom 16.9.0 should fix it
 * https://github.com/trojanowski/react-apollo-hooks/issues/84#issuecomment-479972513
 */

/**
 * FYI GraphQL Fragments do not currently work in Queries for testing
 */

describe('<Filter />', () => {
  const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData: introspectionResult,
  });
  let cache: InMemoryCache;
  beforeEach(() => {
    cache = new InMemoryCache({ fragmentMatcher, addTypename: false });
  });

  const MOCKS: MockedResponse[] = [
    {
      request: {
        query: QUERY_FILTER,
        variables: {},
      },
      result: {
        data: FILTER_RESULT_DATA,
      },
    },
  ];

  it('should handle FilterArtworks query', done => {
    const Component = () => {
      const { data, loading } = useFilterArtworksQuery();
      if (!loading) {
        expect(data).toEqual(FILTER_RESULT_DATA);
        done();
      }
      return null;
    };

    render(
      <MockedProvider mocks={MOCKS} cache={cache}>
        <Component />
      </MockedProvider>
    );
  });

  it('should render loading state initially', async () => {
    const { container } = renderWithRouter(
      <MockedProvider mocks={MOCKS} cache={cache}>
        <Filter />
      </MockedProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render success response', async () => {
    const { container } = renderWithRouter(
      <MockedProvider mocks={MOCKS} cache={cache}>
        <Filter />
      </MockedProvider>
    );
    await wait(0); // wait for response
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render empty success response', async () => {
    const MOCKS: MockedResponse[] = [
      {
        request: {
          query: QUERY_FILTER,
          variables: {},
        },
        result: {
          data: FILTER_RESULT_DATA_EMPTY,
        },
      },
    ];
    const { container } = renderWithRouter(
      <MockedProvider mocks={MOCKS} cache={cache}>
        <Filter />
      </MockedProvider>
    );
    await wait(0); // wait for response
    expect(container.firstChild).toMatchSnapshot();
  });
});
