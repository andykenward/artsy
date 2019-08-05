import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

export const QUERY_FILTER: DocumentNode = gql`
  query FilterArtworks($color: String, $page: Int) {
    viewer {
      filterArtworks(
        aggregations: [TOTAL]
        size: 0
        color: $color
        page: $page
      ) {
        artworks: artworksConnection(first: 30, after: "") {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              id
              href
              title
              artistNames
              imageTitle
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
