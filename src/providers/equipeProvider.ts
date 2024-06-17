export const equipeProvider: {
  [year: string]: {
    captain: {
      name: string
      imagePath: string
      linkedin: string
    }
    sistemas: {
      nome: string
      diretor?: {
        name: string
        role: string
        imagePath: string
        linkedin: string
      }
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
                role: 'Membro',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/leonardo-marcos-gomes-salim-616a23209/'
              },
              {
                name: 'Lígia Lamounier',
                role: 'Membro',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/l%C3%ADgia-bittencourt-173ba992/'
              },
              {
                name: 'Natália da Mata',
                role: 'Membro',
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
                role: 'Membro',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/allansaints/'
              },
              {
                name: 'Pedro Girundi',
                role: 'Membro',
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
                role: 'Membro',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/eric-drumond/'
              },
              {
                name: 'Mateus Simões',
                role: 'Membro',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/mateus-simoes/'
              },
              {
                name: 'Patrick Garcia',
                role: 'Membro',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/patrick-garcia-vilela-15a971a7/'
              },
              {
                name: 'Pedro Ivan',
                role: 'Membro',
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
                role: 'Membro',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/alexandre-carvalho-97351282/'
              },
              {
                name: 'Filipe Raso',
                role: 'Membro',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/filiperaso/'
              },
              {
                name: 'Guilherme Leles',
                role: 'Membro',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/guilherme-henrique-de-almeida-leles-a13159128/'
              },
              {
                name: 'Irving Martins',
                role: 'Membro',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/irvingmrtn/'
              },
              {
                name: 'Kayran Gandhi',
                role: 'Membro',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/kayran/'
              },
              {
                name: 'Leandro Daros',
                role: 'Membro',
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
                role: 'Membro',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/anaflaviarangel/'
              },
              {
                name: 'Lucas Sampaio',
                role: 'Membro',
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
                role: 'Membro',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/bernardocaetanobatista/'
              },
              {
                name: 'Igor Assis',
                role: 'Membro',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/igor-assis-torres/'
              },
              {
                name: 'Italo Alkimim',
                role: 'Membro',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/italo-de-alkmim-chaves-a46753121/'
              },
              {
                name: 'Matheus Felicetti',
                role: 'Membro',
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
                role: 'Membro',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/gcleite'
              },
              {
                name: 'Thiago Ladeira',
                role: 'Membro',
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
      imagePath: '000.jpg',
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
                imagePath: '021.jpg',
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
                imagePath: '014.jpg',
                linkedin: 'https://www.linkedin.com/in/irvingmrtn/'
              }
            ]
          },
          {
            nome: 'Battery Management System',
            members: [
              {
                name: 'Eric Drumond',
                role: 'Membro',
                imagePath: '006.jpg',
                linkedin: 'https://www.linkedin.com/in/eric-drumond/'
              },
              {
                name: 'Henrique Guimarães',
                role: 'Membro',
                imagePath: '002.jpg',
                linkedin:
                  'https://www.linkedin.com/in/henrique-guimar%C3%A3es-2422a515b/'
              },
              {
                name: 'Virgínia Sátyro',
                role: 'Membro',
                imagePath: '004.jpg',
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
                imagePath: '007.jpg',
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
                imagePath: '003.jpg',
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
                imagePath: '011.jpg',
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
                imagePath: '020.jpg',
                linkedin: 'https://www.linkedin.com/in/thiago-jardim-62ba4715a/'
              }
            ]
          },
          {
            nome: 'Dinâmica',
            members: [
              {
                name: 'Marcus Bonifácio',
                role: 'Diretor',
                imagePath: '017.jpg',
                linkedin: 'www.linkedin.com/in/marcus-bonifácio'
              },
              {
                name: 'Everton Vargas',
                role: 'Membro',
                imagePath: '008.jpg',
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
                name: 'Nicholas Chavda',
                role: 'Freio',
                imagePath: '001.jpg',
                linkedin:
                  'https://www.linkedin.com/in/nicholas-chavda-38a19a1a6/'
              },
              {
                name: 'Nuno Karam',
                role: 'Freio',
                imagePath: '005.jpg',
                linkedin: 'https://www.linkedin.com/in/nunokaram/'
              },
              {
                name: 'Gabriel Papotti',
                role: 'Suspensão',
                imagePath: '015.jpg',
                linkedin: 'https://www.linkedin.com/in/gabrielpmoura/'
              },
              {
                name: 'Nícolas Filla',
                role: 'Suspensão',
                imagePath: '012.jpg',
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
                role: 'Membro',
                imagePath: '013.jpg',
                linkedin:
                  'https://www.linkedin.com/in/matthias-novais-48b881154/'
              },
              {
                name: 'Gustavo Felix',
                role: 'Membro',
                imagePath: '018.jpg',
                linkedin: 'https://www.linkedin.com/in/gfonetwork/'
              },
              {
                name: 'Ian Rodrigues',
                role: 'Membro',
                imagePath: '016.jpg',
                linkedin: 'https://www.linkedin.com/in/ianrodriguesb/'
              },
              {
                name: 'Igor Machado',
                role: 'Membro',
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
                imagePath: '009.jpg',
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
                imagePath: '010.jpg',
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
      imagePath: 'Pedro Rosa.jpg',
      linkedin:
        'https://www.linkedin.com/in/pedro-henrique-rosa-gonçalves-b47671209'
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
                imagePath: 'Lídia Moreira.jpg',
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
                imagePath: 'Matheus Felicetti.jpg',
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
                imagePath: 'Nuno Karam.jpg',
                linkedin: 'https://www.linkedin.com/in/nunokaram/'
              }
            ]
          }
        ]
      },
      {
        nome: 'ELETRÔNICA',
        diretor: {
          name: 'Henrique Guimarães',
          role: 'Diretor Eletrônica',
          imagePath: '',
          linkedin:
            'https://www.linkedin.com/in/henrique-guimar%C3%A3es-2422a515b/'
        },
        subsistemas: [
          {
            nome: 'Aquisição',
            members: [
              {
                name: 'Amanda Caixeta',
                role: 'Aquisição',
                imagePath: 'Amanda Caixeta.jpg',
                linkedin:
                  'https://www.linkedin.com/in/amanda-guimaraes-caixeta-silva/'
              },
              {
                name: 'Breno Gomes',
                role: 'Aquisição',
                imagePath: 'Breno Gomes.jpg',
                linkedin: 'https://www.linkedin.com/in/breno-gomes-63803b209/'
              },
              {
                name: 'João Oliveira',
                role: 'Aquisição',
                imagePath: 'João Oliveira.jpg',
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
                imagePath: 'Heuller Augusto.jpg',
                linkedin:
                  'https://www.linkedin.com/in/heuller-augusto-4b9024154/'
              },
              {
                name: 'Rodolfo Lessa',
                role: 'Baterias',
                imagePath: 'Rodolfo Lessa.jpg',
                linkedin: ''
              },
              {
                name: 'Wellington Martins',
                role: 'Baterias',
                imagePath: 'Wellington Martins.jpg',
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
                imagePath: 'Victor Borges.jpg',
                linkedin:
                  'https://www.linkedin.com/in/victor-freitas-borges-5719551bb/'
              },
              {
                name: 'Victor Moraes',
                role: 'Controle',
                imagePath: 'Victor Moraes.jpg',
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
                imagePath: 'David Simon.jpg',
                linkedin: ''
              },
              {
                name: 'Guilherme Amorim',
                role: 'Interface',
                imagePath: 'Guilherme Amorim.jpg',
                linkedin:
                  'https://www.linkedin.com/in/guilherme-vinicius-amorim/'
              },
              {
                name: 'Renan Moreira',
                role: 'Interface',
                imagePath: 'Renan Moreira.jpg',
                linkedin: 'https://www.linkedin.com/in/renan-s-moreira/'
              },
              {
                name: 'Virgínia Sátyro',
                role: 'Interface',
                imagePath: 'Virgínia Sátyro.jpg',
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
                imagePath: 'Paulo Ferreira.jpg',
                linkedin: ''
              },
              {
                name: 'Rafael Hazaña',
                role: 'Aerodinamica',
                imagePath: 'Rafael Hazaña.jpg',
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
                imagePath: 'Thiago Jardim.jpg',
                linkedin: 'https://www.linkedin.com/in/thiago-jardim-62ba4715a/'
              },
              {
                name: 'Nicholas Chavda',
                role: 'Dinâmica',
                imagePath: 'Nicholas Chavda.jpg',
                linkedin:
                  'https://www.linkedin.com/in/nicholas-chavda-38a19a1a6/'
              },
              {
                name: 'Nícolas Filla',
                role: 'Dinâmica',
                imagePath: 'Nícolas Filla.jpg',
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
                imagePath: 'Marcelle Guimarães.jpg',
                linkedin:
                  'https://www.linkedin.com/in/marcelle-guimar%C3%A3es-36951519a/'
              },
              {
                name: 'Marcus Bonifácio',
                role: 'Diretor Direção',
                imagePath: 'Marcus Bonifácio.jpg',
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
                role: 'Diretora Estruturas',
                imagePath: 'Tainá de Jesus.jpg',
                linkedin: ''
              },
              {
                name: 'David Leite',
                role: 'Estruturas',
                imagePath: 'David Leite.jpg',
                linkedin: 'https://www.linkedin.com/in/davidgoncalvesbleite/'
              },
              {
                name: 'Rafael Silluzio',
                role: 'Estruturas',
                imagePath: 'Rafael Silluzio.jpg',
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
                imagePath: 'Gabriel Fraga.jpg',
                linkedin: ''
              },
              {
                name: 'Lucas Souza',
                role: 'Freios',
                imagePath: 'Lucas Souza.jpg',
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
                imagePath: 'Luiz Camargos.jpg',
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
                imagePath: 'Gabriel Papotti.jpg',
                linkedin: 'https://www.linkedin.com/in/gabrielpmoura/'
              },
              {
                name: 'Heitor Cantão',
                role: 'Suspensão',
                imagePath: 'Heitor Cantão.jpg',
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
                imagePath: 'Kaique Fernandes.jpg',
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
                imagePath: 'Caroline Melo.jpg',
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
                imagePath: 'Arthur Brôndolo.jpg',
                linkedin:
                  'https://www.linkedin.com/in/arthur-silva-br%C3%B4ndolo-7515791a8/'
              },
              {
                name: 'Lucas Marinho',
                role: 'Transmissão',
                imagePath: 'Lucas Marinho.jpg',
                linkedin:
                  'https://www.linkedin.com/in/lucas-pereira-marinho-3256561a7/'
              }
            ]
          }
        ]
      }
    ]
  },
  2020: {
    captain: {
      name: 'Marcelle Guimarães',
      imagePath: '',
      linkedin: 'https://www.linkedin.com/in/marcelle-guimar%C3%A3es-36951519a/'
    },
    sistemas: [
      {
        nome: 'ADMINISTRAÇÃO',
        subsistemas: [
          {
            nome: 'Geral',
            members: [
              {
                name: 'Carolainy Oliveira',
                role: 'Administração',
                imagePath: '',
                linkedin: ''
              },
              {
                name: 'Gabriel Garrocho',
                role: 'Administração',
                imagePath: '',
                linkedin: ''
              },
              {
                name: 'Henrique Coutinho',
                role: 'Administração',
                imagePath: '',
                linkedin: ''
              }
            ]
          },
          {
            nome: 'Gestão',
            members: [
              {
                name: 'Rodolfo de Albuquerque',
                role: 'Gestão de projetos',
                imagePath: '',
                linkedin: ''
              },
              {
                name: 'Tainá de Jesus',
                role: 'Gestão de projetos',
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
            nome: 'Acumulador',
            members: [
              {
                name: 'Caroline Melo',
                role: 'Diretora Acumulador',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/caroline-oliveira-melo-1a1656197/'
              },
              {
                name: 'Lucas Arzabe',
                role: 'Acumulador',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/lucas-arzabe-lehmkuhl/'
              }
            ]
          },
          {
            nome: 'Aquisição',
            members: [
              {
                name: 'Breno Gomes',
                role: 'Diretor',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/breno-gomes-63803b209/'
              },
              {
                name: 'João Oliveira',
                role: 'Aquisição Aquisição',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/joao-oliveira-39a730201/'
              },
              {
                name: 'Matheus Vestergaard',
                role: 'Aquisição',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/matheusoliveiravestergaarddias/'
              },
              {
                name: 'Nathália Costa',
                role: 'Aquisição',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/nathalia-cristina-gon%C3%A7alves-costa-32614ba2/'
              },
              {
                name: 'Pedro de Sá',
                role: 'Aquisição',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/pedrodesamarques/'
              }
            ]
          },
          {
            nome: 'Baterias',
            members: [
              {
                name: 'Wellington Martins',
                role: 'Diretor Baterias',
                imagePath: '',
                linkedin: ''
              },
              {
                name: 'Amanda Mattos',
                role: 'Baterias',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/amanda-mattos-gontijo-2504b41a2/'
              },
              {
                name: 'Bruno Machado',
                role: 'Baterias',
                imagePath: '',
                linkedin: ''
              },
              {
                name: 'Renan Guedes',
                role: 'Baterias',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/renan-guedes-b31246156/'
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
                name: 'Eduardo Dunker',
                role: 'Controle',
                imagePath: '',
                linkedin: ''
              },
              {
                name: 'Felipe Telles',
                role: 'Controle',
                imagePath: '',
                linkedin: ''
              },
              {
                name: 'Helen Ikeda',
                role: 'Controle',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/helen-ikeda/'
              },
              {
                name: 'Renan Moreira',
                role: 'Controle',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/renan-s-moreira/'
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
                name: 'Ana Clara',
                role: 'Membro',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/acnoronha/'
              },
              {
                name: 'Eduardo Fujii',
                role: 'Membro',
                imagePath: '',
                linkedin: ''
              },
              {
                name: 'Maria Luiza Scoralick',
                role: 'Membro',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/malu-scoralick-08b5b214b/'
              },
              {
                name: 'Milena Vasconcelos',
                role: 'Membro',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/milena-ma-vasconcelos/'
              }
            ]
          },
          {
            nome: 'Dinâmica',
            members: [
              {
                name: 'João Aguiar',
                role: 'Diretor Dinâmica',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/jo%C3%A3opedroamaralaguiar/'
              },
              {
                name: 'Arthur Viera',
                role: 'Direção',
                imagePath: '',
                linkedin: ''
              },
              {
                name: 'Vitor Sandro',
                role: 'Direção',
                imagePath: '',
                linkedin: ''
              },
              {
                name: 'Igor Graçano',
                role: 'Freio',
                imagePath: '',
                linkedin: ''
              },
              {
                name: 'Maria Cordeiro',
                role: 'Freio',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/mariaalinecordeiro/'
              },
              {
                name: 'Aldo Silva',
                role: 'Suspensão',
                imagePath: '',
                linkedin: ''
              },
              {
                name: 'Heitor Cantão',
                role: 'Suspensão',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/heitorcantao/'
              },
              {
                name: 'Matheus Signorini',
                role: 'Suspensão',
                imagePath: '',
                linkedin: ''
              }
            ]
          },
          {
            nome: 'Estruturas',
            members: [
              {
                name: 'Luiz Camargos',
                role: 'Diretor Estruturas',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/luizcamargos/'
              },
              {
                name: 'Bernardo Gunther',
                role: 'Estruturas',
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
                name: 'Gabriel Santos',
                role: 'Estruturas',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/gabriel-s-739ba1128/'
              },
              {
                name: 'Samuel Augusto',
                role: 'Estruturas',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/samuel-augusto-almeida-madureira-763833200/'
              },
              {
                name: 'Thiago Rezende',
                role: 'Estruturas',
                imagePath: '',
                linkedin: ''
              }
            ]
          },
          {
            nome: 'Transmissão',
            members: [
              {
                name: 'Arthur Brôndolo',
                role: 'Diretor Transmissão',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/arthur-silva-br%C3%B4ndolo-7515791a8/'
              },
              {
                name: 'Carlos Bueno',
                role: 'Transmissão',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/carlosorbueno/'
              },
              {
                name: 'Robert Pereira',
                role: 'Transmissão',
                imagePath: '',
                linkedin: ''
              }
            ]
          }
        ]
      }
    ]
  },
  2021: {
    captain: {
      name: 'Marcelle Guimarães',
      imagePath: '',
      linkedin: 'https://www.linkedin.com/in/marcelle-guimar%C3%A3es-36951519a/'
    },
    sistemas: [
      {
        nome: 'ADMINISTRAÇÃO',
        subsistemas: [
          {
            nome: 'Gestão',
            members: [
              {
                name: 'Rodolfo de Albuquerque',
                role: 'Gestão de projetos',
                imagePath: '',
                linkedin: ''
              },
              {
                name: 'Tainá de Jesus',
                role: 'Gestão de projetos',
                imagePath: '',
                linkedin: 'linkedin.com/in/tainá-hevelin-d-38b6ab158'
              }
            ]
          },
          {
            nome: 'Geral',
            members: [
              {
                name: 'Gabriel Garrocho',
                role: 'Administração',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/gabriel-garrocho-0742991a6/'
              },
              {
                name: 'Henrique Coutinho',
                role: 'Administração',
                imagePath: '',
                linkedin: ''
              },
              {
                name: 'Luana Zaidan',
                role: 'Administração',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/luanazaidan/'
              },
              {
                name: 'Paulo Silva',
                role: 'Administração',
                imagePath: '',
                linkedin: ''
              },
              {
                name: 'Ramon Celino',
                role: 'Administração',
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
            nome: 'Acumulador',
            members: [
              {
                name: 'Caroline Melo',
                role: 'Diretor Acumulador',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/caroline-oliveira-melo-1a1656197/'
              },
              {
                name: 'Caique da Cruz',
                role: 'Acumulador',
                imagePath: '',
                linkedin: ''
              },
              {
                name: 'Otaviano Alberth',
                role: 'Acumulador',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/otaviano-alberth-a4628a126avianoalberth'
              }
            ]
          },
          {
            nome: 'Aquisição',
            members: [
              {
                name: 'João Oliveira',
                role: 'Diretor Aquisição',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/joao-oliveira-39a730201/'
              },
              {
                name: 'Breno Gomes',
                role: 'Aquisição',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/breno-gomes-63803b209/'
              },
              {
                name: 'Matheus Vestergaard',
                role: 'Aquisição',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/matheusoliveiravestergaarddias/'
              },
              {
                name: 'Nathália Costa',
                role: 'Aquisição',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/nathalia-cristina-gon%C3%A7alves-costa-32614ba2/'
              },
              {
                name: 'Pedro de Sá',
                role: 'Aquisição',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/pedrodesamarques/'
              }
            ]
          },
          {
            nome: 'Baterias',
            members: [
              {
                name: 'Amanda Mattos',
                role: 'Baterias',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/amanda-mattos-gontijo-2504b41a2/'
              },
              {
                name: 'Bruno Machado',
                role: 'Baterias',
                imagePath: '',
                linkedin: ''
              },
              {
                name: 'Renan Guedes',
                role: 'Baterias',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/renan-guedes-b31246156/'
              }
            ]
          },
          {
            nome: 'Controle',
            members: [
              {
                name: 'Victor Borges',
                role: 'Diretor Controle',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/victor-freitas-borges-5719551bb/'
              },
              {
                name: 'Dominique Auer',
                role: 'Controle',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/dominiqueauer/'
              },
              {
                name: 'Eduardo Dunker',
                role: 'Controle',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/eduardo-besing/'
              },
              {
                name: 'Felipe Telles',
                role: 'Controle',
                imagePath: '',
                linkedin: 'Felipe Vaz de Melo Telles | LinkedIn'
              },
              {
                name: 'Helen Ikeda',
                role: 'Controle',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/helen-ikeda/'
              }
            ]
          },
          {
            nome: 'Geral',
            members: [
              {
                name: 'Breno Soares',
                role: 'Eletrônica',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/breno-soares-95a9b91ab/'
              },
              {
                name: 'Giovanni Duarte',
                role: 'Eletrônica',
                imagePath: '',
                linkedin: ''
              },
              {
                name: 'João Chaves',
                role: 'Eletrônica',
                imagePath: '',
                linkedin: ''
              },
              {
                name: 'João Guilherme',
                role: 'Eletrônica',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/jo%C3%A3o-guilherme-marcondes-de-souza-costa-73750a204/'
              },
              {
                name: 'João Santos',
                role: 'Eletrônica',
                imagePath: '',
                linkedin: ''
              },
              {
                name: 'Lucas de Almeida',
                role: 'Eletrônica',
                imagePath: '',
                linkedin: ''
              },
              {
                name: 'Lucas Emídio',
                role: 'Eletrônica',
                imagePath: '',
                linkedin: ''
              },
              {
                name: 'Luiza Araújo',
                role: 'Eletrônica',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/luizaaraujomartins/'
              },
              {
                name: 'Thiago Rezende',
                role: 'Eletrônica',
                imagePath: '',
                linkedin: ''
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
                name: 'Maria Luiza Scoralick',
                role: 'Diretor Aerodinâmica',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/malu-scoralick-08b5b214b/'
              },
              {
                name: 'Caio Queiroga',
                role: 'Membro',
                imagePath: '',
                linkedin: ''
              },
              {
                name: 'Eduardo Fujii',
                role: 'Membro',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/eduardo-henrique-fernandes-fujii-062a2a182/'
              },
              {
                name: 'Matheus Godinho',
                role: 'Membro',
                imagePath: '',
                linkedin: ''
              }
            ]
          },
          {
            nome: 'Dinâmica',
            members: [
              {
                name: 'Anna Maciel',
                role: 'Diretora Dinâmica',
                imagePath: '',
                linkedin: ''
              },
              {
                name: 'Bruno Maciel',
                role: 'Freio',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/brunomacielsousa/'
              },
              {
                name: 'João Aguiar',
                role: 'Membro',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/jo%C3%A3opedroamaralaguiar/'
              },
              {
                name: 'Aldo Silva',
                role: 'Suspensão',
                imagePath: '',
                linkedin: ''
              },
              {
                name: 'Vitor Sandro',
                role: 'Direção',
                imagePath: '',
                linkedin: ''
              }
            ]
          },
          {
            nome: 'Estruturas',
            members: [
              {
                name: 'Gabriel Santos',
                role: 'Diretor Estruturas',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/gabriel-s-739ba1128/'
              },
              {
                name: 'Bernardo Gunther',
                role: 'Estruturas',
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
                name: 'Gustavo Prates',
                role: 'Estruturas',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/gustavo-c-kubitschek-prates-96a211158/'
              },
              {
                name: 'Henrique Lara',
                role: 'Estruturas',
                imagePath: '',
                linkedin: ''
              },
              {
                name: 'Samuel Augusto',
                role: 'Estruturas',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/samuel-augusto-almeida-madureira-763833200/'
              }
            ]
          },
          {
            nome: 'Transmissão',
            members: [
              {
                name: 'Arthur Brôndolo',
                role: 'Diretor Transmissão',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/arthur-silva-br%C3%B4ndolo-7515791a8/'
              },
              {
                name: 'Henrique Sotomayor',
                role: 'Transmissão',
                imagePath: '',
                linkedin:
                  'https://www.linkedin.com/in/henrique-sotomayor-emery-coppoli-13386a209/'
              },
              {
                name: 'João Soares',
                role: 'Transmissão',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/in/jvsoaresas/'
              },
              {
                name: 'Robert Pereira',
                role: 'Transmissão',
                imagePath: '',
                linkedin: ''
              }
            ]
          }
        ]
      }
    ]
  },
  2022: {
    captain: {
      name: 'Rodolfo Villa Verde',
      imagePath: '',
      linkedin: 'https://www.linkedin.com/'
    },
    sistemas: [
      {
        nome: 'ADMINISTRAÇÃO',
        diretor: {
          name: 'Paulo Henrique',
          role: 'Diretor Geral',
          imagePath: '',
          linkedin: 'https://www.linkedin.com/'
        },
        subsistemas: [
          {
            nome: 'Recursos',
            members: [
              {
                name: 'Caio Lelis',
                role: 'Recursos',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Matheo Mares',
                role: 'Recursos',
                imagePath: 'image-25.jpg',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Samuel Faria',
                role: 'Recursos',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              }
            ]
          },
          {
            nome: 'Design',
            members: [
              {
                name: 'Luana Zaidan',
                role: 'Design',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Roger Lafetá',
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
        diretor: {
          name: 'Luiza Araújo',
          role: 'Diretor Geral',
          imagePath: '',
          linkedin: 'https://www.linkedin.com/'
        },
        subsistemas: [
          {
            nome: 'Sistema Trativo',
            members: [
              {
                name: 'Lucas Silveira',
                role: 'Sistema Trativo',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Leonardo Murilho',
                role: 'Sistema Trativo',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Vitor Lobão',
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
                name: 'Lucas Almeida',
                role: 'Diretor de Aquisição de Dados',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Guilherme Barbosa',
                role: 'Aquisição de Dados',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Breno Miguel',
                role: 'Aquisição de Dados',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Lucas Emídio',
                role: 'Aquisição de Dados',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              }
            ]
          },
          {
            nome: 'Sistema de Segurança',
            members: [
              {
                name: 'Thiago Santos',
                role: 'Diretor de Sistema de Segurança',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Wellington Nascimento',
                role: 'Sistema de Segurança',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Haroldo Antunes',
                role: 'Sistema de Segurança',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Alan Franklin',
                role: 'Sistema de Segurança',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Maria Luisa',
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
                role: 'Controle',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'João Pedro Nunes',
                role: 'Controle',
                imagePath: 'DSCN3153-01.jpeg',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Tarcísio Carvalho',
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
        diretor: {
          name: 'Caio Queiroga',
          role: 'Diretor Geral',
          imagePath: '',
          linkedin: 'https://www.linkedin.com/'
        },
        subsistemas: [
          {
            nome: 'Aerodinâmica',
            members: [
              {
                name: 'Eduardo Fujii',
                role: 'Diretor de Aerodinâmica',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Marília Fagundes',
                role: 'Aerodinâmica',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Luísa Vilela',
                role: 'Aerodinâmica',
                imagePath: '',
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
                name: 'Lucas Araujo',
                role: 'Direção',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Marcus Vinícius',
                role: 'Direção',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              }
            ]
          },
          {
            nome: 'Estruturas',
            members: [
              {
                name: 'Gabriel Augusto',
                role: 'Diretor de Estruturas',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Raphael Alves',
                role: 'Estruturas',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Alan Silva',
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
                name: 'João Victor',
                role: 'Diretor de Transmissão',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Hannah Andrade',
                role: 'Transmissão',
                imagePath: '',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Renato Nicolato',
                role: 'Transmissão',
                imagePath: 'DSCN3061-01.jpeg',
                linkedin: 'https://www.linkedin.com/'
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
        diretor: {
          name: 'Matheo Mares',
          role: 'Diretor Geral',
          imagePath: 'image-25.jpg',
          linkedin: 'https://www.linkedin.com/'
        },
        subsistemas: [
          {
            nome: 'Desenvolvimento',
            members: [
              {
                name: 'Caio Lelis',
                role: 'Diretor de Desenvolvimento',
                imagePath: 'image-59.jpg',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Luiza Viana',
                role: 'Desenvolvimento',
                imagePath: 'image-60.jpg',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Alan Augusto',
                role: 'Desenvolvimento',
                imagePath: 'image-61.jpg',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Gustavo Mattos',
                role: 'Desenvolvimento',
                imagePath: 'image-62.jpg',
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
                imagePath: 'image-58.jpg',
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
                imagePath: 'image-63.jpg',
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
                imagePath: 'image-64.jpg',
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
                imagePath: 'image-65.jpg',
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
        diretor: {
          name: 'Lucas Silveira',
          role: 'Diretor Geral',
          imagePath: 'image-11.jpg',
          linkedin: 'https://www.linkedin.com/'
        },
        subsistemas: [
          {
            nome: 'Sistema Trativo',
            members: [
              {
                name: 'Vitor Lobão',
                role: 'Diretor de Sistema Trativo',
                imagePath: 'image-56.jpg',
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
                imagePath: 'image-57.jpg',
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
                imagePath: 'image-31.jpg',
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
                imagePath: 'image-55.jpg',
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
                imagePath: 'image-55.jpg',
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
                imagePath: 'image-54.jpg',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Gláucia Figueiredo',
                role: 'Sistema de Segurança',
                imagePath: 'image-53.jpg',
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
                imagePath: 'image-51.jpg',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'João Pedro Nunes',
                role: 'Controle',
                imagePath: 'image-52.jpg',
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
                imagePath: 'image-35.jpg',
                linkedin: 'https://www.linkedin.com/'
              }
            ]
          }
        ]
      },
      {
        nome: 'MECÂNICA',
        diretor: {
          name: 'Renato Nicolato',
          role: 'Diretor Geral',
          imagePath: 'image-50.jpg',
          linkedin: 'https://www.linkedin.com/'
        },
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
                role: 'Membro',
                imagePath: 'image-48.jpg',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Júlia Viegas',
                role: 'Membro',
                imagePath: 'image-15.jpg',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Lucas Telles',
                role: 'Membro',
                imagePath: 'image-49.jpg',
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
                imagePath: 'image-47.jpg',
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
                imagePath: 'DSCN3135-01.jpeg',
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
                imagePath: 'image-46.jpg',
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
                imagePath: 'image-45.jpg',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Luiza Gonçalves',
                role: 'Freios',
                imagePath: 'image-44.jpg',
                linkedin: 'https://www.linkedin.com/'
              },
              {
                name: 'Arthur Lira',
                role: 'Freios',
                imagePath: 'DSCN3555.jpg',
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
  },
2024: {
  captain: {
    name: 'Davi Clark',
    imagePath: '',
    linkedin: ''
  },
  sistemas: [
    {
      nome: 'ADMINISTRAÇÃO',
      diretor: {
        name: 'Matheo Mares',
        role: 'Diretor Geral',
        imagePath: '',
        linkedin: 'https://www.linkedin.com/'
      },
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
      diretor: {
        name: 'Lucas Silveira',
        role: 'Diretor Geral',
        imagePath: '',
        linkedin: 'https://www.linkedin.com/'
      },
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
      diretor: {
        name: 'Renato Nicolato',
        role: 'Diretor Geral',
        imagePath: '',
        linkedin: 'https://www.linkedin.com/'
      },
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
              role: 'Membro',
              imagePath: '',
              linkedin: 'https://www.linkedin.com/'
            },
            {
              name: 'Júlia Viegas',
              role: 'Membro',
              imagePath: 'image-15.jpg',
              linkedin: 'https://www.linkedin.com/'
            },
            {
              name: 'Lucas Telles',
              role: 'Membro',
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