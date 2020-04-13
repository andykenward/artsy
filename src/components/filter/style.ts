import { Link as ReachLink } from '@reach/router';
import styled from 'styled-components';

export const Container = styled.div<{ loading?: boolean }>`
  padding: 1rem;
  background-color: #f4f4f4;
  opacity: ${({ loading = false }) => (loading ? '0.1' : '1')};
  transition: opacity 0.5s ease;
`;

export const List = styled.ul`
  display: grid;
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(12.5rem, 1fr));
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  height: 100%;
`;

export const Link = styled(ReachLink)`
  text-decoration: none;
  :focus {
    outline: 0.3125rem auto rgba(0, 103, 244, 0.247);
  }
`;

export const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  padding: 0;
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  max-height: 20rem;
  margin: auto;
  object-fit: contain;
`;
