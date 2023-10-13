import Head from 'next/head'

import {
  ContactButton,
  Container,
  FormContent,
  InputRow,
  InputText,
  Section,
  SectionContent,
  Title
} from '../styles/pages/Contato'

const Contato: React.FC = () => {
  return (
    <>
      <Head>
        <title>Tesla UFMG | Contato</title>
      </Head>
      <Container>
        <Section>
          <SectionContent>
            <Title>CONTATO</Title>
            <FormContent>
              <InputRow>
                <InputText type="text" placeholder="Nome" />
                <InputText type="text" placeholder="Email" />
              </InputRow>
              <InputRow>
                <InputText type="text" placeholder="Assunto" />
              </InputRow>
              <InputRow>
                <InputText type="text" placeholder="Mensagem" />
              </InputRow>
              <ContactButton>ENVIAR</ContactButton>
            </FormContent>
          </SectionContent>
        </Section>
      </Container>
    </>
  )
}

export default Contato
