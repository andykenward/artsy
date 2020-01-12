import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

export const QUERY_ARTWORK: DocumentNode = gql`
  query Artwork($id: String!) {
    artwork(id: $id) {
      id
      slug
      artistNames
      imageTitle
      href
      image {
        placeholder
        orientation
        resized(width: 600) {
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
`;
