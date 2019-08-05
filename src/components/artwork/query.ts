import gql from 'graphql-tag';

export const QUERY_ARTWORK = gql`
  query Artwork($id: String!) {
    viewer {
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
  }
`;
