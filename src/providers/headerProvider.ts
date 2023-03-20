export const headerOptionsProvider: Array<{
  label: string
  to: string
  options?: {
    label: string
    to: string
  }[]
}> = [
  { label: 'História', to: '/historia' },
  {
    label: 'Protótipos',
    to: '/prototipos',
    options: [
      { label: 'NK422', to: '/prototipos/NK422' },
      { label: 'NK319', to: '/prototipos/NK319' },
      { label: 'NK218', to: '/prototipos/NK218' },
      { label: 'Kayran', to: '/prototipos/Kayran' }
    ]
  },
  {
    label: 'Equipe',
    to: '/equipe/2023',
    options: [
      { label: '2017', to: '/equipe/2017' },
      { label: '2018', to: '/equipe/2018' },
      { label: '2019', to: '/equipe/2019' },
      { label: '2020', to: '/equipe/2020' },
      { label: '2021', to: '/equipe/2021' },
      { label: '2022', to: '/equipe/2022' },
      { label: '2023', to: '/equipe/2023' }
    ]
  },
  { label: 'Parceiros', to: '/parceiros' }
]

export const siderbarOptionsProvider = [
  { label: 'História', to: '/historia' },
  { label: 'Protótipos', to: '/prototipos' },
  { label: 'Equipe', to: '/equipe/2023' },
  { label: 'Parceiros', to: '/parceiros' },
  { label: 'A competição', to: '/competicao' },
  { label: 'Galeria', to: '/galeria' },
  { label: 'Rollouts', to: '/rollouts' }
  //  { label: 'Loja', to: '/loja' }
]
