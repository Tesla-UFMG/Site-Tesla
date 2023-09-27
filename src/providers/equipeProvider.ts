export const equipeProvider: {
  [year: string]: {
    captain: {
      name: string
      imagePath: string
      linkedin: string
    }
    sistemas: {
      nome: string
      subsistemas: {
        nome: string
        members: {
          name: string
          role: string
          imagePath: string
          linkedin: string
        }[]
      }[]
    }[]
  }
} = {
  2017: {
    captain: {
      name: 'Abraão Guia',
      imagePath: '',
      linkedin: 'https://www.linkedin.com/in/abraaoguia/'
    },
    sistemas: [
      {
        nome: 'ADMINISTRAÇÃO',
        subsistemas: [
          {
            nome: 'Gestão',
            members: [
              {
                name: 'Felippe Nogueira',
                role: 'Vice-capitão',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/felippesimoes/'
              },
              {
                name: 'Leonardo Salim',
                role: 'Gestão geral',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/leonardo-marcos-gomes-salim-616a23209/'
              },
              {
                name: 'Lígia Lamounier',
                role: 'Gestão geral',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/l%C3%ADgia-bittencourt-173ba992/'
              },
              {
                name: 'Natália da Mata',
                role: 'Gestão de recursos',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/natalia-da-mata-c-m/'
              }
            ]
          },
          {
            nome: 'Marketing',
            members: [
              {
                name: 'Allan Santos',
                role: 'Marketing',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/allansaints/'
              },
              {
                name: 'Pedro Girundi',
                role: 'Marketing',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/pedrogirundi/'
              }
            ]
          }
        ]
      },
      {
        nome: 'ELETRÔNICA',
        subsistemas: [
          {
            nome: 'Battery Management System',
            members: [
              {
                name: 'Eric Drumond',
                role: 'Battery Management System',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/eric-drumond/'
              },
              {
                name: 'Mateus Simões',
                role: 'Battery Management System',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/mateus-simoes/'
              },
              {
                name: 'Patrick Garcia',
                role: 'Battery Management System',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/patrick-garcia-vilela-15a971a7/ '
              },
              {
                name: 'Pedro Ivan',
                role: 'Battery Management System',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/pedro-ivan-fernandes-99b650152/'
              }
            ]
          },
          {
            nome: 'Control System',
            members: [
              {
                name: 'Alexandre Carvalho',
                role: 'Control System',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/alexandre-carvalho-97351282/'
              },
              {
                name: 'Filipe Raso',
                role: 'Control System',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/filiperaso/'
              },
              {
                name: 'Guilherme Leles',
                role: 'Control System',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/guilherme-henrique-de-almeida-leles-a13159128/'
              },
              {
                name: 'Irving Martins',
                role: 'Control System',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/irvingmrtn/'
              },
              {
                name: 'Kayran Gandhi',
                role: 'Control System',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/kayran/'
              },
              {
                name: 'Leandro Daros',
                role: 'Control System',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/leandrodaros/'
              }
            ]
          },
          {
            nome: 'Electronic Control Unit',
            members: [
              {
                name: 'Francisco Gomes',
                role: 'Electronic Control Unit',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/francisco-gomes-0b0851163/'
              }
            ]
          },
          {
            nome: 'Powertrain',
            members: [
              {
                name: 'Christian Fernandes',
                role: 'Powertrain',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/francisco-gomes-0b0851163/'
              }
            ]
          }
        ]
      },
      {
        nome: 'MECÂNICA',
        subsistemas: [
          {
            nome: 'Aerodinâmica',
            members: [
              {
                name: 'Ana Rangel',
                role: 'Aerodinâmica',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/anaflaviarangel/'
              },
              {
                name: 'Lucas Sampaio',
                role: 'Aerodinâmica',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/lucas-souza-sampaio/'
              }
            ]
          },
          {
            nome: 'Chassi',
            members: [
              {
                name: 'Bernardo Batista',
                role: 'Chassi',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/bernardocaetanobatista/'
              },
              {
                name: 'Igor Assis',
                role: 'Chassi',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/igor-assis-torres/'
              },
              {
                name: 'Italo Alkimim',
                role: 'Chassi',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/italo-de-alkmim-chaves-a46753121/'
              },
              {
                name: 'Matheus Felicetti',
                role: 'Chassi',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/matheus-felicetti-de-azevedo-roland-628a35145/'
              }
            ]
          },
          {
            nome: 'Direção',
            members: [
              {
                name: 'Gabriel Leite',
                role: 'Direção',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/gcleite'
              },
              {
                name: 'Thiago Ladeira',
                role: 'Direção',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/thiago-ladeira-06082416b/'
              }
            ]
          },
          {
            nome: 'Freio',
            members: [
              {
                name: 'Bruno França',
                role: 'Freio',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/mwlite/in/brunofran%C3%A7a'
              }
            ]
          },
          {
            nome: 'Suspensão',
            members: [
              {
                name: 'Marcus Bonifácio',
                role: 'Suspensão',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/marcus-bonifácio'
              },

              {
                name: 'Nelson Júnior',
                role: 'Suspensão',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/nelson-junior-94941112b/'
              },
              {
                name: 'Mauro Hassan',
                role: 'Transmissão',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/maurotanure/'
              }
            ]
          }
        ]
      }
    ]
  },
  2018: {
    captain: {
      name: 'Ana Rangel',
      imagePath: '',
      linkedin: 'https://www.linkedin.com/in/anaflaviarangel/'
    },
    sistemas: [
      {
        nome: 'ADMINISTRAÇÃO',
        subsistemas: [
          {
            nome: 'Gestão',
            members: [
              {
                name: 'Bernardo Nunes',
                role: 'Gerente Geral',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/bernardo-bernardes-269182193/'
              },
              {
                name: 'Gleysson Coura',
                role: 'Gerente de Projetos',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/gleysson-coura-394b27141/'
              },
              {
                name: 'Mirthes Rugani',
                role: 'Gerente de Projetos',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/mirthes-rugani/'
              }
            ]
          },
          {
            nome: 'Financeiro',
            members: [
              {
                name: 'Hermano Lima',
                role: 'Financeiro',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              }
            ]
          },
          {
            nome: 'Marketing',
            members: [
              {
                name: 'Allan Santos',
                role: 'Marketing',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/allansaints/'
              }
            ]
          },
          {
            nome: 'RH',
            members: [
              {
                name: 'Gustavo Pereira',
                role: 'RH',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/mirthes-rugani/'
              }
            ]
          }
        ]
      },
      {
        nome: 'ELETRÔNICA',
        subsistemas: [
          {
            nome: 'Battery Management System',
            members: [
              {
                name: 'Eric Drumond',
                role: 'Battery Management System',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/eric-drumond/'
              },
              {
                name: 'Henrique Guimarães',
                role: 'Battery Management System',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/henrique-guimar%C3%A3es-2422a515b/'
              },
              {
                name: 'Virgínia Sátyro',
                role: 'Battery Management System',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/virgínia-sátyro-2283a515b'
              }
            ]
          },
          {
            nome: 'Control System',
            members: []
          },
          {
            nome: 'Electronic Control Unit',
            members: []
          },
          {
            nome: 'Powertrain',
            members: []
          }
        ]
      },
      {
        nome: 'MECÂNICA',
        subsistemas: [
          {
            nome: 'Aerodinâmica',
            members: []
          },
          {
            nome: 'Chassi',
            members: []
          },
          {
            nome: 'Direção',
            members: []
          },
          {
            nome: 'Freio',
            members: []
          },
          {
            nome: 'Suspensão',
            members: []
          }
        ]
      }
    ]
  }, // 2023: {

  //   members: [
  //     {
  //       setor: 'ADMINISTRAÇÃO',
  //       members: [
  //         {
  //           name: 'Matheo Mares',
  //           role: 'Diretor Geral',
  //           imagePath: 'image-25.jpg',
  //           linkedin: 'https://www.linkedin.com/'
  //         },

  //       ]
  //     },
  //     {
  //       setor: 'ELETRÔNICA',
  //       members: [
  //         {
  //           name: 'Lucas Silveira',
  //           role: 'Diretor Geral',
  //           imagePath: 'image-11.jpg',
  //           linkedin: 'https://www.linkedin.com/'
  //         },

  //       ]
  //     },
  //     {
  //       setor: 'MECÂNICA',
  //       members: [
  //         {
  //           name: 'Renato Nicolato',
  //           role: 'Diretor Geral',
  //           imagePath: 'image-38.jpg',
  //           linkedin: 'https://www.linkedin.com/'
  //         },

  //       ]
  //     }
  //   ]
  // }
  2023: {
    captain: {
      name: 'Eduardo Fujii',
      imagePath: 'image-27.jpg',
      linkedin: 'https://www.linkedin.com/'
    },
    sistemas: [
      {
        nome: 'ADMINISTRAÇÃO',
        subsistemas: [
          {
            nome: 'Desenvolvimento',
            members: [
              {
                name: 'Caio Lelis',
                role: 'Diretor de Desenvolvimento',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Luiza Viana',
                role: 'Desenvolvimento',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              }
            ]
          },
          {
            nome: 'Financeiro',
            members: [
              {
                name: 'Augusto Campos',
                role: 'Diretor de Financeiro',
                imagePath: 'image-24.jpg',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Leonardo Carvalho',
                role: 'Financeiro',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Luíza Bernardo',
                role: 'Financeiro',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              }
            ]
          },
          {
            nome: 'Gestão de Pessoas',
            members: [
              {
                name: 'Petra Luz',
                role: 'Diretora de Gestão de Pessoas',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Isabela Coelho',
                role: 'Gestão de Pessoas',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'José Fernando Silva',
                role: 'Gestão de Pessoas',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Lavínia Sousa',
                role: 'Gestão de Pessoas',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Lyandra Souto',
                role: 'Gestão de Pessoas',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              }
            ]
          },
          {
            nome: 'Design',
            members: [
              {
                name: 'Roger Lafetá',
                role: 'Design',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Nathalielle Lopes',
                role: 'Design',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              }
            ]
          }
        ]
      },
      {
        nome: 'ELETRÔNICA',
        subsistemas: [
          {
            nome: 'Sistema Trativo',
            members: [
              {
                name: 'Vitor Lobão',
                role: 'Diretor de Sistema Trativo',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Antônio Temponi',
                role: 'Sistema Trativo',
                imagePath: 'image-09.jpg',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Davi Clark',
                role: 'Sistema Trativo',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Guilherme Camargo',
                role: 'Sistema Trativo',
                imagePath: 'image-13.jpg',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Lucas Vasconcelos',
                role: 'Sistema Trativo',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Ronaldo Araújo',
                role: 'Sistema Trativo',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Arthur Roquete',
                role: 'Sistema Trativo',
                imagePath: 'image-28.jpg',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Gabriel Cruzati',
                role: 'Sistema Trativo',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              }
            ]
          },
          {
            nome: 'Aquisição de Dados',
            members: [
              {
                name: 'Guilherme Barbosa',
                role: 'Diretor de Aquisição de Dados',
                imagePath: 'image-26.jpg',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'David Protil',
                role: 'Aquisição de Dados',
                imagePath: 'image-29.jpg',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Gabriel Almeida',
                role: 'Aquisição de Dados',
                imagePath: 'image-33.jpg',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Leonardo Fernandes',
                role: 'Aquisição de Dados',
                imagePath: 'image-12.jpg',
                linkedin: 'https://www.linkedin.com/'
              }
            ]
          },
          {
            nome: 'Sistema de Segurança',
            members: [
              {
                name: 'Haroldo Antunes',
                role: 'Diretor de Sistema de Segurança',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Alan Franklin',
                role: 'Sistema de Segurança',
                imagePath: 'image-21.jpg',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Maria Luisa',
                role: 'Sistema de Segurança',
                imagePath: 'image-23.jpg',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Arthur Vaz',
                role: 'Sistema de Segurança',
                imagePath: 'image-34.jpg',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Clara Temponi',
                role: 'Sistema de Segurança',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Gláucia Figueiredo',
                role: 'Sistema de Segurança',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              }
            ]
          },
          {
            nome: 'Controle',
            members: [
              {
                name: 'David Rohrs',
                role: 'Diretor de Controle',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'João Pedro Nunes',
                role: 'Controle',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Tarcísio Carvalho',
                role: 'Controle',
                imagePath: 'image-19.jpg',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Samuel Faria',
                role: 'Controle',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Caius Souza',
                role: 'Controle',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Victória Machado',
                role: 'Controle',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              }
            ]
          }
        ]
      },
      {
        nome: 'MECÂNICA',
        subsistemas: [
          {
            nome: 'Aerodinâmica',
            members: [
              {
                name: 'Marília Fagundes',
                role: 'Diretora de Aerodinâmica',
                imagePath: 'image-32.jpg',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Luísa Vilela',
                role: 'Aerodinâmica',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Júlia Viegas',
                role: 'Aerodinâmica',
                imagePath: 'image-15.jpg',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Lucas Telles',
                role: 'Aerodinâmica',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              }
            ]
          },
          {
            nome: 'Estruturas',
            members: [
              {
                name: 'Raphael Alves',
                role: 'Diretor de Estruturas',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Ana Beatriz Strube',
                role: 'Estruturas',
                imagePath: 'image-14.jpg',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Gabriel Rocha',
                role: 'Estruturas',
                imagePath: 'image-42.jpg',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'João Roque',
                role: 'Estruturas',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              }
            ]
          },
          {
            nome: 'Transmissão',
            members: [
              {
                name: 'Hannah Andrade',
                role: 'Diretora de Transmissão',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Ana Luiza Pereira',
                role: 'Transmissão',
                imagePath: 'image-16.jpg',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Rodrigo Reis',
                role: 'Transmissão',
                imagePath: 'image-18.jpg',
                linkedin: 'https://www.linkedin.com/'
              }
            ]
          },
          {
            nome: 'Dinâmica',
            members: [
              {
                name: 'Anna Júlia Maciel',
                role: 'Diretora de Dinâmica',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Luiza Gonçalves',
                role: 'Freios',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Arthur Lira',
                role: 'Freios',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Lucas Araujo',
                role: 'Direção',
                imagePath: 'image-41.jpg',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Gabriel Amaro',
                role: 'Direção',
                imagePath: 'image-37.jpg',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Arthur Librelon',
                role: 'Suspensão',
                imagePath: 'image-10.jpg',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Lucca Andrade',
                role: 'Suspensão',
                imagePath: 'image-20.jpg',
                linkedin: 'https://www.linkedin.com/'
              }
            ]
          }
        ]
      }
    ]
  }

  //   members: [ 2020

  //     {
  //       setor: 'ELETRÔNICA',
  //       members: [

  //         {
  //           name: 'Bruno Dixini',
  //           role: 'ECU',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/brunodixini/'
  //         },
  //         {
  //           name: 'Gabriel Aragão',
  //           role: 'Interface',
  //           imagePath: '',
  //           linkedin:
  //             'https://www.linkedin.com/in/gabriel-arag%C3%A3o-30620918a/'
  //         },
  //         {
  //           name: 'Guilherme Amorim',
  //           role: 'Telemetria e Comunicação',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/guilherme-vinicius-amorim/ '
  //         },
  //         {
  //           name: 'Irving Martins',
  //           role: 'Diretor',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/irvingmrtn/'
  //         },
  //         {
  //           name: 'Patrick Garcia',
  //           role: 'Eletronic Control Unit',
  //           imagePath: '',
  //           linkedin:
  //             'https://www.linkedin.com/in/patrick-garcia-vilela-15a971a7/'
  //         },
  //         {
  //           name: 'Pedro Couto',
  //           role: 'Telemetria e Comunicação',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/pedrodeoli/'
  //         },
  //         {
  //           name: 'Rafael Monteiro',
  //           role: 'Telemetria e Comunicação',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/rafael-monteiro-3690b49a/  '
  //         },
  //         {
  //           name: 'Victor Moraes',
  //           role: 'Eletronic Control Unit',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/victorjfmoraes/ '
  //         }
  //       ]
  //     },
  //     {
  //       setor: 'MECÂNICA',
  //       members: [
  //         {
  //           name: 'Matthias Novais',
  //           role: 'Aerodinâmica',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/matthias-novais-48b881154/'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // 2020: {
  //   captain: {
  //     name: 'Marcelle Guimarães ',
  //     imagePath: '',
  //     linkedin: 'https://www.linkedin.com/in/marcelle-guimar%C3%A3es-36951519a/'
  //   },
  //   members: [
  //     {
  //       setor: 'ADMINISTRAÇÃO',
  //       members: [
  //         {
  //           name: 'Rodolfo de Albuquerque',
  //           role: 'Gestão de projetos',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Tainá de Jesus',
  //           role: 'Gestão de projetos',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/tainá-hevelin-d-38b6ab158'
  //         },
  //         {
  //           name: 'Carolainy Oliveira',
  //           role: '?',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Gabriel Garrocho',
  //           role: '?',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/gabriel-garrocho-0742991a6/'
  //         },
  //         {
  //           name: 'Henrique Coutinho',
  //           role: '?',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         }
  //       ]
  //     },
  //     {
  //       setor: 'ELETRÔNICA',
  //       members: [
  //         {
  //           name: 'Caroline Melo',
  //           role: 'Diretora de Acumulador',
  //           imagePath: '',
  //           linkedin:
  //             'https://www.linkedin.com/in/caroline-oliveira-melo-1a1656197/'
  //         },

  //         {
  //           name: 'Lucas Arzabe ',
  //           role: 'Acumulador',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/lucas-arzabe-lehmkuhl/'
  //         },
  //         {
  //           name: 'Breno Gomes',
  //           role: 'Aquisição de Dados',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/breno-gomes-63803b209/'
  //         },
  //         {
  //           name: 'João Oliveira',
  //           role: 'Aquisição de Dados',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/joao-oliveira-39a730201/'
  //         },
  //         {
  //           name: 'Matheus Vestergaard',
  //           role: 'Aquisição de Dados',
  //           imagePath: '',
  //           linkedin:
  //             'https://www.linkedin.com/in/matheusoliveiravestergaarddias/'
  //         },
  //         {
  //           name: 'Nathália Costa',
  //           role: 'Aquisição de Dados',
  //           imagePath: '',
  //           linkedin:
  //             'https://www.linkedin.com/in/nathalia-cristina-gon%C3%A7alves-costa-32614ba2/'
  //         },
  //         {
  //           name: 'Pedro de Sá',
  //           role: 'Aquisição de Dados',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/pedrodesamarques/'
  //         },
  //         {
  //           name: 'Wellington Martins',
  //           role: 'Diretor de Baterias',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Amanda Mattos',
  //           role: 'Baterias',
  //           imagePath: '',
  //           linkedin:
  //             'https://www.linkedin.com/in/amanda-mattos-gontijo-2504b41a2/'
  //         },
  //         {
  //           name: 'Bruno Machado',
  //           role: 'Baterias',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Renan Guedes',
  //           role: 'Baterias',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/renan-guedes-b31246156/'
  //         },
  //         {
  //           name: 'Victor Borges',
  //           role: 'Diretor de Controle',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Dominique Auer',
  //           role: 'Controle',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/dominiqueauer/'
  //         },
  //         {
  //           name: 'Eduardo Dunker',
  //           role: 'Controle',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/eduardo-besing/'
  //         },
  //         {
  //           name: 'Felipe Telles',
  //           role: 'Controle',
  //           imagePath: '',
  //           linkedin:
  //             'https://www.linkedin.com/in/felipe-vaz-de-melo-telles-6733661a5/'
  //         },
  //         {
  //           name: 'Helen Ikeda',
  //           role: 'Controle',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/helen-ikeda/'
  //         }
  //       ]
  //     },
  //     {
  //       setor: 'MECÂNICA',
  //       members: [
  //         {
  //           name: 'Ana Clara',
  //           role: 'Aerodinâmica',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/acnoronha/'
  //         },
  //         {
  //           name: 'Eduardo Fujii',
  //           role: 'Aerodinâmica',
  //           imagePath: '',
  //           linkedin:
  //             'https://www.linkedin.com/in/eduardo-henrique-fernandes-fujii-062a2a182/'
  //         },
  //         {
  //           name: 'Maria Luiza Scoralick ',
  //           role: 'Aerodinâmica',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Milena Vasconcelos',
  //           role: 'Aerodinâmica',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/milena-ma-vasconcelos/'
  //         },
  //         {
  //           name: 'João Aguiar',
  //           role: 'Diretor de Dinâmica',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/jo%C3%A3opedroamaralaguiar/'
  //         },
  //         {
  //           name: 'Arthur Viera',
  //           role: 'Direção',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Vitor Sandro',
  //           role: 'Direção',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },

  //         {
  //           name: 'Igor Graçano',
  //           role: 'Freios',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Maria Cordeiro',
  //           role: 'Freios',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/mariaalinecordeiro/'
  //         },

  //         {
  //           name: 'Aldo Silva',
  //           role: 'Suspensão',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },

  //         {
  //           name: 'Heitor Cantão',
  //           role: 'Suspensão',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/heitorcantao/'
  //         },
  //         {
  //           name: 'Matheus Signorini',
  //           role: 'Suspensão',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Luiz Camargos',
  //           role: 'Diretor de Estruturas',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/luizcamargos/'
  //         },
  //         {
  //           name: 'Bernardo Gunther',
  //           role: 'Estruturas',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'David Leite',
  //           role: 'Estruturas',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/davidgoncalvesbleite/'
  //         },
  //         {
  //           name: 'Gabriel Santos',
  //           role: 'Estruturas',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/gabriel-s-739ba1128/'
  //         },
  //         {
  //           name: 'Samuel Augusto',
  //           role: 'Estruturas',
  //           imagePath: '',
  //           linkedin:
  //             'https://www.linkedin.com/in/samuel-augusto-almeida-madureira-763833200/'
  //         },
  //         {
  //           name: 'Thiago Rezende',
  //           role: 'Estruturas',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Arthur Brôndolo',
  //           role: 'Diretor de Transmissão',
  //           imagePath: '',
  //           linkedin:
  //             'https://www.linkedin.com/in/arthur-silva-br%C3%B4ndolo-7515791a8/'
  //         },
  //         {
  //           name: 'Carlos Bueno',
  //           role: 'Transmissão',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/carlosorbueno/'
  //         },
  //         {
  //           name: 'Robert Pereira',
  //           role: 'Transmissão',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // 2021: {
  //   captain: {
  //     name: 'Marcelle Guimarães ',
  //     imagePath: '',
  //     linkedin: 'https://www.linkedin.com/in/marcelle-guimar%C3%A3es-36951519a/'
  //   },
  //   members: [
  //     {
  //       setor: 'ADMINISTRAÇÃO',
  //       members: [
  //         {
  //           name: 'Rodolfo de Albuquerque',
  //           role: 'Gestão de projetos',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Tainá de Jesus',
  //           role: 'Gestão de projetos',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/tainá-hevelin-d-38b6ab158'
  //         },
  //         {
  //           name: 'Gabriel Garrocho',
  //           role: '?',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/gabriel-garrocho-0742991a6/'
  //         },
  //         {
  //           name: 'Henrique Coutinho',
  //           role: '?',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Luana Zaidan ',
  //           role: '?',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/luanazaidan/'
  //         },
  //         {
  //           name: 'Paulo Henrique Silva',
  //           role: '?',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Ramon Celino',
  //           role: '?',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         }
  //       ]
  //     },
  //     {
  //       setor: 'ELETRÔNICA',
  //       members: [
  //         {
  //           name: 'Caroline Melo',
  //           role: 'Diretora de Acumulador',
  //           imagePath: '',
  //           linkedin:
  //             'https://www.linkedin.com/in/caroline-oliveira-melo-1a1656197/'
  //         },
  //         {
  //           name: 'Caique da Cruz',
  //           role: 'Acumulador',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/breno-gomes-63803b209/'
  //         },
  //         {
  //           name: 'Otaviano Alberth',
  //           role: 'Acumulador',
  //           imagePath: '',
  //           linkedin:
  //             'https://www.linkedin.com/in/otaviano-alberth-a4628a126avianoalberth'
  //         },
  //         {
  //           name: 'Breno Gomes',
  //           role: 'Aquisição de Dados',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/breno-gomes-63803b209/'
  //         },
  //         {
  //           name: 'Matheus Vestergaard',
  //           role: 'Aquisição de Dados',
  //           imagePath: '',
  //           linkedin:
  //             'https://www.linkedin.com/in/matheusoliveiravestergaarddias/'
  //         },
  //         {
  //           name: 'Nathália Costa',
  //           role: 'Aquisição de Dados',
  //           imagePath: '',
  //           linkedin:
  //             'https://www.linkedin.com/in/nathalia-cristina-gon%C3%A7alves-costa-32614ba2/'
  //         },
  //         {
  //           name: 'Pedro de Sá',
  //           role: 'Aquisição de Dados',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/pedrodesamarques/'
  //         },
  //         {
  //           name: 'Wellington Martins',
  //           role: 'Diretor de Baterias',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Amanda Mattos',
  //           role: 'Baterias',
  //           imagePath: '',
  //           linkedin:
  //             'https://www.linkedin.com/in/amanda-mattos-gontijo-2504b41a2/'
  //         },
  //         {
  //           name: 'Bruno Machado',
  //           role: 'Baterias',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Renan Guedes',
  //           role: 'Baterias',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/renan-guedes-b31246156/'
  //         },
  //         {
  //           name: 'Victor Borges',
  //           role: 'Diretor de Controle',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Dominique Auer',
  //           role: 'Controle',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/dominiqueauer/'
  //         },
  //         {
  //           name: 'Eduardo Dunker',
  //           role: 'Controle',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/eduardo-besing/'
  //         },
  //         {
  //           name: 'Felipe Telles',
  //           role: 'Controle',
  //           imagePath: '',
  //           linkedin:
  //             'https://www.linkedin.com/in/felipe-vaz-de-melo-telles-6733661a5/'
  //         },
  //         {
  //           name: 'Helen Ikeda',
  //           role: 'Controle',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/helen-ikeda/'
  //         },
  //         {
  //           name: 'Renan Moreira',
  //           role: 'Controle',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/renan-s-moreira/'
  //         }
  //       ]
  //     },
  //     {
  //       setor: 'MECÂNICA',
  //       members: [
  //         {
  //           name: 'Maria Luiza Scoralick ',
  //           role: 'Diretora de Aerodinâmica',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Caio Queiroga',
  //           role: 'Aerodinâmica',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/malu-scoralick-08b5b214b/'
  //         },
  //         {
  //           name: 'Eduardo Fujii',
  //           role: 'Aerodinâmica',
  //           imagePath: '',
  //           linkedin:
  //             'https://www.linkedin.com/in/eduardo-henrique-fernandes-fujii-062a2a182/'
  //         },
  //         {
  //           name: 'Matheus Godinho',
  //           role: 'Aerodinâmica',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Arthur Viera',
  //           role: 'Diretor de Dinâmica',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Anna Júlia Maciel',
  //           role: 'Direção',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Vitor Sandro',
  //           role: 'Direção',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Bruno Maciel ',
  //           role: 'Freios',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/brunomacielsousa/'
  //         },
  //         {
  //           name: 'Igor Graçano',
  //           role: 'Freios',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Maria Cordeiro',
  //           role: 'Freios',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/mariaalinecordeiro/'
  //         },
  //         {
  //           name: 'Thiago Oliveira',
  //           role: 'Freios',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Aldo Silva',
  //           role: 'Suspensão',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Felipe Schmidt',
  //           role: 'Suspensão',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/felipeschmidtoc/'
  //         },
  //         {
  //           name: 'Heitor Cantão',
  //           role: 'Suspensão',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/heitorcantao/'
  //         },
  //         {
  //           name: 'Matheus Signorini',
  //           role: 'Suspensão',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Gabriel Santos',
  //           role: 'Diretor de Estruturas',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/gabriel-s-739ba1128/'
  //         },
  //         {
  //           name: 'Bernardo Gunther',
  //           role: 'Estruturas',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'David Leite',
  //           role: 'Estruturas',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/davidgoncalvesbleite/'
  //         },

  //         {
  //           name: 'Gustavo Prates',
  //           role: 'Estruturas',
  //           imagePath: '',
  //           linkedin:
  //             'https://www.linkedin.com/in/gustavo-c-kubitschek-prates-96a211158/'
  //         },
  //         {
  //           name: 'Henrique Lara',
  //           role: 'Estruturas',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Samuel Augusto',
  //           role: 'Estruturas',
  //           imagePath: '',
  //           linkedin:
  //             'https://www.linkedin.com/in/samuel-augusto-almeida-madureira-763833200/'
  //         },
  //         {
  //           name: 'Arthur Brôndolo',
  //           role: 'Diretor de Transmissão',
  //           imagePath: '',
  //           linkedin:
  //             'https://www.linkedin.com/in/arthur-silva-br%C3%B4ndolo-7515791a8/'
  //         },
  //         {
  //           name: 'Henrique Sotomayor',
  //           role: 'Transmissão',
  //           imagePath: '',
  //           linkedin:
  //             'https://www.linkedin.com/in/henrique-sotomayor-emery-coppoli-13386a209/'
  //         },
  //         {
  //           name: 'João Soares',
  //           role: 'Transmissão',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/in/jvsoaresas/'
  //         },
  //         {
  //           name: 'Robert Pereira',
  //           role: 'Transmissão',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // 2022: {
  //   captain: {
  //     name: 'Rodolfo Villa Verde',
  //     imagePath: '',
  //     linkedin: 'https://www.linkedin.com/'
  //   },
  //   members: [
  //     {
  //       setor: 'ADMINISTRAÇÃO',
  //       members: [
  //         {
  //           name: 'Paulo Henrique',
  //           role: 'Diretor Geral',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Matheo Mares',
  //           role: 'Recursos',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Caio Lelis',
  //           role: 'Recursos',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Samuel Faria',
  //           role: 'Recursos',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Luana Zaidan',
  //           role: 'Design',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Roger Lafetá',
  //           role: 'Design',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         }
  //       ]
  //     },
  //     {
  //       setor: 'ELETRÔNICA',
  //       members: [
  //         {
  //           name: 'Luiza Araújo',
  //           role: 'Diretora Geral',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Lucas Silveira',
  //           role: 'Sistema Trativo',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Leonardo Murilho',
  //           role: 'Sistema Trativo',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Vitor Lobão',
  //           role: 'Sistema Trativo',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Lucas Almeida',
  //           role: 'Diretor de Aquisição de Dados',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Guilherme Barbosa',
  //           role: 'Aquisição de Dados',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Breno Miguel',
  //           role: 'Aquisição de Dados',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Lucas Emídio',
  //           role: 'Aquisição de Dados',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Thiago Santos',
  //           role: 'Diretor de Sistema de Segurança',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Wellington Nascimento',
  //           role: 'Sistema de Segurança',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Haroldo Antunes',
  //           role: 'Sistema de Segurança',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Alan Franklin',
  //           role: 'Sistema de Segurança',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Maria Luisa',
  //           role: 'Sistema de Segurança',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'David Rohrs',
  //           role: 'Controle',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'João Pedro Nunes',
  //           role: 'Controle',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Tarcísio Carvalho',
  //           role: 'Controle',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         }
  //       ]
  //     },
  //     {
  //       setor: 'MECÂNICA',
  //       members: [
  //         {
  //           name: 'Caio Queiroga',
  //           role: 'Diretor Geral',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Eduardo Fujii',
  //           role: 'Diretor de Aerodinâmica',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Marília Fagundes',
  //           role: 'Aerodinâmica',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Luísa Vilela',
  //           role: 'Aerodinâmica',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Gabriel Augusto',
  //           role: 'Diretor de Estruturas',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Raphael Alves',
  //           role: 'Estruturas',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Alan Silva',
  //           role: 'Estruturas',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'João Victor',
  //           role: 'Diretor de Transmissão',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Hannah Andrade',
  //           role: 'Transmissão',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Renato Nicolato',
  //           role: 'Transmissão',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Anna Júlia Maciel',
  //           role: 'Diretora de Dinâmica',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Luiza Gonçalves',
  //           role: 'Freios',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Lucas Araujo',
  //           role: 'Direção',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         },
  //         {
  //           name: 'Marcus Vinícius',
  //           role: 'Direção',
  //           imagePath: '',
  //           linkedin: 'https://www.linkedin.com/'
  //         }
  //       ]
  //     }
  //   ]
  // },
}
