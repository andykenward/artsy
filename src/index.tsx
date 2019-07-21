import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';

import './index.css';
import App from './App';
import { client } from './apollo-client';

ReactDOM.render(
  <ApolloHooksProvider client={client}>
    <App />
  </ApolloHooksProvider>,
  document.getElementById('root')
);
