import React from 'react';
import { Footer } from '../footer';

export const Page: React.FC = ({ children }) => (
  <>
    <main>{children}</main>
    <Footer />
  </>
);
