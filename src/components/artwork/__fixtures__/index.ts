import { ArtworkQuery } from '../../../generated/graphql';

export const ARTWORK_RESULT_DATA: ArtworkQuery = {
  artwork: {
    id: 'QXJ0d29yazo1ZDM2MzU4NTI2YjBjZTAwMGRhNjhiMTc=',
    href: '/artwork/hossam-dirar-nefertiti-9',
    slug: 'hossam-dirar-nefertiti-9',
    title: 'Nefertiti',
    artistNames: 'Hossam Dirar',
    imageTitle: 'Hossam Dirar, ‘Nefertiti’, 2018',
    image: {
      resizedThumb: {
        url:
          'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=399&height=401&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FCbM3QgRJTqffp_SwZV5FxQ%2Flarge.jpg',
        width: 399,
        height: 401,
        __typename: 'ResizedImageUrl',
      },
      resized: {
        url:
          'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=600&height=602&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FCbM3QgRJTqffp_SwZV5FxQ%2Flarge.jpg',
        width: 600,
        height: 602,
        __typename: 'ResizedImageUrl',
      },
      resizedRetina: {
        url:
          'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=1200&height=1204&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FCbM3QgRJTqffp_SwZV5FxQ%2Flarge.jpg',
        width: 1200,
        height: 1204,
        __typename: 'ResizedImageUrl',
      },
      __typename: 'Image',
    },
    __typename: 'Artwork',
  },
};

export const ARTWORK_RESULT_ERROR: { errors: any; data: ArtworkQuery } = {
  errors: [
    {
      message: 'error',
      locations: [{ line: 3, column: 5 }],
      path: ['viewer', 'artwork'],
      nodes: undefined,
      source: undefined,
      positions: undefined,
      originalError: undefined,
      extensions: undefined,
      name: 'name',
    },
  ],
  data: { artwork: null },
};
