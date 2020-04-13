import { ApolloProvider } from '@apollo/client';
import { Theme } from '@artsy/palette';
import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { client } from './apollo-client';
import App from './App';
import './index.css';

ReactDOM.render(
  <ApolloProvider client={client}>
    <Theme>
      <>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://webfonts.artsy.net/all-webfonts.css"
          />
        </Helmet>
        <App />
      </>
    </Theme>
  </ApolloProvider>,
  document.getElementById('root')
);
