import { ArtworkQuery } from '../../../generated/graphql';

export const ARTWORK_RESULT_DATA: ArtworkQuery = {
  artwork: {
    id: 'QXJ0d29yazpob3NzYW0tZGlyYXItbmVmZXJ0aXRpLTk=',
    slug: 'hossam-dirar-nefertiti-9',
    artistNames: 'Hossam Dirar',
    imageTitle: 'Hossam Dirar, ‘Nefertiti’, 2018',
    href: 'https://artsy.net',
    image: {
      placeholder: '100.40816326530613%',
      orientation: 'landscape',
      resized: {
        url:
          'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=799&height=803&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FCbM3QgRJTqffp_SwZV5FxQ%2Flarge.jpg',
        width: 400,
        height: 803,
        __typename: 'ResizedImageUrl',
      },
      resizedRetina: {
        url:
          'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=799&height=803&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FCbM3QgRJTqffp_sdsdsSwZV5FxQ%2Flarge.jpg',
        width: 799,
        height: 803,
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
