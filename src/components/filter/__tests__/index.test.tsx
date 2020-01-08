import { MockedResponse, wait } from '@apollo/react-testing';
import { act } from '@testing-library/react';
import React from 'react';
import { Filter } from '..';
import { useFilterArtworksQuery } from '../../../generated/graphql';
import { renderWithApp } from '../../../utils/tests';
import { QUERY_FILTER } from '../query';
import { FILTER_RESULT_DATA, FILTER_RESULT_DATA_EMPTY } from '../__fixtures__';

/**
 * FYI GraphQL Fragments do not currently work in Queries for testing
 */

describe('<Filter />', () => {
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

  it('should handle FilterArtworks query', async () => {
    const Component = () => {
      const { data, loading } = useFilterArtworksQuery();
      if (!loading) {
        expect(data).toEqual(FILTER_RESULT_DATA);
      }
      return null;
    };
    act(() => {
      renderWithApp(<Component />, MOCKS);
    });
  });

  it('should render loading state initially', async () => {
    await act(async () => {
      const root = renderWithApp(<Filter />, MOCKS);
      expect(root.container.firstChild).toMatchSnapshot();
    });
  });

  it('should render success response', async () => {
    await act(async () => {
      const root = renderWithApp(<Filter />, MOCKS);
      await wait(0); // wait for response
      expect(root.container.firstChild).toMatchSnapshot();
    });
  });

  it('should render empty success response', async () => {
    await act(async () => {
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
      const root = renderWithApp(<Filter />, MOCKS);
      await wait(0); // wait for response
      expect(root.container.firstChild).toMatchSnapshot();
      // TODO check for string in dom
    });
  });

  it.todo('error state');
});
