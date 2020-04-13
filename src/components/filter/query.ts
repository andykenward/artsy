import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { ARTWORK_FRAGMENT } from '../artwork/query';

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
          ...ArtworkFragment
        }
      }
    }
  }
  ${ARTWORK_FRAGMENT}
`;
