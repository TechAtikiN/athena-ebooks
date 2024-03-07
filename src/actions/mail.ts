'use server'

// default import
import nodemailer from 'nodemailer'

export async function sendMail({ to, name, subject, body }: {
  to: string
  name: string
  subject: string
  body: string
}) { 
  // get the SMTP_EMAIL and SMTP_PASSWORD from the environment
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env
  
  // create a new transport
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD
    }
  })

  // verify the transport
  try {
    const result = await transport.verify()
    console.log(result)
  } catch (error) {
    console.log(error)
    return
  }

  // send the email
  try {
    const send = await transport.sendMail({
      from: SMTP_EMAIL,
      to: to,
      subject: subject,
      html: body
    })
    console.log(send)
  } catch (error) {
    console.log(error)
  }
}

