import { FilterArtworksQuery } from '../../../generated/graphql';

export const FILTER_RESULT_DATA_EMPTY: FilterArtworksQuery = {
  viewer: {
    filterArtworks: {
      artworks: {
        pageInfo: {
          hasNextPage: true,
          endCursor: 'YXJyYXljb25uZWN0aW9uOjI5',
          __typename: 'PageInfo',
        },
        edges: [],
        __typename: 'ArtworkConnection',
      },
      __typename: 'FilterArtworks',
    },
    __typename: 'Viewer',
  },
};

export const FILTER_RESULT_DATA: FilterArtworksQuery = {
  viewer: {
    filterArtworks: {
      artworks: {
        pageInfo: {
          hasNextPage: true,
          endCursor: 'YXJyYXljb25uZWN0aW9uOjI5',
          __typename: 'PageInfo',
        },
        edges: [
          {
            node: {
              id: 'QXJ0d29yazpvbGdhLWtpc3NlbGV2YS1jb250cmUtdGVtcHMtMg==',
              href: '/artwork/olga-kisseleva-contre-temps-2',
              title: 'Contre temps',
              imageTitle: 'Olga Kisseleva, ‘Contre temps’, 2017',
              artistNames: 'bob',
              image: {
                placeholder: '44.83241854490249%',
                resized: {
                  url:
                    'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=179&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F_OuIfBeAhYWEZ6qGRg2EZg%2Flarge.jpg',
                  __typename: 'ResizedImageUrl',
                },
                __typename: 'Image',
              },
              __typename: 'Artwork',
            },
            __typename: 'ArtworkEdge',
          },
          {
            node: {
              id:
                'QXJ0d29yazptYXJ5LXJlaWQta2VsbGV5LXdpdGgtcGF0cmljay1rZWxsZXktcGludXBzLWluLXRoZS1idW5rcy1vZi10aGUtdXNzLXN0dXJnZW9u',
              href:
                '/artwork/mary-reid-kelley-with-patrick-kelley-pinups-in-the-bunks-of-the-uss-sturgeon',
              title: 'Pinups in the Bunks of the USS Sturgeon',
              imageTitle:
                'Mary Reid Kelley with Patrick Kelley, ‘Pinups in the Bunks of the USS Sturgeon’, 2017',
              artistNames: 'bob',
              image: {
                placeholder: '80%',
                resized: {
                  url:
                    'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=320&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FxTIMkrTaxJtqfr1T7W-bJg%2Flarge.jpg',
                  __typename: 'ResizedImageUrl',
                },
                __typename: 'Image',
              },
              __typename: 'Artwork',
            },
            __typename: 'ArtworkEdge',
          },
          {
            node: {
              id: 'QXJ0d29yazpsdWlzLW1lZGluYS1yZWQtZmllbGQtaWlp',
              href: '/artwork/luis-medina-red-field-iii',
              title: 'Red Field III',
              imageTitle: 'Luis Medina, ‘Red Field III’, 2015',
              artistNames: 'bob',
              image: {
                placeholder: '122.72727272727273%',
                resized: {
                  url:
                    'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=490&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FYAITzBZh36ozLDeq4ztmqA%2Flarge.jpg',
                  __typename: 'ResizedImageUrl',
                },
                __typename: 'Image',
              },
              __typename: 'Artwork',
            },
            __typename: 'ArtworkEdge',
          },
          {
            node: {
              id: 'QXJ0d29yazpvc28tbGMtc2luLXRpdHVsby0xOA==',
              href: '/artwork/oso-lc-sin-titulo-18',
              title: 'SIN TITULO (18)',
              imageTitle: 'OSO LC, ‘SIN TITULO (18)’, 2019',
              artistNames: 'bob',
              image: {
                placeholder: '131.50984682713346%',
                resized: {
                  url:
                    'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=526&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F8ts6ggLPfDGUEs7k1Hljbw%2Flarge.jpg',
                  __typename: 'ResizedImageUrl',
                },
                __typename: 'Image',
              },
              __typename: 'Artwork',
            },
            __typename: 'ArtworkEdge',
          },
          {
            node: {
              id:
                'QXJ0d29yazptYXJ5LXJlaWQta2VsbGV5LXdpdGgtcGF0cmljay1rZWxsZXktZ2F1ZHktbmlnaHQ=',
              href: '/artwork/mary-reid-kelley-with-patrick-kelley-gaudy-night',
              title: 'Gaudy Night',
              imageTitle:
                'Mary Reid Kelley with Patrick Kelley, ‘Gaudy Night’, 2017',
              artistNames: 'bob',
              image: {
                placeholder: '66.73913043478261%',
                resized: {
                  url:
                    'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=266&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FEeBUZRYDj56abPARNdwzyA%2Flarge.jpg',
                  __typename: 'ResizedImageUrl',
                },
                __typename: 'Image',
              },
              __typename: 'Artwork',
            },
            __typename: 'ArtworkEdge',
          },
          {
            node: {
              id: 'QXJ0d29yazptd2FtYmEtbXVsYW5nYWxhLXNlbnN1YWwtc25hcmU=',
              href: '/artwork/mwamba-mulangala-sensual-snare',
              title: 'Sensual Snare',
              imageTitle: 'Mwamba Mulangala, ‘Sensual Snare’, 2016',
              artistNames: 'bob',
              image: {
                placeholder: '218.57923497267763%',
                resized: {
                  url:
                    'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=874&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FyML5R5JvfJXc-uGD2DLvLQ%2Flarge.jpg',
                  __typename: 'ResizedImageUrl',
                },
                __typename: 'Image',
              },
              __typename: 'Artwork',
            },
            __typename: 'ArtworkEdge',
          },
        ],
        __typename: 'ArtworkConnection',
      },
      __typename: 'FilterArtworks',
    },
    __typename: 'Viewer',
  },
};
