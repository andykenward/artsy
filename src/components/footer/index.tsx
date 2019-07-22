import { Flex, Link, Serif } from '@artsy/palette';
import React from 'react';

export const Footer: React.FC = () => (
  <Flex m="1rem" as="footer" flexDirection="column" alignItems="flex-start">
    <Serif size={['5', '6']}>Andy Kenward</Serif>
    <Link href="https://andykenward.com" target="_blank">
      andykenward.com
    </Link>
  </Flex>
);
