import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
`

export const Section = styled.section`
  min-height: 100%;

  padding: 20px;

  display: flex;

  position: relative;
`

export const SectionContent = styled.div`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;

  padding-top: 40px;

  display: flex;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.tablet} {
    max-width: 70%;
    padding-top: 80px;
  }

  @media ${props => props.theme.breakpoints.laptop} {
    max-width: 60%;
  }
`

export const Title = styled.h1`
  font-size: 2rem;
  border-bottom: 1px solid ${props => props.theme.colors['gray-600']};

  margin-bottom: 24px;

  @media ${props => props.theme.breakpoints.laptop} {
    font-size: 4rem;
  }

  @media ${props => props.theme.breakpoints.laptopL} {
    font-size: 6rem;
  }
`

export const FormContent = styled.form``
