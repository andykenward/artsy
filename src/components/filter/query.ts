import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

export const QUERY_FILTER: DocumentNode = gql`
  query FilterArtworks($color: String, $page: Int) {
    artworksConnection(color: $color, page: $page, first: 30, after: "") {
      pageInfo {
        hasNextPage
        endCursor
      }
      id
      edges {
        cursor
        node {
          id
          href
          slug
          title
          artistNames
          imageTitle
          image {
            resized(width: 600) {
              url
              width
              height
            }
            resizedThumb: resized(width: 400) {
              url
              width
              height
            }
            resizedRetina: resized(width: 1200) {
              url
              width
              height
            }
          }
        }
      }
    }
  }
`;
