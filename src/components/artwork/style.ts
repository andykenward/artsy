import { Link } from '@reach/router';
import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

export const LinkStyle = styled(Link)`
  display: inline-block;
  margin-bottom: 1rem;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 58vh;
  object-fit: contain;
`;

export const Figure = styled.figure`
  align-self: center;
  margin: 0;
  padding: 0;
`;
