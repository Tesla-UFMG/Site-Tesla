import Head from 'next/head'
import { useEffect } from 'react'

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

const EquipeAno: React.FC = () => {
  const router = useRouter()
  const { year } = router.query as { year: Years }
  const team = equipeProvider[year as string]

  const { toggleColor } = useHeaderContext()
  const { elementRef: sectionStartRef, isOnScreen } = useIsOnScreen(0.01)

  useEffect(() => {
    toggleColor()
  }, [isOnScreen])

  return (
    <>
      <Head>
        <title>Tesla UFMG | Equipe</title>
      </Head>
      <Container>
        <Section ref={sectionStartRef} withBackground>
          <SectionStartContent>
            <Title>CONHEÇA OS MEMBROS</Title>
            <Subtitle>
              Conheça os alunos que fazem esse projeto acontecer, distribuídos
              em 5 Sistemas, a equipe atualmente conta com 44 membros.
            </Subtitle>
          </SectionStartContent>

          <ScrollArrow to="video" direction="down" color="black" />
        </Section>
        <Section id="video">
          <SectionVideoContent>
            <VideoWrapper videoURL="https://www.youtube.com/embed/BWegfyI_eoY" />
          </SectionVideoContent>

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
