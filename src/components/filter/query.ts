import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

export const QUERY_FILTER: DocumentNode = gql`
  query FilterArtworks($color: String, $page: Int) {
    viewer {
      filter_artworks(
        aggregations: [TOTAL]
        size: 0
        color: $color
        page: $page
      ) {
        artworks: artworks_connection(first: 30, after: "") {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              id
              href
              title
              artist_names
              image_title
              image {
                placeholder
                resized(width: 400) {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;
