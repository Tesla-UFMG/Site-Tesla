const { SuperfaceClient } = require('@superfaceai/one-sdk')

const sdk = new SuperfaceClient()

export default async function handler(req, res) {
  const params = req.body

  const profile = await sdk.getProfile('communication/send-email@2.1.0')
  const message = `
  Email: ${params.email}
  Name: ${params.nome}
  Message: ${params.mensagem} 
  `
  const result = await profile.getUseCase('SendEmail').perform(
    {
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: `Mensagem do site - ${params.assunto}`,
      text: message
    },
    {
      provider: 'sendgrid',
      security: {
        bearer_token: {
          token: process.env.SENDGRID_API_KEY
        }
      }
    }
  )

  try {
    const data = result.unwrap()
    res.status(201).end()
  } catch (error) {
    console.error(error)
    res.status(500).end()
  }
}
