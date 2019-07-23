import { MockedProvider, MockedResponse, wait } from '@apollo/react-testing';
import { render } from '@testing-library/react';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-boost';
import React from 'react';
import { Artwork } from '..';
import { useArtworkQuery } from '../../../generated/graphql';
import introspectionResult from '../../../generated/introspection-result';
import { renderWithRouter } from '../../../utils/tests';
import { QUERY_ARTWORK } from '../query';
import { ARTWORK_RESULT_DATA, ARTWORK_RESULT_ERROR } from '../__fixtures__';

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

describe('<Artwork />', () => {
  const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData: introspectionResult,
  });
  let cache: InMemoryCache;
  beforeEach(() => {
    cache = new InMemoryCache({ fragmentMatcher });
  });
  const SLUG = 'hossam-dirar-nefertiti-9';
  const SLUG_FAIL = 'fail';
  const MOCKS: MockedResponse[] = [
    {
      request: {
        query: QUERY_ARTWORK,
        variables: { id: SLUG },
      },
      result: {
        data: ARTWORK_RESULT_DATA,
      },
    },
  ];

  it('should handle Artwork query', done => {
    const Component = () => {
      const { data, loading } = useArtworkQuery({ variables: { id: SLUG } });
      if (!loading) {
        expect(data).toEqual(ARTWORK_RESULT_DATA);
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
      <MockedProvider mocks={MOCKS}>
        <Artwork slug={SLUG} />
      </MockedProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render success response', async () => {
    const { container } = renderWithRouter(
      <MockedProvider mocks={MOCKS}>
        <Artwork slug={SLUG} />
      </MockedProvider>
    );
    await wait(0); // wait for response
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render empty success response', async () => {
    const MOCKS: MockedResponse[] = [
      {
        request: {
          query: QUERY_ARTWORK,
          variables: { id: SLUG_FAIL },
        },
        error: new Error('error'),
        result: {
          data: ARTWORK_RESULT_ERROR.data,
        },
      },
    ];
    const { container } = renderWithRouter(
      <MockedProvider mocks={MOCKS}>
        <Artwork slug={SLUG_FAIL} />
      </MockedProvider>
    );
    await wait(0); // wait for response
    expect(container.firstChild).toMatchSnapshot();
  });
});
