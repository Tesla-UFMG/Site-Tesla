'use client'

import Head from 'next/head'

import {
  ContactButton,
  Container,
  ErrorMessage,
  FormContent,
  InputRow,
  InputText,
  Section,
  SectionContent,
  TextArea,
  Title
} from '../styles/pages/Contato'
import { FormEvent, useState } from 'react'

interface FormInputs {
  nome: string
  email: string
  assunto: string
  mensagem: string
}

const Contato: React.FC = () => {
  const [nome, setNome] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [assunto, setAssunto] = useState<string>('')
  const [mensagem, setMensagem] = useState<string>('')

  const [error, setError] = useState<string>()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (
      nome.length === 0 ||
      email.length === 0 ||
      assunto.length === 0 ||
      mensagem.length === 0
    ) {
      setError('Por favor preencha todos campos!')
    } else {
      setError('')
      try {
        const response = await fetch('/api/contact', {
          method: 'post',
          body: new URLSearchParams({ nome, email, assunto, mensagem })
        })
        if (!response.ok) {
          throw new Error(`Resposta inválida: ${response.status}`)
        }
        alert('Obrigado por entrar em contato, responderemos em breve!')
      } catch (error) {
        console.error(error)
        alert('Não foi possível enviar a mensagem, você pode tentar novamente?')
      }
    }
  }

  return (
    <>
      <Head>
        <title>Tesla UFMG | Contato</title>
      </Head>
      <Container>
        <Section>
          <SectionContent>
            <Title>CONTATO</Title>
            <FormContent onSubmit={e => handleSubmit(e)}>
              <InputRow>
                <InputText
                  type="text"
                  placeholder="Nome"
                  onChange={e => setNome(e.target.value)}
                  required
                />
                <InputText
                  type="text"
                  placeholder="Email"
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </InputRow>
              <InputRow>
                <InputText
                  type="text"
                  placeholder="Assunto"
                  onChange={e => setAssunto(e.target.value)}
                  required
                />
              </InputRow>
              <InputRow>
                <TextArea
                  placeholder="Mensagem"
                  rows={7}
                  onChange={e => setMensagem(e.target.value)}
                  required
                />
              </InputRow>
              {error && <ErrorMessage>{error}</ErrorMessage>}
              <ContactButton onClick={e => handleSubmit(e)}>
                ENVIAR
              </ContactButton>
            </FormContent>
          </SectionContent>
        </Section>
      </Container>
    </>
  )
}

export default Contato
