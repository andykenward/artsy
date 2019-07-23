import { Flex } from '@artsy/palette';
import { Link, Location } from '@reach/router';
import decamelize from 'decamelize';
import React from 'react';
import styled from 'styled-components';

export const colors: { [s: string]: string } = {
  orange: '#F7923A',
  darkblue: '#435EA9',
  gold: '#FFC749',
  darkgreen: '#388540',
  lightblue: '#438c97',
  lightgreen: '#BCCC46',
  yellow: '#FBE854',
  darkorange: '#F1572C',
  red: '#D73127',
  pink: '#B82C83',
  darkviolet: '#642B7F',
  violet: '#6C479C',
  blackAndWhite: '#DFDFDF',
} as const;

export type ColorKeys = keyof typeof colors;

const collectHref = '/collect';
const filterHref = `${collectHref}?color=`;

const Square = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props: { color: string }) => props.color};
`;

const LinkColor = styled(Link)`
  width: 5rem;
  height: 5rem;
  transition: all 0.2s ease;
  display: inline-flex;
  :focus,
  :hover {
    transform: scale(0.9);
  }
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

const ColorItem: React.FC<{ color: string }> = ({ color }) => (
  <Location>
    {({ location }) => {
      const filterColor = decamelize(color, '-');
      const href = `${filterHref}${filterColor}`;
      const match = `${location.pathname}${location.search}` === href;
      return (
        <LinkColor
          aria-label={decamelize(color, ' ')}
          to={match ? `${collectHref}` : href}
          getProps={() => ({
            style: {
              transform: match && 'scale(0.7)',
            },
          })}
        >
          <Square color={colors[color]} />
        </LinkColor>
      );
    }}
  </Location>
);

export const Color: React.FC<{ filterColors?: ColorKeys }> = ({
  filterColors = colors,
}) => {
  const colorOptions = Object.keys(filterColors).map((color, value) => (
    <li key={color}>
      <ColorItem color={color} />
    </li>
  ));
  return (
    <Flex as="nav" p="1rem">
      <List>{colorOptions}</List>
    </Flex>
  );
};
