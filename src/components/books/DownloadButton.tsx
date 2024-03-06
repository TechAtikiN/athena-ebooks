'use client'

import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'

export default function DownloadButton({ book, title }: { book: string, title: string }) {
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

  return (
    <button
      onClick={() => handleFileDownload(book)}
      className='outline-btn'>
      <ArrowDownTrayIcon className='h-5' />
      <span>Download</span>
    </button>
  )
}
