import { Serif, Spinner } from '@artsy/palette';
import { RouteComponentProps } from '@reach/router';
import React from 'react';
import { useFilterArtworksQuery } from '../../generated/graphql';
import { getFilter } from '../../utils/routes';
import { Error } from '../error';
import { Container, Figure, Img, Link, List, ListItem } from './style';

export const Filter: React.FC<Pick<RouteComponentProps, 'location'>> = ({
  location,
}) => {
  const { data, error, loading } = useFilterArtworksQuery({
    variables: { ...getFilter(location?.search) },
  });

  if (error) {
    return <Error error={error} />;
  }

  const artworks = data?.artworksConnection?.edges;

  return (
    <>
      <Container loading={loading}>
        {artworks && artworks.length > 0 ? (
          <List>
            {artworks.map(item => {
              const node = item?.node;
              return (
                node != null && (
                  <ListItem key={node.id}>
                    <Link aria-label={node?.title ?? ''} to={node?.href ?? ''}>
                      <Figure>
                        <Img
                          alt={node.imageTitle ?? ''}
                          width={node.image?.resizedThumb?.width ?? undefined}
                          height={node.image?.resizedThumb?.height ?? undefined}
                          src={node.image?.resizedThumb?.url ?? undefined}
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
                          <Serif
                            size="1"
                            fontSize="0.75rem"
                            lineHeight="1rem"
                            style={{
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                            }}
                          >
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
          !loading && <Serif size="4">No Artwork found with that colour</Serif>
        )}
      </Container>
      {loading && <Spinner />}
    </>
  );
};
