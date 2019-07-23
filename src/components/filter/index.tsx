import { Serif, Spinner } from '@artsy/palette';
import { Link as ReachLink, RouteComponentProps } from '@reach/router';
import React from 'react';
import styled from 'styled-components';
import { oc } from 'ts-optchain';
import { useFilterArtworksQuery } from '../../generated/graphql';
import { getFilter } from '../../utils/routes';
import { Error } from '../error';
import { Image } from '../image';
import { Container, List, ListItem } from './style';

const Link = styled(ReachLink)`
  text-decoration: none;
  :focus {
    outline: 5px auto rgba(0, 103, 244, 0.247);
  }
`;

export const Filter: React.FC<Pick<RouteComponentProps, 'location'>> = ({
  location,
}) => {
  const { data, error, loading } = useFilterArtworksQuery({
    variables: { ...getFilter(oc(location).search()) },
  });

  if (error) {
    return <Error error={error} />;
  }

  if (loading) {
    return <Spinner />;
  }
  if (data) {
    const artworks = oc(data).viewer.filter_artworks.artworks.edges([]);

    return (
      <Container>
        {artworks.length > 0 ? (
          <List>
            {artworks.map(item => {
              const node = oc(item).node();
              return (
                node && (
                  <ListItem key={node.id}>
                    <Link
                      aria-label={oc(node).title('')}
                      to={oc(node).href('')}
                    >
                      <Image
                        lazyLoad
                        placeholder={oc(node).image.placeholder() || undefined}
                        image_title={node.image_title}
                        image={node.image}
                      />
                      <Serif pt="0.5rem" size="1">
                        <strong>{node.artist_names}</strong>
                      </Serif>
                      <Serif size="1">{node.title}</Serif>
                    </Link>
                  </ListItem>
                )
              );
            })}
          </List>
        ) : (
          <Serif size="4">No Artwork found with that colour</Serif>
        )}
      </Container>
    );
  }
  return null;
};
