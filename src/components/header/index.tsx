import { Flex, Link, Serif } from '@artsy/palette';
import React from 'react';

export const Header: React.FC = () => (
  <Flex m="1rem" as="header" flexDirection="column" alignItems="flex-start">
    <Link href="https://artsy.net" target="_blank" rel="noopener noreferrer">
      <Serif
        element="h1"
        display="inline-flex"
        m="0"
        size={['8', '10']}
        fontSize={['2rem', '2.75rem']}
        lineHeight={['2.375rem', '3.125rem']}
      >
        Artsy.net
      </Serif>
    </Link>
  </Flex>
);
