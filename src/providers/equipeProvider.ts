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
            nome: 'Financeiro',
            members: [
              {
                name: 'Hermano Lima',
                role: 'Financeiro',
                imagePath: '',
                linkedin: ''
              }
            ]
          },
          {
            nome: 'Gestão',
            members: [
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
              },
              {
                name: 'Bernardo Nunes',
                role: 'Gerente Geral',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/bernardo-bernardes-269182193/'
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
                linkedin: ''
              }
            ]
          }
        ]
      },
      {
        nome: 'ELETRÔNICA',
        subsistemas: [
          {
            nome: 'Direção',
            members: [
              {
                name: 'Irving Martins',
                role: 'Diretor',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/irvingmrtn/'
              }
            ]
          },
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
                  'https://www.linkedin.com/in/virg%C3%ADnia-s%C3%A1tyro-2283a515b'
              }
            ]
          },
          {
            nome: 'ECU',
            members: [
              {
                name: 'Bruno Dixini',
                role: 'ECU',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/brunodixini/'
              }
            ]
          },
          {
            nome: 'Eletronic Control Unit',
            members: [
              {
                name: 'Patrick Garcia',
                role: 'Eletronic Control Unit',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/patrick-garcia-vilela-15a971a7/'
              },
              {
                name: 'Victor Moraes',
                role: 'Eletronic Control Unit',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/victorjfmoraes/'
              }
            ]
          },
          {
            nome: 'Interface',
            members: [
              {
                name: 'Gabriel Aragão',
                role: 'Interface',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/gabriel-arag%C3%A3o-30620918a/'
              }
            ]
          },
          {
            nome: 'Telemetria e Comunicação',
            members: [
              {
                name: 'Guilherme Amorim',
                role: 'Telemetria e Comunicação',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/guilherme-vinicius-amorim/'
              },
              {
                name: 'Pedro Couto',
                role: 'Telemetria e Comunicação',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/pedrodeoli/'
              },
              {
                name: 'Rafael Monteiro',
                role: 'Telemetria e Comunicação',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/rafael-monteiro-3690b49a/'
              }
            ]
          }
        ]
      },
      {
        nome: 'MECÂNICA',
        subsistemas: [
          {
            nome: 'Direção',
            members: [
              {
                name: 'Thiago Jardim',
                role: 'Diretor',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/thiago-jardim-62ba4715a/'
              }
            ]
          },
          {
            nome: 'Dinâmica',
            members: [
              {
                name: 'Everton Vargas',
                role: 'Direção',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/evertonvargas/'
              },
              {
                name: 'Felipe Souza',
                role: 'Direção',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/felipe-souza-de-%C3%A1vila-517190161/'
              },
              {
                name: 'Marcus Bonifácio',
                role: 'Diretor',
                imagePath: '',
                linkedin: 'www.linkedin.com/in/marcus-bonifácio'
              },
              {
                name: 'Nicholas Chavda',
                role: 'Freio',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/nicholas-chavda-38a19a1a6/'
              },
              {
                name: 'Nuno Karam',
                role: 'Freio',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/nunokaram/'
              },
              {
                name: 'Gabriel Papotti',
                role: 'Suspensão',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/gabrielpmoura/'
              },
              {
                name: 'Nícolas Filla',
                role: 'Suspensão',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/nicolasfilla-91b53115a/'
              },
              {
                name: 'Pedro Gonçalves',
                role: 'Suspensão',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/pedro-henrique-rosa-gonçalves-b47671209'
              },
              {
                name: 'Rodrigo Pacheco',
                role: 'Transmissão',
                imagePath: '',
                linkedin: ''
              }
            ]
          },
          {
            nome: 'Estruturas',
            members: [
              {
                name: 'Matthias Novais',
                role: 'Aerodinâmica',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/matthias-novais-48b881154/'
              },
              {
                name: 'Gustavo Felix',
                role: 'Chassi',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/gfonetwork/'
              },
              {
                name: 'Ian Rodrigues',
                role: 'Chassi',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/ianrodriguesb/'
              },
              {
                name: 'Igor Machado',
                role: 'Chassi',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/igormfatima/'
              },
              {
                name: 'Igor Assis',
                role: 'Diretor',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/igor-assis-torres/'
              }
            ]
          }
        ]
      },
      {
        nome: 'POWERTRAIN',
        subsistemas: [
          {
            nome: 'Direção',
            members: [
              {
                name: 'Matheus Felicetti',
                role: 'Diretor',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/matheus-felicetti-de-azevedo-roland-628a35145/'
              }
            ]
          },
          {
            nome: 'Acumulador',
            members: [
              {
                name: 'Christian Fernandes',
                role: 'Acumulador',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/christian-fernandes-329bb31b0/'
              },
              {
                name: 'Gabriel Gonçalves',
                role: 'Acumulador',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/gabriel-gon%C3%A7alves-555a87191/'
              }
            ]
          },
          {
            nome: 'Transmissão',
            members: [
              {
                name: 'Kaique Fernandes',
                role: 'Transmissão',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/kaique-martins-fernandes/'
              }
            ]
          }
        ]
      }
    ]
  },
  2019: {
    captain: {
      name: 'Pedro Henrique Rosa',
      imagePath: '',
      linkedin: 'https://www.linkedin.com/in/pedro-henrique-rosa-gonçalves-b47671209'
    },
    sistemas: [
      {
        nome: 'ADMINISTRAÇÃO',
        subsistemas: [
          {
            nome: 'Financeiro',
            members: [
              {
                name: 'Karyne Oliveira',
                role: 'Financeiro',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/karyne-souza-6b304519a/'
              },
              {
                name: 'Lídia Moreira',
                role: 'Financeiro',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/lidiamoreirabarbosa/'
              }
            ]
          },
          {
            nome: 'Gestão',
            members: [
              {
                name: 'Matheus Felicetti',
                role: 'Vice-Capitão',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/matheus-felicetti-de-azevedo-roland-628a35145/'
              },
              {
                name: 'Bernardo Nunes',
                role: 'Diretor Administrativo',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/bernardo-bernardes-269182193/'
              }
            ]
          },
          {
            nome: 'Marketing',
            members: [
              {
                name: 'Nuno Karam',
                role: 'Marketing',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/nunokaram/'
              }
            ]
          }
        ]
      },
      {
        nome: 'ELETRÔNICA',
        subsistemas: [
          {
            nome: 'Direção',
            members: [
              {
                name: 'Henrique Guimarães',
                role: 'Diretor Eletrônica',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/henrique-guimar%C3%A3es-2422a515b/'
              }
            ]
          },
          {
            nome: 'Aquisição',
            members: [
              {
                name: 'Amanda Caixeta',
                role: 'Aquisição',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/amanda-guimaraes-caixeta-silva/'
              },
              {
                name: 'Breno Gomes',
                role: 'Aquisição',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/breno-gomes-63803b209/'
              },
              {
                name: 'João Oliveira',
                role: 'Aquisição',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/joao-oliveira-39a730201/'
              },
              {
                name: 'Nathália Gonçalves',
                role: 'Aquisição',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/nathalia-cristina-gon%C3%A7alves-costa-32614ba2'
              }
            ]
          },
          {
            nome: 'Baterias',
            members: [
              {
                name: 'Heuller Augusto',
                role: 'Baterias',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/heuller-augusto-4b9024154/'
              },
              {
                name: 'Rodolfo Lessa',
                role: 'Baterias',
                imagePath: '',
                linkedin: ''
              },
              {
                name: 'Wellington Martins',
                role: 'Baterias',
                imagePath: '',
                linkedin: ''
              }
            ]
          },
          {
            nome: 'Controle',
            members: [
              {
                name: 'Dominique Auer',
                role: 'Controle',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/dominiqueauer/'
              },
              {
                name: 'Rodrigo Faria',
                role: 'Controle',
                imagePath: '',
                linkedin: ''
              },
              {
                name: 'Victor Borges',
                role: 'Controle',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/victor-freitas-borges-5719551bb/'
              },
              {
                name: 'Victor Moraes',
                role: 'Controle',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/victorjfmoraes/'
              }
            ]
          },
          {
            nome: 'Interface',
            members: [
              {
                name: 'David Simon',
                role: 'Interface',
                imagePath: '',
                linkedin: ''
              },
              {
                name: 'Guilherme Amorim',
                role: 'Interface',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/guilherme-vinicius-amorim/'
              },
              {
                name: 'Renan Moreira',
                role: 'Interface',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/renan-s-moreira/'
              },
              {
                name: 'Virgínia Sátyro',
                role: 'Interface',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/virg%C3%ADnia-s%C3%A1tyro-2283a515b/'
              }
            ]
          }
        ]
      },
      {
        nome: 'MECÂNICA',
        subsistemas: [
          {
            nome: 'Aerodinamica',
            members: [
              {
                name: 'Matthias Novais',
                role: 'Aerodinamica',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/matthias-novais-48b881154/'
              },
              {
                name: 'Paulo Vítor Ferreira',
                role: 'Aerodinamica',
                imagePath: '',
                linkedin: ''
              },
              {
                name: 'Rafael Hazaña',
                role: 'Aerodinamica',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/rhazana/'
              }
            ]
          },
          {
            nome: 'Dinâmica',
            members: [
              {
                name: 'Thiago Jardim',
                role: 'Diretor Dinâmica',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/thiago-jardim-62ba4715a/'
              },
              {
                name: 'Nicholas Chavda',
                role: 'Dinâmica',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/nicholas-chavda-38a19a1a6/'
              },
              {
                name: 'Nícolas Filla',
                role: 'Dinâmica',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/nicolasfilla-91b53115a/'
              }
            ]
          },
          {
            nome: 'Direção',
            members: [
              
              {
                name: 'Marcelle Guimarães',
                role: 'Diretora Direção',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/marcelle-guimar%C3%A3es-36951519a/'
              },
              {
                name: 'Marcus Bonifácio',
                role: 'Diretor Direção',
                imagePath: '',
                linkedin: 'www.linkedin.com/in/marcus-bonifácio'
              },
              {
                name: 'João Aguiar',
                role: 'Direção',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/jo%C3%A3opedroamaralaguiar/'
              }
            ]
          },
          {
            nome: 'Estruturas',
            members: [
              {
                name: 'Tainá de Jesus',
                role: 'Diretor Estruturas',
                imagePath: '',
                linkedin: ''
              },
              {
                name: 'David Leite',
                role: 'Estruturas',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/davidgoncalvesbleite/'
              },
              {
                name: 'Rafael Silluzio',
                role: 'Estruturas',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/rafael-silluzio-60309717a/'
              }
            ]
          },
          {
            nome: 'Freios',
            members: [
              {
                name: 'Gabriel Fraga',
                role: 'Freios',
                imagePath: '',
                linkedin: ''
              },
              {
                name: 'Lucas Souza',
                role: 'Freios',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/lucasfelipesouza/'
              }
            ]
          },
          {
            nome: 'Simulação',
            members: [
              {
                name: 'Luiz Camargos',
                role: 'Simulação',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/luizcamargos/'
              }
            ]
          },
          {
            nome: 'Suspensão',
            members: [
              {
                name: 'Gabriel Papotti',
                role: 'Suspensão',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/gabrielpmoura/'
              },
              {
                name: 'Heitor Cantão',
                role: 'Suspensão',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/heitorcantao/'
              }
            ]
          }
        ]
      },
      {
        nome: 'POWERTRAIN',
        subsistemas: [
          {
            nome: 'Direção',
            members: [
              {
                name: 'Kaique Fernandes',
                role: 'Diretor Powertrain',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/kaique-martins-fernandes/'
              }
            ]
          },
          {
            nome: 'Acumulador',
            members: [
              {
                name: 'Caroline Melo',
                role: 'Acumulador',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/caroline-oliveira-melo-1a1656197/'
              },
              {
                name: 'Gabriel Gonçalves',
                role: 'Acumulador',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/gabriel-gon%C3%A7alves-555a87191/'
              }
            ]
          },
          {
            nome: 'Transmissão',
            members: [
              {
                name: 'Arthur Brôndolo',
                role: 'Transmissão',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/arthur-silva-br%C3%B4ndolo-7515791a8/'
              },
              {
                name: 'Lucas Marinho',
                role: 'Transmissão',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/lucas-pereira-marinho-3256561a7/'
              }
            ]
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
