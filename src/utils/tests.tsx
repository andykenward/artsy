import { injectGlobalStyles, Theme } from '@artsy/palette';
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
