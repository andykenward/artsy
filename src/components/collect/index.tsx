import { RouteComponentProps } from '@reach/router';
import React from 'react';
import { Color } from '../color';
import { Filter } from '../filter';
import { Page } from '../page';

export const Collect: React.FC<RouteComponentProps> = ({ location }) => (
  <Page>
    <Color />
    <Filter location={location} />
  </Page>
);
