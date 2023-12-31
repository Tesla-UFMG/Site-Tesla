import Head from 'next/head'
import { useContext, useEffect } from 'react'

import { useHeaderContext } from '../../contexts/HeaderContext'
import { useIsOnScreen } from '../../hooks/useIsOnScreen'

import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { Footer } from '../../components/Footer'
import { ScrollArrow } from '../../components/ScrollArrow'
import { equipeProvider } from '../../providers/equipeProvider'
import {
  Captain,
  Container,
  Member,
  MemberWrapper,
  Section,
  SectionContent,
  SectionStartContent,
  SectionVideoContent,
  SubsystemName,
  Subtitle,
  SystemName,
  Title,
  VideoWrapper
} from '../../styles/pages/Equipe'

type Years = '2023' | '2022' | '2021' | '2020' | '2019' | '2018' | '2017'

export async function getStaticPaths() {
  const paths = [
    { params: { year: '2023' } },
    { params: { year: '2022' } },
    { params: { year: '2021' } },
    { params: { year: '2020' } },
    { params: { year: '2019' } },
    { params: { year: '2018' } },
    { params: { year: '2017' } }
  ]
  return { paths: paths || [], fallback: false }
}

export const getStaticProps: GetStaticProps = async context => {
  const year = context.params.year as Years
  const yearEquipe = equipeProvider[year as string]
  return {
    props: { photos: yearEquipe }
  }
}

// Função para contar o número total de membros de um ano específico
function countTotalMembersOfYear(equipeProvider: any, year: string): number {
  let totalMembers = 0

  if (equipeProvider.hasOwnProperty(year)) {
    const team = equipeProvider[year]
    for (const system of team.sistemas) {
      for (const subsystem of system.subsistemas) {
        totalMembers += subsystem.members.length
      }
    }
  }

  return totalMembers
}

const EquipeAno: React.FC = () => {
  const router = useRouter()
  const { year } = router.query as { year: Years }
  const team = equipeProvider[year as string]

  const backgroundImageURL = `/assets/images/equipe/background/${year}.jpg` // Caminho para a imagem de background correspondente ao ano

  const { toggleColor } = useHeaderContext()
  const { handleColor } = useHeaderContext()
  const { elementRef: sectionStartRef, isOnScreen } = useIsOnScreen(0.01)

  const totalMembers = countTotalMembersOfYear(equipeProvider, year)
  const numberOfSystems = team.sistemas.length

  useEffect(() => {
    if (year === '2017' || year === '2023') {
      handleColor('black')
    } else {
      toggleColor()
    }
  }, [isOnScreen, year])

  return (
    <>
      <Head>
        <title>Tesla UFMG | Equipe</title>
      </Head>
      <Container>
        <Section
          ref={sectionStartRef}
          withBackground
          style={{ backgroundImage: `url(${backgroundImageURL})` }}
        >
          <SectionStartContent>
            <Title>MEMBROS DE {year}</Title>
            <Subtitle>
              Conheça os alunos que fazem esse projeto acontecer, distribuídos
              em {numberOfSystems} Sistemas, a equipe atualmente conta com{' '}
              {totalMembers} membros.
            </Subtitle>
          </SectionStartContent>

          <ScrollArrow to="content" direction="down" color="black" />
        </Section>
        <Section id="content">
          <SectionContent>
            <a href={team.captain.linkedin} target="_blank">
              <Captain
                name={team.captain.name}
                year={year as string}
                imagePath={team.captain.imagePath}
              />
            </a>
            {team.sistemas.map(system => {
              return (
                <>
                  <SystemName>{system.nome}</SystemName>
                  {system.diretor && (
                    <a href={system.diretor?.linkedin} target="_blank">
                      <Member
                        name={system.diretor?.name}
                        role={system.diretor?.role}
                        imagePath={system?.diretor?.imagePath}
                        year={year as string}
                      />
                    </a>
                  )}
                  {system.subsistemas.map(subsystem => {
                    return (
                      <>
                        <SubsystemName>{subsystem.nome}</SubsystemName>
                        <MemberWrapper>
                          {subsystem.members.map((member, memberIndex) => {
                            return (
                              <a href={member.linkedin} target="_blank">
                                <Member
                                  key={memberIndex}
                                  name={member.name}
                                  role={member.role}
                                  imagePath={member.imagePath}
                                  year={year as string}
                                />
                              </a>
                            )
                          })}
                        </MemberWrapper>
                      </>
                    )
                  })}
                </>
              )
            })}
            {/* {team.members.map(sector => {
              return (
                <>
                  <SectorName>{sector.setor}</SectorName>
                  <MemberWrapper>
                    {sector.members.map((member, memberIndex) => {
                      return (
                        <a href={member.linkedin} target="_blank">
                          <Member
                            key={memberIndex}
                            name={member.name}
                            role={member.role}
                            imagePath={member.imagePath}
                            year={year as string}
                          />
                        </a>
                      )
                    })}
                  </MemberWrapper>
                </>
              )
            })} */}
          </SectionContent>
        </Section>

        <Footer />
      </Container>
    </>
  )
}

export default EquipeAno
