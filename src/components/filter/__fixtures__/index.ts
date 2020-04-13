import { FilterArtworksQuery } from '../../../generated/graphql';

export const FILTER_RESULT_DATA_EMPTY: FilterArtworksQuery = {
  artworksConnection: {
    id: 'asds',
    pageInfo: {
      hasNextPage: false,
      endCursor: 'YXJyYXljb25uZWN0aW9uOjI5',
    },
    edges: [],
  },
};

export const FILTER_RESULT_DATA: FilterArtworksQuery = {
  artworksConnection: {
    pageInfo: {
      hasNextPage: true,
      endCursor: 'YXJyYXljb25uZWN0aW9uOjI5',
      __typename: 'PageInfo',
    },
    id:
      'ZmlsdGVyQXJ0d29ya3NDb25uZWN0aW9uOnsiYWdncmVnYXRpb25zIjpbInRvdGFsIl0sInBhZ2UiOjEsInNpemUiOjMwfQ==',
    edges: [
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
        node: {
          id: 'QXJ0d29yazo1ZGMyOTU1NGQ4MmVkYjAwMTI3YzQ5NTQ=',
          href: '/artwork/yorgos-kypris-butterflies-1',
          slug: 'yorgos-kypris-butterflies-1',
          title: 'Butterflies ',
          artistNames: 'Yorgos Kypris',
          imageTitle: 'Yorgos Kypris, ‘Butterflies ’, ca. 2000',
          image: {
            resized: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=600&height=381&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FrnXaUB-ev-ebmcsOAUMazA%2Fmedium.jpg',
              width: 600,
              height: 381,
              __typename: 'ResizedImageUrl',
            },
            resizedThumb: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=254&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FrnXaUB-ev-ebmcsOAUMazA%2Fmedium.jpg',
              width: 400,
              height: 254,
              __typename: 'ResizedImageUrl',
            },
            resizedRetina: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=1200&height=763&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FrnXaUB-ev-ebmcsOAUMazA%2Fmedium.jpg',
              width: 1200,
              height: 763,
              __typename: 'ResizedImageUrl',
            },
            __typename: 'Image',
          },
          __typename: 'Artwork',
        },
        __typename: 'FilterArtworksEdge',
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjE=',
        node: {
          id: 'QXJ0d29yazo1ZGMyOThkZWQ4MmVkYjAwMGUwN2FiN2M=',
          href: '/artwork/yorgos-kypris-bronze-fish',
          slug: 'yorgos-kypris-bronze-fish',
          title: 'Bronze Fish',
          artistNames: 'Yorgos Kypris',
          imageTitle: 'Yorgos Kypris, ‘Bronze Fish’, ca. 2000',
          image: {
            resized: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=600&height=400&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FLgKzxAEZjwp_HuAyrPG3Dg%2Flarge.jpg',
              width: 600,
              height: 400,
              __typename: 'ResizedImageUrl',
            },
            resizedThumb: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=266&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FLgKzxAEZjwp_HuAyrPG3Dg%2Flarge.jpg',
              width: 400,
              height: 266,
              __typename: 'ResizedImageUrl',
            },
            resizedRetina: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=1200&height=800&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FLgKzxAEZjwp_HuAyrPG3Dg%2Flarge.jpg',
              width: 1200,
              height: 800,
              __typename: 'ResizedImageUrl',
            },
            __typename: 'Image',
          },
          __typename: 'Artwork',
        },
        __typename: 'FilterArtworksEdge',
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjI=',
        node: {
          id: 'QXJ0d29yazo1ZGM5NDZlZjA3NzYwNzAwMTEwNjQ2YTQ=',
          href: '/artwork/yorgos-kypris-vortex-emigration-2',
          slug: 'yorgos-kypris-vortex-emigration-2',
          title: 'Vortex Emigration',
          artistNames: 'Yorgos Kypris',
          imageTitle: 'Yorgos Kypris, ‘Vortex Emigration’, ca. 2000',
          image: {
            resized: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=600&height=515&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FnOyoyEFhMFAPk72Lu0iHLw%2Flarge.jpg',
              width: 600,
              height: 515,
              __typename: 'ResizedImageUrl',
            },
            resizedThumb: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=343&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FnOyoyEFhMFAPk72Lu0iHLw%2Flarge.jpg',
              width: 400,
              height: 343,
              __typename: 'ResizedImageUrl',
            },
            resizedRetina: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=1200&height=1030&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FnOyoyEFhMFAPk72Lu0iHLw%2Flarge.jpg',
              width: 1200,
              height: 1030,
              __typename: 'ResizedImageUrl',
            },
            __typename: 'Image',
          },
          __typename: 'Artwork',
        },
        __typename: 'FilterArtworksEdge',
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjM=',
        node: {
          id: 'QXJ0d29yazo1ZGQyZDdkZmE3NGIxNzAwMGQxMGM3M2Y=',
          href: '/artwork/yorgos-kypris-bronze-fish-1',
          slug: 'yorgos-kypris-bronze-fish-1',
          title: 'Bronze Fish',
          artistNames: 'Yorgos Kypris',
          imageTitle: 'Yorgos Kypris, ‘Bronze Fish’, ca. 2010',
          image: {
            resized: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=600&height=900&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FJMDYfB9MXKZrbzZ7cmtOSQ%2Flarge.jpg',
              width: 600,
              height: 900,
              __typename: 'ResizedImageUrl',
            },
            resizedThumb: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=600&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FJMDYfB9MXKZrbzZ7cmtOSQ%2Flarge.jpg',
              width: 400,
              height: 600,
              __typename: 'ResizedImageUrl',
            },
            resizedRetina: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=1200&height=1800&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FJMDYfB9MXKZrbzZ7cmtOSQ%2Flarge.jpg',
              width: 1200,
              height: 1800,
              __typename: 'ResizedImageUrl',
            },
            __typename: 'Image',
          },
          __typename: 'Artwork',
        },
        __typename: 'FilterArtworksEdge',
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjQ=',
        node: {
          id: 'QXJ0d29yazo1ZGQ5NDVmZTA0YzhhNjAwMGQxYWU2ZDQ=',
          href: '/artwork/alex-kypris-blue-macaw',
          slug: 'alex-kypris-blue-macaw',
          title: 'Blue Macaw',
          artistNames: 'Alex Kypris',
          imageTitle: 'Alex Kypris, ‘Blue Macaw’, 2018',
          image: {
            resized: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=600&height=805&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F64oIJXCfiG7uwipWuRrEHg%2Flarge.jpg',
              width: 600,
              height: 805,
              __typename: 'ResizedImageUrl',
            },
            resizedThumb: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=537&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F64oIJXCfiG7uwipWuRrEHg%2Flarge.jpg',
              width: 400,
              height: 537,
              __typename: 'ResizedImageUrl',
            },
            resizedRetina: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=1200&height=1611&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F64oIJXCfiG7uwipWuRrEHg%2Flarge.jpg',
              width: 1200,
              height: 1611,
              __typename: 'ResizedImageUrl',
            },
            __typename: 'Image',
          },
          __typename: 'Artwork',
        },
        __typename: 'FilterArtworksEdge',
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjU=',
        node: {
          id: 'QXJ0d29yazo1ZTk0NWY0OWYzMmEzZDAwMTI0NTE1NTU=',
          href: '/artwork/tom-hammick-traverse',
          slug: 'tom-hammick-traverse',
          title: 'Traverse',
          artistNames: 'Tom Hammick',
          imageTitle: 'Tom Hammick, ‘Traverse’, 2017',
          image: {
            resized: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=600&height=916&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FLt3GZUlLe_i3hKyce202Qg%2Flarge.jpg',
              width: 600,
              height: 916,
              __typename: 'ResizedImageUrl',
            },
            resizedThumb: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=610&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FLt3GZUlLe_i3hKyce202Qg%2Flarge.jpg',
              width: 400,
              height: 610,
              __typename: 'ResizedImageUrl',
            },
            resizedRetina: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=1200&height=1832&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FLt3GZUlLe_i3hKyce202Qg%2Flarge.jpg',
              width: 1200,
              height: 1832,
              __typename: 'ResizedImageUrl',
            },
            __typename: 'Image',
          },
          __typename: 'Artwork',
        },
        __typename: 'FilterArtworksEdge',
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjY=',
        node: {
          id: 'QXJ0d29yazo1ZGQ5NDcwNzk5Yzc2NDAwMGRkMDQ3MWQ=',
          href: '/artwork/alex-kypris-brown-pelican',
          slug: 'alex-kypris-brown-pelican',
          title: 'Brown Pelican',
          artistNames: 'Alex Kypris',
          imageTitle: 'Alex Kypris, ‘Brown Pelican’, 2018',
          image: {
            resized: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=600&height=846&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FEyddsQMKdG_Id3UsUukC6Q%2Flarge.jpg',
              width: 600,
              height: 846,
              __typename: 'ResizedImageUrl',
            },
            resizedThumb: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=564&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FEyddsQMKdG_Id3UsUukC6Q%2Flarge.jpg',
              width: 400,
              height: 564,
              __typename: 'ResizedImageUrl',
            },
            resizedRetina: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=1200&height=1693&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FEyddsQMKdG_Id3UsUukC6Q%2Flarge.jpg',
              width: 1200,
              height: 1693,
              __typename: 'ResizedImageUrl',
            },
            __typename: 'Image',
          },
          __typename: 'Artwork',
        },
        __typename: 'FilterArtworksEdge',
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjc=',
        node: {
          id: 'QXJ0d29yazo1ZGQ5NDk5YmY0YWI1YjAwMGRhYjlkZWE=',
          href: '/artwork/alex-kypris-keel-billed-toucan',
          slug: 'alex-kypris-keel-billed-toucan',
          title: 'Keel-Billed Toucan',
          artistNames: 'Alex Kypris',
          imageTitle: 'Alex Kypris, ‘Keel-Billed Toucan’, 2018',
          image: {
            resized: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=600&height=845&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FXEU-8TL52DxSvtqEFv0ROQ%2Flarge.jpg',
              width: 600,
              height: 845,
              __typename: 'ResizedImageUrl',
            },
            resizedThumb: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=563&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FXEU-8TL52DxSvtqEFv0ROQ%2Flarge.jpg',
              width: 400,
              height: 563,
              __typename: 'ResizedImageUrl',
            },
            resizedRetina: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=1200&height=1690&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FXEU-8TL52DxSvtqEFv0ROQ%2Flarge.jpg',
              width: 1200,
              height: 1690,
              __typename: 'ResizedImageUrl',
            },
            __typename: 'Image',
          },
          __typename: 'Artwork',
        },
        __typename: 'FilterArtworksEdge',
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjg=',
        node: {
          id: 'QXJ0d29yazo1Y2FjY2UxOTBmNDhjZjU4YjQ0Nzk4ZDI=',
          href: '/artwork/leon-polk-smith-werkubersicht-1946-1986-print-no-05',
          slug: 'leon-polk-smith-werkubersicht-1946-1986-print-no-05',
          title: 'werkübersicht 1946 -1986 - print no. 05',
          artistNames: 'Leon Polk Smith',
          imageTitle:
            'Leon Polk Smith, ‘werkübersicht 1946 -1986 - print no. 05’, 1986',
          image: {
            resized: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=600&height=831&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FNlqZ9uFsZtBuZhpftxrzLw%2Flarge.jpg',
              width: 600,
              height: 831,
              __typename: 'ResizedImageUrl',
            },
            resizedThumb: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=554&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FNlqZ9uFsZtBuZhpftxrzLw%2Flarge.jpg',
              width: 400,
              height: 554,
              __typename: 'ResizedImageUrl',
            },
            resizedRetina: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=1200&height=1662&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FNlqZ9uFsZtBuZhpftxrzLw%2Flarge.jpg',
              width: 1200,
              height: 1662,
              __typename: 'ResizedImageUrl',
            },
            __typename: 'Image',
          },
          __typename: 'Artwork',
        },
        __typename: 'FilterArtworksEdge',
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjk=',
        node: {
          id: 'QXJ0d29yazo1ZGQ5NDQyMmNiODZjNDAwMGUzMGM3OTQ=',
          href: '/artwork/alex-kypris-inca-tern',
          slug: 'alex-kypris-inca-tern',
          title: 'Inca tern',
          artistNames: 'Alex Kypris',
          imageTitle: 'Alex Kypris, ‘Inca tern’, 2018',
          image: {
            resized: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=600&height=850&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F2ZzdUlNq4bcuYVl5FzXVTQ%2Flarge.jpg',
              width: 600,
              height: 850,
              __typename: 'ResizedImageUrl',
            },
            resizedThumb: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=566&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F2ZzdUlNq4bcuYVl5FzXVTQ%2Flarge.jpg',
              width: 400,
              height: 566,
              __typename: 'ResizedImageUrl',
            },
            resizedRetina: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=1200&height=1700&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F2ZzdUlNq4bcuYVl5FzXVTQ%2Flarge.jpg',
              width: 1200,
              height: 1700,
              __typename: 'ResizedImageUrl',
            },
            __typename: 'Image',
          },
          __typename: 'Artwork',
        },
        __typename: 'FilterArtworksEdge',
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjEw',
        node: {
          id: 'QXJ0d29yazo1ZGQ5NDRkODIyZjlkZTAwMTE3ZDg0NDI=',
          href: '/artwork/alex-kypris-kingfisher',
          slug: 'alex-kypris-kingfisher',
          title: 'Kingfisher',
          artistNames: 'Alex Kypris',
          imageTitle: 'Alex Kypris, ‘Kingfisher’, 2018',
          image: {
            resized: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=600&height=853&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FgBnsTS6Y33uZF5KViGhnzA%2Flarge.jpg',
              width: 600,
              height: 853,
              __typename: 'ResizedImageUrl',
            },
            resizedThumb: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=568&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FgBnsTS6Y33uZF5KViGhnzA%2Flarge.jpg',
              width: 400,
              height: 568,
              __typename: 'ResizedImageUrl',
            },
            resizedRetina: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=1200&height=1706&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FgBnsTS6Y33uZF5KViGhnzA%2Flarge.jpg',
              width: 1200,
              height: 1706,
              __typename: 'ResizedImageUrl',
            },
            __typename: 'Image',
          },
          __typename: 'Artwork',
        },
        __typename: 'FilterArtworksEdge',
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjEx',
        node: {
          id: 'QXJ0d29yazo1ZGQ5NDgxNDc1MmI5ZTAwMTEwODEwMzQ=',
          href: '/artwork/alex-kypris-saddle-billed-stork',
          slug: 'alex-kypris-saddle-billed-stork',
          title: 'Saddle-billed stork',
          artistNames: 'Alex Kypris',
          imageTitle: 'Alex Kypris, ‘Saddle-billed stork’, 2018',
          image: {
            resized: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=600&height=852&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FWK63n2MxfGHsYAgZ-KK7Ig%2Flarge.jpg',
              width: 600,
              height: 852,
              __typename: 'ResizedImageUrl',
            },
            resizedThumb: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=568&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FWK63n2MxfGHsYAgZ-KK7Ig%2Flarge.jpg',
              width: 400,
              height: 568,
              __typename: 'ResizedImageUrl',
            },
            resizedRetina: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=1200&height=1705&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FWK63n2MxfGHsYAgZ-KK7Ig%2Flarge.jpg',
              width: 1200,
              height: 1705,
              __typename: 'ResizedImageUrl',
            },
            __typename: 'Image',
          },
          __typename: 'Artwork',
        },
        __typename: 'FilterArtworksEdge',
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjEy',
        node: {
          id: 'QXJ0d29yazo1ZGRlYjc4OWYxMmE5ODAwMGUxMGVmZTY=',
          href: '/artwork/yorgos-kypris-oxidised-city',
          slug: 'yorgos-kypris-oxidised-city',
          title: 'Oxidised City',
          artistNames: 'Yorgos Kypris',
          imageTitle: 'Yorgos Kypris, ‘Oxidised City’, 2015',
          image: {
            resized: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=600&height=400&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FY-AV6U-y1Gmy9Ll6zbysNQ%2Flarge.jpg',
              width: 600,
              height: 400,
              __typename: 'ResizedImageUrl',
            },
            resizedThumb: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=267&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FY-AV6U-y1Gmy9Ll6zbysNQ%2Flarge.jpg',
              width: 400,
              height: 267,
              __typename: 'ResizedImageUrl',
            },
            resizedRetina: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=1200&height=801&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FY-AV6U-y1Gmy9Ll6zbysNQ%2Flarge.jpg',
              width: 1200,
              height: 801,
              __typename: 'ResizedImageUrl',
            },
            __typename: 'Image',
          },
          __typename: 'Artwork',
        },
        __typename: 'FilterArtworksEdge',
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjEz',
        node: {
          id: 'QXJ0d29yazo1ZTk0NWYwY2E4Njg2YTAwMTIyNWNkYTY=',
          href:
            '/artwork/caroline-coolen-berkenbast-number-18-vraag-hem-waar-hij-kwartier-maakt',
          slug:
            'caroline-coolen-berkenbast-number-18-vraag-hem-waar-hij-kwartier-maakt',
          title: 'Berkenbast #18 - vraag hem waar hij kwartier maakt',
          artistNames: 'Caroline Coolen',
          imageTitle:
            'Caroline Coolen, ‘Berkenbast #18 - vraag hem waar hij kwartier maakt’, 2017',
          image: {
            resized: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=600&height=720&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F3qX0NZBr3n1QQqZVtLtqXg%2Flarge.jpg',
              width: 600,
              height: 720,
              __typename: 'ResizedImageUrl',
            },
            resizedThumb: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=480&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F3qX0NZBr3n1QQqZVtLtqXg%2Flarge.jpg',
              width: 400,
              height: 480,
              __typename: 'ResizedImageUrl',
            },
            resizedRetina: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=1200&height=1440&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F3qX0NZBr3n1QQqZVtLtqXg%2Flarge.jpg',
              width: 1200,
              height: 1440,
              __typename: 'ResizedImageUrl',
            },
            __typename: 'Image',
          },
          __typename: 'Artwork',
        },
        __typename: 'FilterArtworksEdge',
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjE0',
        node: {
          id: 'QXJ0d29yazo1ZTk0NWYxNWM1YTM0MTAwMGQxZjIyOWU=',
          href: '/artwork/takashi-murakami-doraemon-here-we-go-2',
          slug: 'takashi-murakami-doraemon-here-we-go-2',
          title: 'Doraemon: Here We Go!',
          artistNames: 'Takashi Murakami',
          imageTitle: 'Takashi Murakami, ‘Doraemon: Here We Go!’, 2020',
          image: {
            resized: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=600&height=684&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FX_QtmoxojaElexHjPlKTbg%2Flarge.jpg',
              width: 600,
              height: 684,
              __typename: 'ResizedImageUrl',
            },
            resizedThumb: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=456&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FX_QtmoxojaElexHjPlKTbg%2Flarge.jpg',
              width: 400,
              height: 456,
              __typename: 'ResizedImageUrl',
            },
            resizedRetina: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=1200&height=1369&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FX_QtmoxojaElexHjPlKTbg%2Flarge.jpg',
              width: 1200,
              height: 1369,
              __typename: 'ResizedImageUrl',
            },
            __typename: 'Image',
          },
          __typename: 'Artwork',
        },
        __typename: 'FilterArtworksEdge',
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjE1',
        node: {
          id: 'QXJ0d29yazo1ZTA0YzY4YTk4NmVlMjAwMTIxN2UxMzk=',
          href: '/artwork/yorgos-kypris-fish-in-the-net',
          slug: 'yorgos-kypris-fish-in-the-net',
          title: 'Fish in the net',
          artistNames: 'Yorgos Kypris',
          imageTitle: 'Yorgos Kypris, ‘Fish in the net’, 2013',
          image: {
            resized: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=600&height=807&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F_OBJKNcr67g4gGrpqStefw%2Flarge.jpg',
              width: 600,
              height: 807,
              __typename: 'ResizedImageUrl',
            },
            resizedThumb: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=538&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F_OBJKNcr67g4gGrpqStefw%2Flarge.jpg',
              width: 400,
              height: 538,
              __typename: 'ResizedImageUrl',
            },
            resizedRetina: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=1200&height=1614&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F_OBJKNcr67g4gGrpqStefw%2Flarge.jpg',
              width: 1200,
              height: 1614,
              __typename: 'ResizedImageUrl',
            },
            __typename: 'Image',
          },
          __typename: 'Artwork',
        },
        __typename: 'FilterArtworksEdge',
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjE2',
        node: {
          id: 'QXJ0d29yazo1ZTA1ZTQ4N2NiNWM5OTAwMGQxYmRhMzc=',
          href: '/artwork/yorgos-kypris-vortex-30',
          slug: 'yorgos-kypris-vortex-30',
          title: 'Vortex',
          artistNames: 'Yorgos Kypris',
          imageTitle: 'Yorgos Kypris, ‘Vortex’, 2015',
          image: {
            resized: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=600&height=609&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F5LVfXRXmexkSc8WP5kzQtw%2Flarge.jpg',
              width: 600,
              height: 609,
              __typename: 'ResizedImageUrl',
            },
            resizedThumb: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=406&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F5LVfXRXmexkSc8WP5kzQtw%2Flarge.jpg',
              width: 400,
              height: 406,
              __typename: 'ResizedImageUrl',
            },
            resizedRetina: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=1200&height=1219&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F5LVfXRXmexkSc8WP5kzQtw%2Flarge.jpg',
              width: 1200,
              height: 1219,
              __typename: 'ResizedImageUrl',
            },
            __typename: 'Image',
          },
          __typename: 'Artwork',
        },
        __typename: 'FilterArtworksEdge',
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjE3',
        node: {
          id: 'QXJ0d29yazo1ZTI1YjQ2ZmQ1MjNlOTAwMTIwMmRlMGM=',
          href: '/artwork/yorgos-kypris-butterflies-2',
          slug: 'yorgos-kypris-butterflies-2',
          title: 'Butterflies ',
          artistNames: 'Yorgos Kypris',
          imageTitle: 'Yorgos Kypris, ‘Butterflies ’, ca. 2000',
          image: {
            resized: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=600&height=398&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F5ksG7m1GzCrrZB08-6twRA%2Flarge.jpg',
              width: 600,
              height: 398,
              __typename: 'ResizedImageUrl',
            },
            resizedThumb: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=265&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F5ksG7m1GzCrrZB08-6twRA%2Flarge.jpg',
              width: 400,
              height: 265,
              __typename: 'ResizedImageUrl',
            },
            resizedRetina: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=1200&height=797&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F5ksG7m1GzCrrZB08-6twRA%2Flarge.jpg',
              width: 1200,
              height: 797,
              __typename: 'ResizedImageUrl',
            },
            __typename: 'Image',
          },
          __typename: 'Artwork',
        },
        __typename: 'FilterArtworksEdge',
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjE4',
        node: {
          id: 'QXJ0d29yazo1ZTE5YTZjNWFlNWQxMjAwMGVmNjY2ZDQ=',
          href: '/artwork/yorgos-kypris-ceremonial-boat-6',
          slug: 'yorgos-kypris-ceremonial-boat-6',
          title: 'Ceremonial boat',
          artistNames: 'Yorgos Kypris',
          imageTitle: 'Yorgos Kypris, ‘Ceremonial boat’, 2017',
          image: {
            resized: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=600&height=271&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FXr7gWeNoMxYXLTGsGJBE2w%2Flarge.jpg',
              width: 600,
              height: 271,
              __typename: 'ResizedImageUrl',
            },
            resizedThumb: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=181&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FXr7gWeNoMxYXLTGsGJBE2w%2Flarge.jpg',
              width: 400,
              height: 181,
              __typename: 'ResizedImageUrl',
            },
            resizedRetina: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=1200&height=543&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FXr7gWeNoMxYXLTGsGJBE2w%2Flarge.jpg',
              width: 1200,
              height: 543,
              __typename: 'ResizedImageUrl',
            },
            __typename: 'Image',
          },
          __typename: 'Artwork',
        },
        __typename: 'FilterArtworksEdge',
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjE5',
        node: {
          id: 'QXJ0d29yazo1ZTExY2MzMGE4OTA5YzAwMTJkMmFhODQ=',
          href: '/artwork/yorgos-kypris-frozen-fish-7',
          slug: 'yorgos-kypris-frozen-fish-7',
          title: 'Frozen Fish',
          artistNames: 'Yorgos Kypris',
          imageTitle: 'Yorgos Kypris, ‘Frozen Fish’, 2018',
          image: {
            resized: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=600&height=291&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FgCG7rHzBchBZQWDfm0cDwQ%2Flarge.jpg',
              width: 600,
              height: 291,
              __typename: 'ResizedImageUrl',
            },
            resizedThumb: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=194&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FgCG7rHzBchBZQWDfm0cDwQ%2Flarge.jpg',
              width: 400,
              height: 194,
              __typename: 'ResizedImageUrl',
            },
            resizedRetina: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=1200&height=582&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FgCG7rHzBchBZQWDfm0cDwQ%2Flarge.jpg',
              width: 1200,
              height: 582,
              __typename: 'ResizedImageUrl',
            },
            __typename: 'Image',
          },
          __typename: 'Artwork',
        },
        __typename: 'FilterArtworksEdge',
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjIw',
        node: {
          id: 'QXJ0d29yazo1ZTE3MDkyNTcyMGVkZjAwMTJmOTkxM2I=',
          href: '/artwork/yorgos-kypris-frozen-fish-9',
          slug: 'yorgos-kypris-frozen-fish-9',
          title: 'Frozen Fish',
          artistNames: 'Yorgos Kypris',
          imageTitle: 'Yorgos Kypris, ‘Frozen Fish’, 2018',
          image: {
            resized: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=600&height=302&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FLKGKgy9bwIglVcGfFlq7XA%2Flarge.jpg',
              width: 600,
              height: 302,
              __typename: 'ResizedImageUrl',
            },
            resizedThumb: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=201&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FLKGKgy9bwIglVcGfFlq7XA%2Flarge.jpg',
              width: 400,
              height: 201,
              __typename: 'ResizedImageUrl',
            },
            resizedRetina: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=1200&height=604&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FLKGKgy9bwIglVcGfFlq7XA%2Flarge.jpg',
              width: 1200,
              height: 604,
              __typename: 'ResizedImageUrl',
            },
            __typename: 'Image',
          },
          __typename: 'Artwork',
        },
        __typename: 'FilterArtworksEdge',
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjIx',
        node: {
          id: 'QXJ0d29yazo1Y2I4NWNmNDY5ODE1NTAwMTExNWU2ZTU=',
          href: '/artwork/stacey-gillian-abe-indigogo-1',
          slug: 'stacey-gillian-abe-indigogo-1',
          title: 'Indigogo 1',
          artistNames: 'Stacey Gillian Abe',
          imageTitle: 'Stacey Gillian Abe, ‘Indigogo 1’, 2018',
          image: {
            resized: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=600&height=400&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FNz2AKzP7Up4qhqvKAhJ_aQ%2Flarge.jpg',
              width: 600,
              height: 400,
              __typename: 'ResizedImageUrl',
            },
            resizedThumb: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=266&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FNz2AKzP7Up4qhqvKAhJ_aQ%2Flarge.jpg',
              width: 400,
              height: 266,
              __typename: 'ResizedImageUrl',
            },
            resizedRetina: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=1200&height=800&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FNz2AKzP7Up4qhqvKAhJ_aQ%2Flarge.jpg',
              width: 1200,
              height: 800,
              __typename: 'ResizedImageUrl',
            },
            __typename: 'Image',
          },
          __typename: 'Artwork',
        },
        __typename: 'FilterArtworksEdge',
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjIy',
        node: {
          id: 'QXJ0d29yazo1ZTI1YjVlM2NiODc2YjAwMTFjOTIyMTg=',
          href: '/artwork/yorgos-kypris-diving-fish-1',
          slug: 'yorgos-kypris-diving-fish-1',
          title: 'Diving Fish',
          artistNames: 'Yorgos Kypris',
          imageTitle: 'Yorgos Kypris, ‘Diving Fish’, 2017',
          image: {
            resized: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=600&height=343&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F2wgebQh0tvBImyDmIiBGqg%2Flarge.jpg',
              width: 600,
              height: 343,
              __typename: 'ResizedImageUrl',
            },
            resizedThumb: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=228&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F2wgebQh0tvBImyDmIiBGqg%2Flarge.jpg',
              width: 400,
              height: 228,
              __typename: 'ResizedImageUrl',
            },
            resizedRetina: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=1200&height=686&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F2wgebQh0tvBImyDmIiBGqg%2Flarge.jpg',
              width: 1200,
              height: 686,
              __typename: 'ResizedImageUrl',
            },
            __typename: 'Image',
          },
          __typename: 'Artwork',
        },
        __typename: 'FilterArtworksEdge',
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjIz',
        node: {
          id: 'QXJ0d29yazo1ZTMxYTBjYThhYzgxNzAwMTNiOWYxYmY=',
          href: '/artwork/yorgos-kypris-muscle-exercices-1',
          slug: 'yorgos-kypris-muscle-exercices-1',
          title: 'Muscle Exercices',
          artistNames: 'Yorgos Kypris',
          imageTitle: 'Yorgos Kypris, ‘Muscle Exercices’, 2007',
          image: {
            resized: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=600&height=900&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FNFEvAnSD8RprIYbow4gr7g%2Flarge.jpg',
              width: 600,
              height: 900,
              __typename: 'ResizedImageUrl',
            },
            resizedThumb: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=600&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FNFEvAnSD8RprIYbow4gr7g%2Flarge.jpg',
              width: 400,
              height: 600,
              __typename: 'ResizedImageUrl',
            },
            resizedRetina: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=1200&height=1800&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FNFEvAnSD8RprIYbow4gr7g%2Flarge.jpg',
              width: 1200,
              height: 1800,
              __typename: 'ResizedImageUrl',
            },
            __typename: 'Image',
          },
          __typename: 'Artwork',
        },
        __typename: 'FilterArtworksEdge',
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjI0',
        node: {
          id: 'QXJ0d29yazo1ZTMxYTY2YTVlODM0NTAwMTM1NDQzYTQ=',
          href: '/artwork/yorgos-kypris-vortex-33',
          slug: 'yorgos-kypris-vortex-33',
          title: 'Vortex',
          artistNames: 'Yorgos Kypris',
          imageTitle: 'Yorgos Kypris, ‘Vortex’, 2017',
          image: {
            resized: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=600&height=613&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FqUOOF__wqb7vN-L2ShVjGw%2Flarge.jpg',
              width: 600,
              height: 613,
              __typename: 'ResizedImageUrl',
            },
            resizedThumb: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=409&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FqUOOF__wqb7vN-L2ShVjGw%2Flarge.jpg',
              width: 400,
              height: 409,
              __typename: 'ResizedImageUrl',
            },
            resizedRetina: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=1200&height=1227&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FqUOOF__wqb7vN-L2ShVjGw%2Flarge.jpg',
              width: 1200,
              height: 1227,
              __typename: 'ResizedImageUrl',
            },
            __typename: 'Image',
          },
          __typename: 'Artwork',
        },
        __typename: 'FilterArtworksEdge',
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjI1',
        node: {
          id: 'QXJ0d29yazo1YTA1YzY2ZTljMThkYjFjYjFkZjdlNDQ=',
          href: '/artwork/tetiana-malinovska-easy-game-2',
          slug: 'tetiana-malinovska-easy-game-2',
          title: 'Easy game-2',
          artistNames: 'Tetiana Malinovska',
          imageTitle: 'Tetiana Malinovska, ‘Easy game-2’, 2015',
          image: {
            resized: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=600&height=536&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FL_rwIYe4wQcGoDr-0zGQLA%2Flarge.jpg',
              width: 600,
              height: 536,
              __typename: 'ResizedImageUrl',
            },
            resizedThumb: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=357&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FL_rwIYe4wQcGoDr-0zGQLA%2Flarge.jpg',
              width: 400,
              height: 357,
              __typename: 'ResizedImageUrl',
            },
            resizedRetina: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=1200&height=1073&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FL_rwIYe4wQcGoDr-0zGQLA%2Flarge.jpg',
              width: 1200,
              height: 1073,
              __typename: 'ResizedImageUrl',
            },
            __typename: 'Image',
          },
          __typename: 'Artwork',
        },
        __typename: 'FilterArtworksEdge',
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjI2',
        node: {
          id: 'QXJ0d29yazo1ZTNjM2Q2YTNjYmY2MTAwMTI5OGY1NjI=',
          href: '/artwork/ariadni-kypri-helias-ring',
          slug: 'ariadni-kypri-helias-ring',
          title: 'Helias ring ',
          artistNames: 'Ariadni Kypri',
          imageTitle: 'Ariadni Kypri, ‘Helias ring ’, 2019',
          image: {
            resized: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=600&height=337&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F74isrT3aKdaVIkc-hkKGmg%2Flarge.jpg',
              width: 600,
              height: 337,
              __typename: 'ResizedImageUrl',
            },
            resizedThumb: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=225&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F74isrT3aKdaVIkc-hkKGmg%2Flarge.jpg',
              width: 400,
              height: 225,
              __typename: 'ResizedImageUrl',
            },
            resizedRetina: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=1200&height=675&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F74isrT3aKdaVIkc-hkKGmg%2Flarge.jpg',
              width: 1200,
              height: 675,
              __typename: 'ResizedImageUrl',
            },
            __typename: 'Image',
          },
          __typename: 'Artwork',
        },
        __typename: 'FilterArtworksEdge',
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjI3',
        node: {
          id: 'QXJ0d29yazo1ZTNjNDE1NjBhNzcwNTAwMGQ2NjQwODc=',
          href: '/artwork/ariadni-kypri-nicolas-ring',
          slug: 'ariadni-kypri-nicolas-ring',
          title: 'Nicolas Ring ',
          artistNames: 'Ariadni Kypri',
          imageTitle: 'Ariadni Kypri, ‘Nicolas Ring ’, 2019',
          image: {
            resized: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=600&height=337&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FgZyCZx4JhSUYwpKKUIEP6w%2Flarge.jpg',
              width: 600,
              height: 337,
              __typename: 'ResizedImageUrl',
            },
            resizedThumb: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=225&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FgZyCZx4JhSUYwpKKUIEP6w%2Flarge.jpg',
              width: 400,
              height: 225,
              __typename: 'ResizedImageUrl',
            },
            resizedRetina: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=1200&height=675&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FgZyCZx4JhSUYwpKKUIEP6w%2Flarge.jpg',
              width: 1200,
              height: 675,
              __typename: 'ResizedImageUrl',
            },
            __typename: 'Image',
          },
          __typename: 'Artwork',
        },
        __typename: 'FilterArtworksEdge',
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjI4',
        node: {
          id: 'QXJ0d29yazo1ZThjZTBmM2E4MDFhNTAwMTJjODBlODI=',
          href: '/artwork/serena-scapagnini-hemispheres',
          slug: 'serena-scapagnini-hemispheres',
          title: 'Hemispheres',
          artistNames: 'Serena Scapagnini',
          imageTitle: 'Serena Scapagnini, ‘Hemispheres’, 2013',
          image: {
            resized: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=600&height=337&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FoOcJrALfRhpMxWBBlJhNfg%2Flarge.jpg',
              width: 600,
              height: 337,
              __typename: 'ResizedImageUrl',
            },
            resizedThumb: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=225&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FoOcJrALfRhpMxWBBlJhNfg%2Flarge.jpg',
              width: 400,
              height: 225,
              __typename: 'ResizedImageUrl',
            },
            resizedRetina: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=1200&height=675&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FoOcJrALfRhpMxWBBlJhNfg%2Flarge.jpg',
              width: 1200,
              height: 675,
              __typename: 'ResizedImageUrl',
            },
            __typename: 'Image',
          },
          __typename: 'Artwork',
        },
        __typename: 'FilterArtworksEdge',
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjI5',
        node: {
          id: 'QXJ0d29yazo1ZTRhY2E0ZjJiZDliZTAwMGU1YWY2NGI=',
          href: '/artwork/yorgos-kypris-entrapped-fish-4',
          slug: 'yorgos-kypris-entrapped-fish-4',
          title: 'Entrapped Fish',
          artistNames: 'Yorgos Kypris',
          imageTitle: 'Yorgos Kypris, ‘Entrapped Fish’, ca. 2000',
          image: {
            resized: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=600&height=589&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FvzxWMUzlgctEvHw2HU_xMg%2Flarge.jpg',
              width: 600,
              height: 589,
              __typename: 'ResizedImageUrl',
            },
            resizedThumb: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=392&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FvzxWMUzlgctEvHw2HU_xMg%2Flarge.jpg',
              width: 400,
              height: 392,
              __typename: 'ResizedImageUrl',
            },
            resizedRetina: {
              url:
                'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=1200&height=1178&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FvzxWMUzlgctEvHw2HU_xMg%2Flarge.jpg',
              width: 1200,
              height: 1178,
              __typename: 'ResizedImageUrl',
            },
            __typename: 'Image',
          },
          __typename: 'Artwork',
        },
        __typename: 'FilterArtworksEdge',
      },
    ],
    __typename: 'FilterArtworksConnection',
  },
};
