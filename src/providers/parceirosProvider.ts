export type Category = 'diamante' | 'platina' | 'ouro' | 'prata' | 'bronze'

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
        path: 'ansys.jpg',
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
        path: 'fablab.webp',
        title: 'Fablab',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.fablabs.io',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },
      {
        path: 'isofort.png',
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
        path: 'siemens.png',
        title: 'Siemens',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.siemens.com/br/pt.html',
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
        path: 'ciser.svg',
        title: 'Ciser',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.ciser.com.br',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },
      {
        path: 'plastmetal.png',
        title: 'Plastmetal',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://plastmetal.com.br',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },
      {
        path: 'sensata.png',
        title: 'Sensata',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.sensata.com',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },
      {
        path: 'solidworks.png',
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
        path: 'tekbond.svg',
        title: 'Tek Bond',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.tekbond.com.br',
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
        path: 'cabelauto.png',
        title: 'Cabelauto',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.cabelauto.com.br',
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
        path: 'kingston.png',
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
        path: 'littelfuse.png',
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
        path: 'lojaeletrica.png',
        title: 'Loja Elétrica',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'http://www.lojaeletrica.com.br',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },
      {
        path: 'melexis.svg',
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
  }
]
