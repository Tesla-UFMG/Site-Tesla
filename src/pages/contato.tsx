import Head from 'next/head'

import {
  Container,
  FormContent,
  Section,
  SectionContent,
  Title
} from '../styles/pages/Contato'
import { Button } from '../components/Button'

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
              <div style={{ display: 'flex' }}>
                <input type="text" placeholder="Nome" />
                <input type="text" placeholder="Email" />
              </div>
              <input type="text" placeholder="Assunto" />
              <input type="text" placeholder="Mensagem" />

              <Button>ENVIAR</Button>
            </FormContent>
          </SectionContent>
        </Section>
      </Container>
    </>
  )
}

export default Contato
