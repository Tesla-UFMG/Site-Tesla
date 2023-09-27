export const equipeProvider: {
  [year: string]: {
    captain: {
      name: string
      imagePath: string
      linkedin: string
    }
    members: {
      setor: string
      members: {
        name: string
        role: string
        imagePath: string
        linkedin: string
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
    members: [
      {
        setor: 'ADMINISTRAÇÃO',
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
            linkedin: 'https://www.linkedin.com/in/leonardo-marcos-gomes-salim-616a23209/'
          },
          {
            name: 'Lígia Lamounier',
            role: 'Gestão geral',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/l%C3%ADgia-bittencourt-173ba992/'
          },
          {
            name: 'Natália da Mata',
            role: 'Gestão de recursos',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/natalia-da-mata-c-m/'
          },
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
      },
      {
        setor: 'ELETRÔNICA',
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
          },
          {
            name: 'Alexandre Carvalho',
            role: 'Control System',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/alexandre-carvalho-97351282/'
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
          },
          {
            name: 'Francisco Gomes',
            role: 'Electronic Control Unit',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/francisco-gomes-0b0851163/'
          },
          {
            name: 'Christian Fernandes',
            role: 'Powertrain',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/francisco-gomes-0b0851163/'
          }
        ]
      },
      {
        setor: 'MECÂNICA',
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
          },
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
          },
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
            linkedin: 'https://www.linkedin.com/in/thiago-ladeira-06082416b/'
          },
          {
            name: 'Bruno França',
            role: 'Freio',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/mwlite/in/brunofran%C3%A7a'
          },
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
  },
  2018: {
    captain: {
      name: 'Ana Rangel',
      imagePath: '',
      linkedin: 'https://www.linkedin.com/in/anaflaviarangel/'
    },
    members: [
      {
        setor: 'ADMINISTRAÇÃO',
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
            linkedin: 'https://www.linkedin.com/in/gleysson-coura-394b27141/'
          },
          {
            name: 'Mirthes Rugani',
            role: 'Gerente de Projetos',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/mirthes-rugani/'
          },
          {
            name: 'Hermano Lima',
            role: 'Financeiro',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/'
          },
          {
            name: 'Allan Santos',
            role: 'Marketing',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/allansaints/'
          },
          {
            name: 'Gustavo Pereira',
            role: 'RH',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/mirthes-rugani/'
          }
        ]
      },
      {
        setor: 'ELETRÔNICA',
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
            linkedin: 'https://www.linkedin.com/in/virgínia-sátyro-2283a515b'
          },
          {
            name: 'Bruno Dixini',
            role: 'ECU',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/brunodixini/'
          },
          {
            name: 'Gabriel Aragão',
            role: 'Interface',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/gabriel-arag%C3%A3o-30620918a/'
          },
          {
            name: 'Guilherme Amorim',
            role: 'Telemetria e Comunicação',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/guilherme-vinicius-amorim/ '
          },
          {
            name: 'Irving Martins',
            role: 'Diretor',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/irvingmrtn/'
          },
          {
            name: 'Patrick Garcia',
            role: 'Eletronic Control Unit',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/patrick-garcia-vilela-15a971a7/'
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
            linkedin: 'https://www.linkedin.com/in/rafael-monteiro-3690b49a/  '
          },
          {
            name: 'Victor Moraes',
            role: 'Eletronic Control Unit',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/victorjfmoraes/ '
          },
        ]
      },
      {
        setor: 'MECÂNICA',
        members: [
          {
            name: 'Matthias Novais',
            role: 'Aerodinâmica',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/matthias-novais-48b881154/'
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
    members: [
      {
        setor: 'ADMINISTRAÇÃO',
        members: [
          {
            name: 'Pedro Henrique Rosa ',
            role: 'Capitão',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/pedro-henrique-rosa-gonçalves-b47671209 '
          },
          {
            name: 'Nuno Karam',
            role: 'Marketing',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/nunokaram/'
          },
          {
            name: 'Bernardo Nunes',
            role: 'Diretor Administrativo',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/bernardo-bernardes-269182193/ '
          },
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
            linkedin: 'https://www.linkedin.com/in/lidiamoreirabarbosa/ '
          },
          {
            name: 'Matheus Felicetti ',
            role: 'Vice-Capitão',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/matheus-felicetti-de-azevedo-roland-628a35145/'
          }
        ]
      },
      {
        setor: 'ELETRÔNICA',
        members: [
          {
            name: 'Amanda Caixeta',
            role: 'Aquisição',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/amanda-guimaraes-caixeta-silva/'
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
            linkedin: 'https://www.linkedin.com/in/nathalia-cristina-gon%C3%A7alves-costa-32614ba2'
          },
          {
            name: 'Heuller Augusto',
            role: 'Baterias',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/heuller-augusto-4b9024154/'
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
          },
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
            linkedin: 'https://www.linkedin.com/in/victor-freitas-borges-5719551bb/'
          },
          {
            name: 'Victor Moraes',
            role: 'Controle',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/victorjfmoraes/'
          },
          {
            name: 'Henrique Guimarães',
            role: 'Diretor',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/henrique-guimar%C3%A3es-2422a515b/'
          },
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
            linkedin: 'https://www.linkedin.com/in/guilherme-vinicius-amorim/'
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
            linkedin: 'https://www.linkedin.com/in/virg%C3%ADnia-s%C3%A1tyro-2283a515b/'
          }
        ]
      },
      {
        setor: 'MECÂNICA',
        members: [
          {
            name: 'Matthias Novais',
            role: 'Aerodinâmica',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/matthias-novais-48b881154/'
          },
          {
            name: 'Paulo Vítor Ferreira',
            role: 'Aerodinâmica',
            imagePath: '',
            linkedin: ''
          },
          {
            name: 'Rafael Hazaña',
            role: 'Aerodinâmica',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/rhazana/'
          },
          {
            name: 'Nicholas Chavda',
            role: 'Dinâmica',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/nicholas-chavda-38a19a1a6/'
          },
          {
            name: 'Nícolas Filla',
            role: 'Dinâmica',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/nicolasfilla-91b53115a/'
          },
          {
            name: 'João Aguiar',
            role: 'Direção',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/jo%C3%A3opedroamaralaguiar/'
          },
          {
            name: 'Marcelle Guimarães',
            role: 'Direção',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/marcelle-guimar%C3%A3es-36951519a/'
          },
          {
            name: 'Marcus Bonifácio',
            role: 'Direção',
            imagePath: '',
            linkedin: 'www.linkedin.com/in/marcus-bonifácio'
          },
          {
            name: 'Thiago Jardim',
            role: 'Diretor Dinâmica',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/thiago-jardim-62ba4715a/'
          },
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
            linkedin: 'https://www.linkedin.com/in/rafael-silluzio-60309717a/'
          },
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
          },
          {
            name: 'Luiz Camargos',
            role: 'Simulação',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/luizcamargos/'
          },
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
      },
      {
        setor: 'POWERTRAIN',
        members: [
          {
            name: 'Caroline Melo',
            role: 'Acumulador',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/caroline-oliveira-melo-1a1656197/'
          },
          {
            name: 'Gabriel Gonçalves',
            role: 'Acumulador',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/gabriel-gon%C3%A7alves-555a87191/'
          },
          {
            name: 'Kaique Fernandes',
            role: 'Diretor Powertrain',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/kaique-martins-fernandes/'
          },
          {
            name: 'Arthur Brôndolo',
            role: 'Transmissão',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/arthur-silva-br%C3%B4ndolo-7515791a8/'
          },
          {
            name: 'Lucas Marinho',
            role: 'Transmissão',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/lucas-pereira-marinho-3256561a7/'
          }
        ]
      }
      
    ]
  },
  2020: {
    captain: {
      name: 'Marcelle Guimarães ',
      imagePath: '',
      linkedin: 'https://www.linkedin.com/in/marcelle-guimar%C3%A3es-36951519a/'
    },
    members: [
      {
        setor: 'ADMINISTRAÇÃO',
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
          },
          {
            name: 'Marcelle Guimarães',
            role: 'Gestão',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/marcelle-guimar%C3%A3es-36951519a/'
          },
          {
            name: 'Rodolfo de Albuquerque',
            role: 'Gestão',
            imagePath: '',
            linkedin: ''
          },
          {
            name: 'Tainá de Jesus',
            role: 'Gestão',
            imagePath: '',
            linkedin: ''
          }
        ]
      },
      {
        setor: 'ELETRÔNICA',
        members: [
          {
            name: 'Caroline Melo',
            role: 'Acumulador',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/caroline-oliveira-melo-1a1656197/'
          },
          {
            name: 'Lucas Arzabe',
            role: 'Acumulador',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/lucas-arzabe-lehmkuhl/'
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
            name: 'Matheus Vestergaard',
            role: 'Aquisição',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/matheusoliveiravestergaarddias/'
          },
          {
            name: 'Nathália Costa',
            role: 'Aquisição',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/nathalia-cristina-gon%C3%A7alves-costa-32614ba2/'
          },
          {
            name: 'Pedro de Sá',
            role: 'Aquisição',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/pedrodesamarques/'
          },
          {
            name: 'Amanda Mattos',
            role: 'Baterias',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/amanda-mattos-gontijo-2504b41a2/'
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
          },
          {
            name: 'Wellington Martins',
            role: 'Baterias',
            imagePath: '',
            linkedin: ''
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
            linkedin: 'https://www.linkedin.com/in/victor-freitas-borges-5719551bb/'
          }
        ]
      },
      {
        setor: 'MECÂNICA',
        members: [
          {
            name: 'Ana Clara',
            role: 'Aerodinâmica',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/acnoronha/'
          },
          {
            name: 'Eduardo Fujii',
            role: 'Aerodinâmica',
            imagePath: '',
            linkedin: ''
          },
          {
            name: 'Maria Luiza Scoralick',
            role: 'Aerodinâmica',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/malu-scoralick-08b5b214b/'
          },
          {
            name: 'Milena Vasconcelos',
            role: 'Aerodinâmica',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/milena-ma-vasconcelos/'
          },
          {
            name: 'João Aguiar',
            role: 'Dinâmica',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/jo%C3%A3opedroamaralaguiar/'
          },
          {
            name: 'Arthur Viera',
            role: 'Dinâmica/Direção',
            imagePath: '',
            linkedin: ''
          },
          {
            name: 'Vitor Sandro',
            role: 'Dinâmica/Direção',
            imagePath: '',
            linkedin: ''
          },
          {
            name: 'Igor Graçano',
            role: 'Dinâmica/Freio',
            imagePath: '',
            linkedin: ''
          },
          {
            name: 'Maria Cordeiro',
            role: 'Dinâmica/Freio',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/mariaalinecordeiro/'
          },
          {
            name: 'Aldo Silva',
            role: 'Dinâmica/Suspensão',
            imagePath: '',
            linkedin: ''
          },
          {
            name: 'Heitor Cantão',
            role: 'Dinâmica/Suspensão',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/heitorcantao/'
          },
          {
            name: 'Matheus Signorini',
            role: 'Dinâmica/Suspensão',
            imagePath: '',
            linkedin: ''
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
            name: 'Luiz Camargos',
            role: 'Estruturas',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/luizcamargos/'
          },
          {
            name: 'Samuel Augusto',
            role: 'Estruturas',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/samuel-augusto-almeida-madureira-763833200/'
          },
          {
            name: 'Thiago Rezende',
            role: 'Estruturas',
            imagePath: '',
            linkedin: ''
          },
          {
            name: 'Arthur Brôndolo',
            role: 'Transmissão',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/arthur-silva-br%C3%B4ndolo-7515791a8/'
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
    
  },
  2021: {
    captain: {
      name: 'Marcelle Guimarães ',
      imagePath: '',
      linkedin: 'https://www.linkedin.com/in/marcelle-guimar%C3%A3es-36951519a/'
    },
    members: [
      {
        setor: 'ADMINISTRAÇÃO',
        members: [
          {
            name: 'Rodolfo de Albuquerque',
            role: 'Gestão de projetos',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/'
          },
          {
            name: 'Tainá de Jesus',
            role: 'Gestão de projetos',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/tainá-hevelin-d-38b6ab158'
          },
          {
            name: 'Gabriel Garrocho',
            role: '?',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/gabriel-garrocho-0742991a6/'
          },
          {
            name: 'Henrique Coutinho',
            role: '?',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/'
          },
          {
            name: 'Luana Zaidan ',
            role: '?',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/luanazaidan/'
          },
          {
            name: 'Paulo Henrique Silva',
            role: '?',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/'
          },
          {
            name: 'Ramon Celino',
            role: '?',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/'
          }
        ]
      },
      {
        setor: 'ELETRÔNICA',
        members: [
          {
            name: 'Caroline Melo',
            role: 'Diretora de Acumulador',
            imagePath: '',
            linkedin:
              'https://www.linkedin.com/in/caroline-oliveira-melo-1a1656197/'
          },
          {
            name: 'Caique da Cruz',
            role: 'Acumulador',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/breno-gomes-63803b209/'
          },
          {
            name: 'Otaviano Alberth',
            role: 'Acumulador',
            imagePath: '',
            linkedin:
              'https://www.linkedin.com/in/otaviano-alberth-a4628a126avianoalberth'
          },
          {
            name: 'Breno Gomes',
            role: 'Aquisição de Dados',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/breno-gomes-63803b209/'
          },
          {
            name: 'Matheus Vestergaard',
            role: 'Aquisição de Dados',
            imagePath: '',
            linkedin:
              'https://www.linkedin.com/in/matheusoliveiravestergaarddias/'
          },
          {
            name: 'Nathália Costa',
            role: 'Aquisição de Dados',
            imagePath: '',
            linkedin:
              'https://www.linkedin.com/in/nathalia-cristina-gon%C3%A7alves-costa-32614ba2/'
          },
          {
            name: 'Pedro de Sá',
            role: 'Aquisição de Dados',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/pedrodesamarques/'
          },
          {
            name: 'Wellington Martins',
            role: 'Diretor de Baterias',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/'
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
            linkedin: 'https://www.linkedin.com/'
          },
          {
            name: 'Renan Guedes',
            role: 'Baterias',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/renan-guedes-b31246156/'
          },
          {
            name: 'Victor Borges',
            role: 'Diretor de Controle',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/'
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
            linkedin:
              'https://www.linkedin.com/in/felipe-vaz-de-melo-telles-6733661a5/'
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
          }
        ]
      },
      {
        setor: 'MECÂNICA',
        members: [
          {
            name: 'Maria Luiza Scoralick ',
            role: 'Diretora de Aerodinâmica',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/'
          },
          {
            name: 'Caio Queiroga',
            role: 'Aerodinâmica',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/malu-scoralick-08b5b214b/'
          },
          {
            name: 'Eduardo Fujii',
            role: 'Aerodinâmica',
            imagePath: '',
            linkedin:
              'https://www.linkedin.com/in/eduardo-henrique-fernandes-fujii-062a2a182/'
          },
          {
            name: 'Matheus Godinho',
            role: 'Aerodinâmica',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/'
          },
          {
            name: 'Arthur Viera',
            role: 'Diretor de Dinâmica',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/'
          },
          {
            name: 'Anna Júlia Maciel',
            role: 'Direção',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/'
          },
          {
            name: 'Vitor Sandro',
            role: 'Direção',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/'
          },
          {
            name: 'Bruno Maciel ',
            role: 'Freios',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/brunomacielsousa/'
          },
          {
            name: 'Igor Graçano',
            role: 'Freios',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/'
          },
          {
            name: 'Maria Cordeiro',
            role: 'Freios',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/mariaalinecordeiro/'
          },
          {
            name: 'Thiago Oliveira',
            role: 'Freios',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/'
          },
          {
            name: 'Aldo Silva',
            role: 'Suspensão',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/'
          },
          {
            name: 'Felipe Schmidt',
            role: 'Suspensão',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/felipeschmidtoc/'
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
            linkedin: 'https://www.linkedin.com/'
          },
          {
            name: 'Gabriel Santos',
            role: 'Diretor de Estruturas',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/in/gabriel-s-739ba1128/'
          },
          {
            name: 'Bernardo Gunther',
            role: 'Estruturas',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/'
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
            linkedin: 'https://www.linkedin.com/'
          },
          {
            name: 'Samuel Augusto',
            role: 'Estruturas',
            imagePath: '',
            linkedin:
              'https://www.linkedin.com/in/samuel-augusto-almeida-madureira-763833200/'
          },
          {
            name: 'Arthur Brôndolo',
            role: 'Diretor de Transmissão',
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
            linkedin: 'https://www.linkedin.com/'
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
    members: [
      {
        setor: 'ADMINISTRAÇÃO',
        members: [
          {
            name: 'Paulo Henrique',
            role: 'Diretor Geral',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/'
          },
          {
            name: 'Matheo Mares',
            role: 'Recursos',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/'
          },
          {
            name: 'Caio Lelis',
            role: 'Recursos',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/'
          },
          {
            name: 'Samuel Faria',
            role: 'Recursos',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/'
          },
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
      },
      {
        setor: 'ELETRÔNICA',
        members: [
          {
            name: 'Luiza Araújo',
            role: 'Diretora Geral',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/'
          },
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
          },
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
          },
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
          },
          {
            name: 'David Rohrs',
            role: 'Controle',
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
            imagePath: '',
            linkedin: 'https://www.linkedin.com/'
          }
        ]
      },
      {
        setor: 'MECÂNICA',
        members: [
          {
            name: 'Caio Queiroga',
            role: 'Diretor Geral',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/'
          },
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
          },
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
          },
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
            imagePath: '',
            linkedin: 'https://www.linkedin.com/'
          },
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
      }
    ]
  },
  2023: {
    captain: {
      name: 'Eduardo Fujii',
      imagePath: 'image-27.jpg', 
      linkedin: 'https://www.linkedin.com/'
    },
    members: [
      {
        setor: 'ADMINISTRAÇÃO',
        members: [
          {
            name: 'Matheo Mares',
            role: 'Diretor Geral',
            imagePath: 'image-25.jpg',
            linkedin: 'https://www.linkedin.com/'
          },
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
            name: 'Marcos Lott',
            role: 'Desenvolvimento',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/'
          },
          {
            name: 'Petra Luz',
            role: 'Diretora de Gestão de Pessoas',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/'
          },
          {
            name: 'Diego Oliveira',
            role: 'Gestão de Pessoas',
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
          },
          {
            name: 'Matheus Oliveira',
            role: 'Gestão de Pessoas',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/'
          },
          {
            name: 'Tales Rodrigues',
            role: 'Gestão de Pessoas',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/'
          },
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
          },
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
      },
      {
        setor: 'ELETRÔNICA',
        members: [
          {
            name: 'Lucas Silveira',
            role: 'Diretor Geral',
            imagePath: 'image-11.jpg',
            linkedin: 'https://www.linkedin.com/'
          },
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
          },
          {
            name: 'Guilherme Barbosa',
            role: 'Diretor de Aquisição de Dados',
            imagePath: 'image-26.jpg',
            linkedin: 'https://www.linkedin.com/'
          },
          {
            name: 'Lucas Emídio',
            role: 'Aquisição de Dados',
            imagePath: '',
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
          },
          {
            name: 'Tiago Morais',
            role: 'Aquisição de Dados',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/'
          },
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
          },
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
      },
      {
        setor: 'MECÂNICA',
        members: [
          {
            name: 'Renato Nicolato',
            role: 'Diretor Geral',
            imagePath: 'image-38.jpg',
            linkedin: 'https://www.linkedin.com/'
          },
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
          },
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
          },
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
          },
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
}
