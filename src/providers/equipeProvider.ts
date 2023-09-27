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
                  'https://www.linkedin.com/in/patrick-garcia-vilela-15a971a7/'
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
                linkedin: 'www.linkedin.com/in/marcus-bonifácio'
              },
              {
                name: 'Nelson Júnior',
                role: 'Suspensão',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/nelson-junior-94941112b/'
              }
            ]
          },
          {
            nome: 'Transmissão',
            members: [
              {
                name: 'Augusto César',
                role: 'Transmissão',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/augustocesartm/'
              },
              {
                name: 'Giusepe Toneti',
                role: 'Transmissão',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/giusepe-toneti/'
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
  },
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
              },
              {
                name: 'Alan Augusto',
                role: 'Desenvolvimento',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Gustavo Mattos',
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
}
