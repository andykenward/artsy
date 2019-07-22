import { Flex, Serif } from '@artsy/palette';
import React from 'react';

export const Header: React.FC = () => (
  <Flex m="1rem" as="header" flexDirection="column" alignItems="flex-start">
    <Serif element="h2" size={['8', '10']}>
      Artsy.net - GraphQL API
    </Serif>
  </Flex>
);
