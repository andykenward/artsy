import { MockedResponse } from '@apollo/client/testing';
import { act } from '@testing-library/react';
import React from 'react';
import wait from 'waait';
import { Artwork } from '..';
import { useArtworkQuery } from '../../../generated/graphql';
import { renderWithApp } from '../../../utils/tests';
import { QUERY_ARTWORK } from '../query';
import { ARTWORK_RESULT_DATA, ARTWORK_RESULT_ERROR } from '../__fixtures__';
/**
 * FYI GraphQL Fragments do not currently work in Queries for testing
 */

describe('<Artwork />', () => {
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

  it('should handle Artwork query', async () => {
    const Component = () => {
      const { data, loading } = useArtworkQuery({ variables: { id: SLUG } });
      if (!loading) {
        expect(data).toEqual(ARTWORK_RESULT_DATA);
      }
      return null;
    };
    act(() => {
      renderWithApp(<Component />, MOCKS);
    });
  });

  it('should render loading state initially', async () => {
    await act(async () => {
      const root = renderWithApp(<Artwork slug={SLUG} />, MOCKS);
      expect(root.container.firstChild).toMatchSnapshot();
    });
  });

  it('should render success response', async () => {
    await act(async () => {
      const { container, getByText } = renderWithApp(
        <Artwork slug={SLUG} />,
        MOCKS
      );
      await wait(0); // wait for response

      getByText('Hossam Dirar');
      getByText('Hossam Dirar, ‘Nefertiti’, 2018');
      expect(getByText('Source').closest('a')).toHaveAttribute(
        'href',
        'https://www.artsy.net/artwork/hossam-dirar-nefertiti-9'
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  it('should render empty success response', async () => {
    const MOCKS: MockedResponse[] = [
      {
        request: {
          query: QUERY_ARTWORK,
          variables: { id: SLUG_FAIL },
        },
        result: {
          data: ARTWORK_RESULT_ERROR.data,
        },
      },
    ];
    await act(async () => {
      const { container, getByText } = renderWithApp(
        <Artwork slug={SLUG_FAIL} />,
        MOCKS
      );
      await wait(0); // wait for response
      expect(container.firstChild).toMatchSnapshot();
      getByText('No matching Artwork');
    });
  });

  it.todo('error state');
});
