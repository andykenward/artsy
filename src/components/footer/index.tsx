import { Flex, Link, Serif } from '@artsy/palette';
import React from 'react';

export const Footer: React.FC = () => (
  <Flex m="1rem" as="footer" flexDirection="column" alignItems="flex-start">
    <Serif
      size={['5', '6']}
      fontSize={['1.375rem', '1.625rem']}
      lineHeight="2rem"
    >
      <strong>Andy Kenward</strong>
    </Serif>
    <Link
      href="https://andykenward.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Serif
        size={['5', '6']}
        fontSize={['1.375rem', '1.625rem']}
        lineHeight="2rem"
      >
        andykenward.com
      </Serif>
    </Link>
    <Link
      href="https://github.com/andykenward/artsy"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Serif
        size={['5', '6']}
        fontSize={['1.375rem', '1.625rem']}
        lineHeight="2rem"
      >
        GitHub
      </Serif>
    </Link>
  </Flex>
);
