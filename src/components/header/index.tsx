import { Flex, Link, Serif } from '@artsy/palette';
import React from 'react';

export const Header: React.FC = () => (
  <Flex as="header" flexDirection="column">
    <Serif element="h1" size="12">
      Andy Kenward
    </Serif>
    <Link href="https://andykenward.com" target="_blank">
      andykenward.com
    </Link>
    <Serif element="h2" size="10">
      Artsy.net API
    </Serif>
  </Flex>
);
