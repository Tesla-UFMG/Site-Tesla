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
  border-bottom: 4px solid #4ed840;

  margin-bottom: 24px;

  @media ${props => props.theme.breakpoints.laptop} {
    font-size: 4rem;
  }

  @media ${props => props.theme.breakpoints.laptopL} {
    font-size: 6rem;
  }
`

export const FormContent = styled.form`
  flex-direction: column;
  row-gap: 10px;
`

export const ContactButton = styled.button`
  width: 30%;
  float: right;
  margin-top: 10px;
  cursor: pointer;
  font-size: 1.4rem;
  padding: 10px 100px;
  background-color: #4ed840;
  color: black;
  border-radius: 10px;
  border: none;
`
export const InputRow = styled.div`
  display: flex;
  column-gap: 10px;
  margin-top: 10px;
`

export const InputText = styled.input`
  width: 100%;
  font-size: 1.2rem;
  padding: 5px 5px 5px 15px;
  justify-content: flex-end;
`

export const TextArea = styled.textarea`
  width: 100%;
  font-size: 1.2rem;
  padding: 5px 5px 5px 15px;
  resize: none;
`
export const ErrorMessage = styled.p`
  font-size: 1.2rem;
  color: red;
`
