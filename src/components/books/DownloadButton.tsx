'use client'

import { compileMailTemplate } from '@/lib/mail/mail'
import { sendMail } from '../../actions/mail'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'

interface Props {
  book: string, title: string, userEmail: string, userName: string
}

export default function DownloadButton({ book, title, userEmail, userName }: Props) {

  const handleFileDownload = async (fileURL: string) => {
    // fetch file
    const response = await fetch(fileURL)
    const blob = await response.blob()

    // create ObjectURL from blob
    const href = URL.createObjectURL(blob)

    // get filename 
    const filename = title + '_Athena.pdf'

    // create a link element
    const link = document.createElement('a')
    link.href = href
    link.download = filename

    // append link to body and trigger the download
    document.body.appendChild(link)
    link.click()

    // clean up
    document.body.removeChild(link)

    // revoke ObjectURL
    URL.revokeObjectURL(href)
  }

  const handleDownload = async (fileURL: string) => {
    // download file
    await handleFileDownload(fileURL)

    // send email to user
    await sendMail({
      to: userEmail,
      name: userName,
      subject: '📚 Thank You for Downloading Our Book!',
      body: compileMailTemplate(
        `Hello ${userName}`,
        'Thank You for Downloading Our Book!',
        `We hope it brings you hours of enjoyment! Happy reading!`)
    })
  }

  return (
    <button
      onClick={() => handleDownload(book)}
      className='outline-btn w-40'>
      <ArrowDownTrayIcon className='h-5' />
      <span>Download</span>
    </button>
  )
}
