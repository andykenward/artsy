import React from 'react';
import styled from 'styled-components';
import { Footer } from '../footer';

const Main = styled.main`
  min-height: 100vh;
`;

export const Page: React.FC = ({ children }) => (
  <>
    <Main>{children}</Main>
    <Footer />
  </>
);
