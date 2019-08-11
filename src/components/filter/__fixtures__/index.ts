import { FilterArtworksQuery } from '../../../generated/graphql';

export const FILTER_RESULT_DATA_EMPTY: FilterArtworksQuery = {
  viewer: {
    filterArtworksConnection: {
      id: 'asds',
      pageInfo: {
        hasNextPage: false,
        endCursor: 'YXJyYXljb25uZWN0aW9uOjI5',
      },
      edges: [],
    },
  },
};

export const FILTER_RESULT_DATA: FilterArtworksQuery = {
  viewer: {
    filterArtworksConnection: {
      id:
        'ZmlsdGVyQXJ0d29ya3NDb25uZWN0aW9uOnsiYWdncmVnYXRpb25zIjpbInRvdGFsIl0sInBhZ2UiOjEsInNpemUiOjIwfQ==',
      pageInfo: {
        hasNextPage: false,
        endCursor: 'YXJyYXljb25uZWN0aW9uOjE5',
      },
      edges: [
        {
          cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
          node: {
            id: 'QXJ0d29yazpicnVuby13YWxwb3RoLW1hcmxlbmUtMQ==',
            href: '/artwork/bruno-walpoth-marlene-1',
            title: 'Marlene',
            artistNames: 'Bruno Walpoth',
            imageTitle: 'Bruno Walpoth, ‘Marlene’, 2016',
            image: {
              placeholder: '152.74463007159903%',
              resized: {
                url:
                  'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=610&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F1zY9HAtBJIbj5UDL-4u9ag%2Flarge.jpg',
              },
            },
          },
        },
        {
          cursor: 'YXJyYXljb25uZWN0aW9uOjE=',
          node: {
            id: 'QXJ0d29yazpsb3Vpcy1hcHBsZWJ5LWVuZHltaW9uLTE=',
            href: '/artwork/louis-appleby-endymion-1',
            title: 'Endymion',
            artistNames: 'Louis Appleby',
            imageTitle: 'Louis Appleby, ‘Endymion’, 2019',
            image: {
              placeholder: '133.33333333333331%',
              resized: {
                url:
                  'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=533&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2Fogu2T1JEBnzpwAyn2Jgziw%2Flarge.jpg',
              },
            },
          },
        },
        {
          cursor: 'YXJyYXljb25uZWN0aW9uOjI=',
          node: {
            id:
              'QXJ0d29yazpsdWttYW4tZ2xhc2dvdy12aW50YWdlLWV4aGliaXRpb24tcG9zdGVy',
            href: '/artwork/lukman-glasgow-vintage-exhibition-poster',
            title: 'Vintage Exhibition Poster',
            artistNames: 'Lukman Glasgow',
            imageTitle: 'Lukman Glasgow, ‘Vintage Exhibition Poster’, 1974',
            image: {
              placeholder: '132.1705426356589%',
              resized: {
                url:
                  'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=399&height=528&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FD6YZGkuGQ1be1ueHWiW2mg%2Flarge.jpg',
              },
            },
          },
        },
        {
          cursor: 'YXJyYXljb25uZWN0aW9uOjM=',
          node: {
            id:
              'QXJ0d29yazpyb2JlcnQtaGFydmV5LXZpbnRhZ2UtZXhoaWJpdGlvbi1wb3N0ZXI=',
            href: '/artwork/robert-harvey-vintage-exhibition-poster',
            title: 'Vintage Exhibition Poster',
            artistNames: 'Robert Harvey',
            imageTitle: 'Robert Harvey, ‘Vintage Exhibition Poster’, 1969/1970',
            image: {
              placeholder: '146.484375%',
              resized: {
                url:
                  'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=585&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2Ftq63_4bkB2iiaabz7fJ6fg%2Flarge.jpg',
              },
            },
          },
        },
        {
          cursor: 'YXJyYXljb25uZWN0aW9uOjQ=',
          node: {
            id: 'QXJ0d29yazp0b20tcG9lbG1hbnMtcGFpbnRlcnMtaGFuZA==',
            href: '/artwork/tom-poelmans-painters-hand',
            title: "Painter's Hand",
            artistNames: 'Tom Poelmans',
            imageTitle: "Tom Poelmans, ‘Painter's Hand’, 2019",
            image: {
              placeholder: '72.52094028640907%',
              resized: {
                url:
                  'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=290&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FTnsdDAU9G38R9OLAo9R5Pw%2Flarge.jpg',
              },
            },
          },
        },
        {
          cursor: 'YXJyYXljb25uZWN0aW9uOjU=',
          node: {
            id: 'QXJ0d29yazpndWlsbGVybW8ta3VpdGNhLXVudGl0bGVkLTQ0',
            href: '/artwork/guillermo-kuitca-untitled-44',
            title: 'Untitled',
            artistNames: 'Guillermo Kuitca',
            imageTitle: 'Guillermo Kuitca, ‘Untitled’, 2001',
            image: {
              placeholder: '22.65331664580726%',
              resized: {
                url:
                  'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=90&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FXNeaMm3MJG1xh8zJJRi3eQ%2Flarge.jpg',
              },
            },
          },
        },
        {
          cursor: 'YXJyYXljb25uZWN0aW9uOjY=',
          node: {
            id: 'QXJ0d29yazpiYXJiYXJhLW5hbm5pbmctZmlyZWJpcmQ=',
            href: '/artwork/barbara-nanning-firebird',
            title: 'Firebird',
            artistNames: 'Barbara Nanning',
            imageTitle: 'Barbara Nanning, ‘Firebird’, 2018',
            image: {
              placeholder: '75%',
              resized: {
                url:
                  'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=300&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2Fu1hVHmBBp3eknM9A8bUKkQ%2Flarge.jpg',
              },
            },
          },
        },
        {
          cursor: 'YXJyYXljb25uZWN0aW9uOjc=',
          node: {
            id: 'QXJ0d29yazpiYXJiYXJhLW5hbm5pbmctMTgtNzM=',
            href: '/artwork/barbara-nanning-18-73',
            title: '18-73',
            artistNames: 'Barbara Nanning',
            imageTitle: 'Barbara Nanning, ‘18-73’, 2018',
            image: {
              placeholder: '75%',
              resized: {
                url:
                  'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=300&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FPMUVqcWLyxm_AcVYqUiVkg%2Flarge.jpg',
              },
            },
          },
        },
        {
          cursor: 'YXJyYXljb25uZWN0aW9uOjg=',
          node: {
            id: 'QXJ0d29yazpiYXJiYXJhLW5hbm5pbmctMTctNDY=',
            href: '/artwork/barbara-nanning-17-46',
            title: '17-46',
            artistNames: 'Barbara Nanning',
            imageTitle: 'Barbara Nanning, ‘17-46’, 2019',
            image: {
              placeholder: '75%',
              resized: {
                url:
                  'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=300&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FwSouvhTmDKDmyGKQLGeeHw%2Flarge.jpg',
              },
            },
          },
        },
        {
          cursor: 'YXJyYXljb25uZWN0aW9uOjk=',
          node: {
            id: 'QXJ0d29yazpiYXJiYXJhLW5hbm5pbmctMTgtODI=',
            href: '/artwork/barbara-nanning-18-82',
            title: '18-82',
            artistNames: 'Barbara Nanning',
            imageTitle: 'Barbara Nanning, ‘18-82’, 2019',
            image: {
              placeholder: '75%',
              resized: {
                url:
                  'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=300&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F0rp_TbaNy7uMIY3LAa_W8Q%2Flarge.jpg',
              },
            },
          },
        },
        {
          cursor: 'YXJyYXljb25uZWN0aW9uOjEw',
          node: {
            id: 'QXJ0d29yazpiYXJiYXJhLW5hbm5pbmctMTgtODQ=',
            href: '/artwork/barbara-nanning-18-84',
            title: '18-84',
            artistNames: 'Barbara Nanning',
            imageTitle: 'Barbara Nanning, ‘18-84’, 2018',
            image: {
              placeholder: '75%',
              resized: {
                url:
                  'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=300&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FksgMLxFHs3qR_PGI3AUnFg%2Flarge.jpg',
              },
            },
          },
        },
        {
          cursor: 'YXJyYXljb25uZWN0aW9uOjEx',
          node: {
            id:
              'QXJ0d29yazpyaWNoYXJkLWRpZWJlbmtvcm4tb2phaS1mZXN0aXZhbC0xOTgwLTE=',
            href: '/artwork/richard-diebenkorn-ojai-festival-1980-1',
            title: 'Ojai Festival 1980',
            artistNames: 'Richard Diebenkorn',
            imageTitle: 'Richard Diebenkorn, ‘Ojai Festival 1980’, 1980',
            image: {
              placeholder: '174.42307692307693%',
              resized: {
                url:
                  'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=697&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FpgxynIUzaIHktXnHd491qg%2Flarge.jpg',
              },
            },
          },
        },
        {
          cursor: 'YXJyYXljb25uZWN0aW9uOjEy',
          node: {
            id: 'QXJ0d29yazpiYXJiYXJhLW5hbm5pbmctMTctMzI=',
            href: '/artwork/barbara-nanning-17-32',
            title: '17-32',
            artistNames: 'Barbara Nanning',
            imageTitle: 'Barbara Nanning, ‘17-32’, 2019',
            image: {
              placeholder: '75%',
              resized: {
                url:
                  'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=300&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F7S_LY7ehO2skDt8p7Pp3WA%2Flarge.jpg',
              },
            },
          },
        },
        {
          cursor: 'YXJyYXljb25uZWN0aW9uOjEz',
          node: {
            id: 'QXJ0d29yazpiYXJiYXJhLW5hbm5pbmctMTgtNjI=',
            href: '/artwork/barbara-nanning-18-62',
            title: '18-62',
            artistNames: 'Barbara Nanning',
            imageTitle: 'Barbara Nanning, ‘18-62’, 2019',
            image: {
              placeholder: '75%',
              resized: {
                url:
                  'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=300&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FuK6Sk3wPAd1nJrbgo1R62A%2Flarge.jpg',
              },
            },
          },
        },
        {
          cursor: 'YXJyYXljb25uZWN0aW9uOjE0',
          node: {
            id: 'QXJ0d29yazprYXh4LWxhbWJvcmdoaW5p',
            href: '/artwork/kaxx-lamborghini',
            title: 'Lamborghini',
            artistNames: 'KAXX',
            imageTitle: 'KAXX, ‘Lamborghini’, 2018',
            image: {
              placeholder: '178.27298050139277%',
              resized: {
                url:
                  'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=713&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FgVIfGaBnjIFW-poUvqgmBA%2Flarge.jpg',
              },
            },
          },
        },
        {
          cursor: 'YXJyYXljb25uZWN0aW9uOjE1',
          node: {
            id: 'QXJ0d29yazpyeWFuLWJvY2stbWFzay05',
            href: '/artwork/ryan-bock-mask-9',
            title: 'Mask 9',
            artistNames: 'Ryan Bock',
            imageTitle: 'Ryan Bock, ‘Mask 9’, 2018',
            image: {
              placeholder: '139.93362831858406%',
              resized: {
                url:
                  'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=559&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F78YENpVkLDNOv_Hje7ugJg%2Flarge.jpg',
              },
            },
          },
        },
        {
          cursor: 'YXJyYXljb25uZWN0aW9uOjE2',
          node: {
            id: 'QXJ0d29yazpraWxyb3ktc2F2YWdlLWp1c3RpY2U=',
            href: '/artwork/kilroy-savage-justice',
            title: 'Justice',
            artistNames: 'Kilroy Savage',
            imageTitle: 'Kilroy Savage, ‘Justice’, 2019',
            image: {
              placeholder: '125.73099415204678%',
              resized: {
                url:
                  'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=502&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FcLyedwd3zCUYvxlNJVuwsg%2Flarge.jpg',
              },
            },
          },
        },
        {
          cursor: 'YXJyYXljb25uZWN0aW9uOjE3',
          node: {
            id: 'QXJ0d29yazphbGV4aXMta2FuZHJhLWFsbGV5LWNhdA==',
            href: '/artwork/alexis-kandra-alley-cat',
            title: 'Alley Cat',
            artistNames: 'Alexis Kandra',
            imageTitle: 'Alexis Kandra, ‘Alley Cat’, 2019',
            image: {
              placeholder: '101.86757215619696%',
              resized: {
                url:
                  'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=407&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FaCtYVJPYHxCkpRZsAEsylw%2Flarge.jpg',
              },
            },
          },
        },
        {
          cursor: 'YXJyYXljb25uZWN0aW9uOjE4',
          node: {
            id: 'QXJ0d29yazpla2F0ZXJpbmEtcG9wb3ZhLW5ldy1iZWdpbm5pbmc=',
            href: '/artwork/ekaterina-popova-new-beginning',
            title: 'New Beginning',
            artistNames: 'Ekaterina Popova',
            imageTitle: 'Ekaterina Popova, ‘New Beginning’, 2019',
            image: {
              placeholder: '132.6963906581741%',
              resized: {
                url:
                  'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=530&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FEmXbo80hXQzZk37JDo5JQw%2Flarge.jpg',
              },
            },
          },
        },
        {
          cursor: 'YXJyYXljb25uZWN0aW9uOjE5',
          node: {
            id: 'QXJ0d29yazphbGV4LXRlYS1taWxrLTE=',
            href: '/artwork/alex-tea-milk-1',
            title: 'Milk 1',
            artistNames: 'Alex Tea',
            imageTitle: 'Alex Tea, ‘Milk 1’, 2018',
            image: {
              placeholder: '106.94121554300897%',
              resized: {
                url:
                  'https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=400&height=427&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FJ206kpxw9BxzUVb5cPYt-w%2Flarge.jpg',
              },
            },
          },
        },
      ],
    },
  },
};
