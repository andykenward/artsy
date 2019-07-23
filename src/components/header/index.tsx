import { Flex, Link, Serif } from '@artsy/palette';
import React from 'react';

export const Header: React.FC = () => (
  <Flex m="1rem" as="header" flexDirection="column" alignItems="flex-start">
    <Serif element="h1" size={['8', '10']} display="inline-flex">
      <Link href="https://artsy.net" target="_blank" rel="noopener noreferrer">
        <Serif size={['8', '10']}>Artsy.net</Serif>
      </Link>
    </Serif>
  </Flex>
);
