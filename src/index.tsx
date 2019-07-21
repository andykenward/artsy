import { injectGlobalStyles, Theme } from '@artsy/palette';
import React from 'react';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import ReactDOM from 'react-dom';
import { client } from './apollo-client';
import App from './App';
import './index.css';

const { GlobalStyles } = injectGlobalStyles(`
  @import url("https://webfonts.artsy.net/all-webfonts.css")
`);

ReactDOM.render(
  <ApolloHooksProvider client={client}>
    <Theme>
      <>
        <GlobalStyles />
        <App />
      </>
    </Theme>
  </ApolloHooksProvider>,
  document.getElementById('root')
);
