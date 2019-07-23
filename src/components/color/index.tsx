import { Flex } from '@artsy/palette';
import { Location } from '@reach/router';
import decamelize from 'decamelize';
import React from 'react';
import { LinkColor, List, ListItem, Square } from './style';

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
    <ListItem key={color}>
      <ColorItem color={color} />
    </ListItem>
  ));
  return (
    <Flex as="nav" p="1rem" flexWrap="wrap">
      <List>{colorOptions}</List>
    </Flex>
  );
};
