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
      user: SMTP_EMAIL as string,
      pass: SMTP_PASSWORD as string
    }
  })

  // verify the transport
  await new Promise((resolve, reject) => {
    // verify connection configuration
    transport.verify(function (error, success) {
        if (error) {
            console.log(error)
            reject(error)
        } else {
            console.log("Server is ready to take our messages")
            resolve(success)
        }
    })
  })

  const mailData = {
    from: SMTP_EMAIL,
    to: to,
    subject: subject,
    html: body
  }

  // send mail
  const sendMessage = async () => {
    transport.sendMail(mailData, (err, info) => {
        if (err) {
            console.error(err)
        } else {
            console.log(info)
        }
    })
  }

  // send the message
  await sendMessage()

  return true
}