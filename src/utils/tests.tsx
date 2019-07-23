import { injectGlobalStyles, Theme } from '@artsy/palette';
import {
  createHistory,
  createMemorySource,
  LocationProvider,
} from '@reach/router';
import { render } from '@testing-library/react';
import React from 'react';

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
  {
    route = '/',
    history = createHistory(createMemorySource((route = '/'))),
  } = {}
) => ({
  ...render(<LocationProvider history={history}>{element}</LocationProvider>),
  // adding `history` to the returned utilities to allow us
  // to reference it in our tests (just try to avoid using
  // this to test implementation details).
  history,
});
