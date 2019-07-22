import { ApolloProvider } from '@apollo/react-hooks';
import { injectGlobalStyles, Theme } from '@artsy/palette';
import React from 'react';
import ReactDOM from 'react-dom';
import { client } from './apollo-client';
import App from './App';
import './index.css';

const { GlobalStyles } = injectGlobalStyles(`
  @import url("https://webfonts.artsy.net/all-webfonts.css")
`);

ReactDOM.render(
  <ApolloProvider client={client}>
    <Theme>
      <>
        <GlobalStyles />
        <App />
      </>
    </Theme>
  </ApolloProvider>,
  document.getElementById('root')
);
