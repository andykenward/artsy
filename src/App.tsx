import { Redirect, Router } from '@reach/router';
import React from 'react';
import ErrorBoundary from 'react-error-boundary';
import { Artwork } from './components/artwork';
import { Collect } from './components/collect';
import { Error } from './components/error';
import { Header } from './components/header';
import { ScrollToTop } from './utils/scroll-to-top';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <ErrorBoundary FallbackComponent={Error}>
        <Router>
          <Redirect noThrow from="/" to="collect" />
          <Collect path="collect" />
          <ScrollToTop path="/">
            <Artwork path="artwork/:slug" />
          </ScrollToTop>
        </Router>
      </ErrorBoundary>
    </>
  );
};

export default App;
