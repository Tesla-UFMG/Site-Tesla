export type Category =
  | 'diamante'
  | 'platina'
  | 'ouro'
  | 'prata'
  | 'bronze'
  | 'parceiros'
  | 'apoio'

export interface PopoverProps {
  title: string
  description: string
  text: string
  to: string
  social: {
    facebook?: string
    instagram?: string
    youtube?: string
  }
}

export const parceirosProvider: {
  category: Category
  partners: Array<
    {
      path: string
    } & PopoverProps
  >
}[] = [
  {
    category: 'diamante',
    partners: [
      {
        path: 'weg.webp',
        title: 'ANSYS',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.ansys.com',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      }
    ]
  },
  {
    category: 'platina',
    partners: [
      {
        path: 'weg.webp',
        title: 'WEG',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },
      {
        path: 'weg.webp',
        title: 'Fablab',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },
      {
        path: 'weg.webp',
        title: 'Isofort',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://isofort.com.br',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },
      {
        path: 'weg.webp',
        title: 'Rois',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },
      {
        path: 'weg.webp',
        title: 'Siemens',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },
      {
        path: 'weg.webp',
        title: 'Triadimensio',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      }
    ]
  },
  {
    category: 'ouro',
    partners: [
      {
        path: 'weg.webp',
        title: 'ST',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      }
    ]
  },
  {
    category: 'prata',
    partners: [
      {
        path: 'weg.webp',
        title: 'Ciser',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },
      {
        path: 'weg.webp',
        title: 'Plastmetal',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },
      {
        path: 'weg.webp',
        title: 'Sensata',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },
      {
        path: 'weg.webp',
        title: 'SolidWorks',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },
      {
        path: 'weg.webp',
        title: 'STEP',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },
      {
        path: 'weg.webp',
        title: 'Stick',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },
      {
        path: 'weg.webp',
        title: 'TE',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },
      {
        path: 'weg.webp',
        title: 'Tek Bond',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      }
    ]
  },
  {
    category: 'bronze',
    partners: [
      {
        path: 'weg.webp',
        title: 'Cabelauto',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },
      {
        path: 'weg.webp',
        title: 'E-mob',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },
      {
        path: 'weg.webp',
        title: 'Kingston',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },
      {
        path: 'weg.webp',
        title: 'Littelfuse',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },
      {
        path: 'weg.webp',
        title: 'Loja Elétrica',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },
      {
        path: 'weg.webp',
        title: 'Melexis',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      }
    ]
  },
  {
    category: 'apoio',
    partners: [
      {
        path: 'weg.webp',
        title: 'WEG',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },
      {
        path: 'weg.webp',
        title: 'WEG',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },
      {
        path: 'weg.webp',
        title: 'WEG',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },
      {
        path: 'weg.webp',
        title: 'WEG',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },
      {
        path: 'weg.webp',
        title: 'WEG',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },
      {
        path: 'weg.webp',
        title: 'WEG',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      }
    ]
  }
]
