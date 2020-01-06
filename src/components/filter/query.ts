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
`;
