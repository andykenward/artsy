import { InMemoryCache } from '@apollo/client';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { Theme } from '@artsy/palette';
import {
  createHistory,
  createMemorySource,
  LocationProvider,
} from '@reach/router';
import { render } from '@testing-library/react';
import React from 'react';
import { Helmet } from 'react-helmet';
import { possibleTypes } from '../generated/introspection-result.json';

export const renderWithTheme = (element: React.ReactElement<any>) =>
  render(
    <Theme>
      <>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://webfonts.artsy.net/all-webfonts.css"
          />
        </Helmet>
        {element}
      </>
    </Theme>
  );

export const renderWithRouter = (
  element: React.ReactElement<any>,
  { route = '/', history = createHistory(createMemorySource(route)) } = {}
) => ({
  ...render(<LocationProvider history={history}>{element}</LocationProvider>),
  // adding `history` to the returned utilities to allow us
  // to reference it in our tests (just try to avoid using
  // this to test implementation details).
  history,
});

export const renderWithApp = (
  element: React.ReactElement,
  MOCKS: MockedResponse[] = [],
  { route = '/', history = createHistory(createMemorySource(route)) } = {}
) => {
  const cache = new InMemoryCache({
    possibleTypes,
  });
  return render(
    <MockedProvider mocks={MOCKS} cache={cache}>
      <Theme>
        <>
          <Helmet>
            <link
              rel="stylesheet"
              href="https://webfonts.artsy.net/all-webfonts.css"
            />
          </Helmet>
          <LocationProvider history={history}>{element}</LocationProvider>
        </>
      </Theme>
    </MockedProvider>
  );
};
