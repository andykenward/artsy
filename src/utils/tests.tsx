import { MockedProvider, MockedResponse } from '@apollo/react-testing';
import { injectGlobalStyles, Theme } from '@artsy/palette';
import {
  createHistory,
  createMemorySource,
  LocationProvider,
} from '@reach/router';
import { render } from '@testing-library/react';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-boost';
import React from 'react';
import introspectionResult from '../generated/introspection-result';

export const { GlobalStyles } = injectGlobalStyles(`
  @import url("https://webfonts.artsy.net/all-webfonts.css")
`);

export const renderWithTheme = (element: React.ReactElement<any>) =>
  render(
    <Theme>
      <>
        <GlobalStyles />
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

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: introspectionResult,
});

export const renderWithApp = (
  element: React.ReactElement,
  MOCKS: MockedResponse[] = [],
  { route = '/', history = createHistory(createMemorySource(route)) } = {}
) => {
  const cache = new InMemoryCache({ fragmentMatcher, addTypename: false });
  return render(
    <MockedProvider mocks={MOCKS} cache={cache}>
      <Theme>
        <>
          <GlobalStyles />
          <LocationProvider history={history}>{element}</LocationProvider>
        </>
      </Theme>
    </MockedProvider>
  );
};
