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

  @media (min-width: 900px) {
    columns: 6 200px;
  }
`;

export const ListItem = styled.li`
  display: inline-block;
  width: 100%;
  padding: 0.5rem 0;
`;
