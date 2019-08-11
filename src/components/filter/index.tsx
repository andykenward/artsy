import { Serif, Spinner } from '@artsy/palette';
import { RouteComponentProps } from '@reach/router';
import React from 'react';
import { oc } from 'ts-optchain';
import { useFilterArtworksQuery } from '../../generated/graphql';
import { getFilter } from '../../utils/routes';
import { Error } from '../error';
import { Image } from '../image';
import { Container, Figure, Link, List, ListItem } from './style';

export const Filter: React.FC<Pick<RouteComponentProps, 'location'>> = ({
  location,
}) => {
  const { data, error, loading } = useFilterArtworksQuery({
    variables: { ...getFilter(oc(location).search()) },
  });

  if (error) {
    return <Error error={error} />;
  }

  const artworks = oc(data).viewer.filterArtworksConnection.edges([]);

  return (
    <>
      <Container loading={loading}>
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
                      <Figure>
                        <Image
                          lazyLoad
                          placeholder={
                            oc(node).image.placeholder() || undefined
                          }
                          imageTitle={node.imageTitle}
                          image={node.image}
                        />
                        <figcaption>
                          <Serif
                            pt="0.5rem"
                            size="1"
                            fontSize="0.75rem"
                            lineHeight="1rem"
                          >
                            <strong>{node.artistNames}</strong>
                          </Serif>
                          <Serif size="1" fontSize="0.75rem" lineHeight="1rem">
                            {node.title}
                          </Serif>
                        </figcaption>
                      </Figure>
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
      {loading && <Spinner />}
    </>
  );
  // }
  // return null;
};
