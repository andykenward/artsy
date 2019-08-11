import { Link as ReachLink } from '@reach/router';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f4f4f4;
  padding: 1rem;
`;

export const List = styled.ul`
  column-gap: 1rem;
  columns: 1 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  columns: 2;

  @media (min-width: 56.25rem) {
    columns: 6 12.5rem;
  }
`;

export const ListItem = styled.li`
  display: inline-block;
  width: 100%;
  padding: 0.5rem 0;
`;

export const Link = styled(ReachLink)`
  text-decoration: none;
  :focus {
    outline: 0.3125rem auto rgba(0, 103, 244, 0.247);
  }
`;

export const Figure = styled.figure`
  padding: 0;
  margin: 0;
`;
