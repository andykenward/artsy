import { Link } from '@reach/router';
import styled from 'styled-components';

export const Section = styled.section`
  margin: 1rem;
`;

export const ImageContainer = styled.figure<{ orientation: string }>`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0;

  width: ${({ orientation }) =>
    orientation === 'landscape' ? '70vh' : '50vh'};
  max-width: 100%;
  @media (orientation: landscape) and (max-width: 899px) {
    width: 50vw;
  }
`;

export const LinkStyle = styled(Link)`
  margin-bottom: 1rem;
  display: inline-block;
`;

export const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  vertical-align: middle;
`;
