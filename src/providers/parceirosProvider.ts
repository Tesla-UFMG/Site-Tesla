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
        path: 'ansys.png',
        title: 'ANSYS',
        description: 'Companhia relacionada à simulação computacional',
        text: 'ANSYS, Inc. é um desenvolvedor de programas de simulação para engenharia sediado em Canonsburg, Pensilvânia, Estados Unidos. A companhia foi fundada em 1970 por John A. Swanson, e denominada originalmente Swanson Analysis Systems, Inc.',
        to: 'https://www.ansys.com',
        social: {
          facebook: 'https://www.facebook.com/Ansys/',
          instagram: 'https://www.instagram.com/ansys_inc/',
          youtube: 'https://www.youtube.com/user/ansysinc'
        }
      }
    ]
  },
  {
    category: 'platina',
    partners: [
      {
        path: 'weg.png',
        title: 'WEG',
        description:
          'Empresa especializada na fabricação e comercialização de motores elétricos, transformadores, geradores e tintas.',
        text: 'WEG S.A é uma empresa multinacional brasileira, foi fundada em 1961, com sede na cidade de Jaraguá do Sul, no estado de Santa Catarina.',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com/weg.brasil/',
          instagram: 'https://www.instagram.com/weg.motores/',
          youtube: 'https://www.youtube.com/channel/UCs1vPZqsU9WmcSmNkUO6T7w'
        }
      },
      {
        path: 'fablab.webp',
        title: 'Fablab',
        description:
          ' É uma rede de laboratórios públicos - espaços de criatividade, aprendizado e inovação.',
        text: 'Um fab lab é uma oficina que oferece recursos de fabricação digital. Um fab lab é geralmente equipado com um conjunto de ferramentas flexíveis controladas por computador que cobrem diversas escalas de tamanho e diversos materiais diferentes, com o objetivo de fazer "quase tudo".',
        to: 'https://www.fablabs.io',
        social: {
          instagram: 'https://www.instagram.com/institutofablabbrasil/'
        }
      },
      {
        path: 'isofort.png',
        title: 'Isofort',
        description:
          'Empresa especializada no fornecimento de poliestireno expandido (EPS)',
        text: 'A Isofort fabrica bloquetes de EPS, cantoneiras, perfis, fôrmas, lajes nervuradas, juntas de dilatação, painéis para isolamento térmico de ambientes etc. Atua em todo o território nacional.',
        to: 'https://isofort.com.br',
        social: {
          facebook: 'https://www.facebook.com/isofortoficial/',
          instagram: 'https://www.instagram.com/isofortoficial/',
          youtube: 'https://www.youtube.com/channel/UCaJ2z4yP0ac7q-kiZoq5rGw'
        }
      },
      {
        path: 'rois.png',
        title: 'Rois',
        description:
          'Empresa especializada em serviços de usinagem, tornearia e solda.',
        text: 'Em serviços de usinagem, tornearia e solda estão incluídas atividades de grande importância para a indústria e no processo de manufatura de peças metálicas para diversas máquinas e equipamentos. Entre as atividades, citam-se: fresagem, jateamento de peças (também de granalhas), jateamento-usinagem (de areia), tornearia e usinagem de forma geral (tornos, fresas).',
        to: '',
        social: {}
      },
      {
        path: 'siemens.png',
        title: 'Siemens',
        description:
          'Empresa especializada em automação, mobilidade, energia, soluções industriais e empresariais.',
        text: 'A Siemens Aktiengesellschaft, ou simplesmente Siemens AG, é um conglomerado industrial alemão, sendo o maior da Europa e um dos maiores do mundo. Seus principais escritórios estão localizados em Berlim, Munique e Erlangen.',
        to: 'https://www.siemens.com/br/pt.html',
        social: {
          facebook: 'https://www.facebook.com/SiemensBrasil/',
          instagram: 'https://www.instagram.com/siemens/',
          youtube: 'https://www.youtube.com/user/siemens'
        }
      },
      {
        path: 'triadimensio.jpg',
        title: 'Triadimensio',
        description: 'Empresa especializada em impressões 3D',
        text: 'a Triadimensio se dedica à prototipação rápida através da impressão de peças em 3d com modelamento tridimensional feita pelo cliente ou desenvolvido por encomenda',
        to: 'https://www.triadimensio.com/',
        social: {
          facebook: 'https://www.facebook.com/triadimensio/?locale=pt_BR',
          instagram: 'https://www.instagram.com/triadimensio_impressao3d/'
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
