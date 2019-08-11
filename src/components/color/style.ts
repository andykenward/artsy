import { Link } from '@reach/router';
import styled from 'styled-components';

export const Square = styled.div<{ color: string }>`
  width: 100%;
  height: 100%;
  background: ${({ color }) => color};
`;

export const LinkColor = styled(Link)`
  width: 2.6rem;
  height: 2.6rem;
  transition: all 0.2s ease;
  display: inline-flex;
  :focus,
  :hover {
    transform: scale(0.9);
  }
  @media (min-width: 56.25rem) {
    width: 5rem;
    height: 5rem;
  }
`;
export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export const ListItem = styled.li`
  display: inline-flex;
`;
