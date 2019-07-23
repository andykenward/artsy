import gql from 'graphql-tag';

export const QUERY_ARTWORK = gql`
  query Artwork($id: String!) {
    viewer {
      artwork(id: $id) {
        id
        slug
        artist_names
        image_title
        image {
          placeholder
          resized(width: 400) {
            url
            width
            height
          }
          resizedRetina: resized(width: 800) {
            url
            width
            height
          }
        }
      }
    }
  }
`;
