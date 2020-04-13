import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

export const ARTWORK_FRAGMENT: DocumentNode = gql`
  fragment ArtworkFragment on Artwork {
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
`;

export const QUERY_ARTWORK: DocumentNode = gql`
  query Artwork($id: String!) {
    artwork(id: $id) {
      ...ArtworkFragment
    }
  }
  ${ARTWORK_FRAGMENT}
`;
