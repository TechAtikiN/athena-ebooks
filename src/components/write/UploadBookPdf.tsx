'use client'

// named imports
import { UploadButton } from '@/utils/uploadthing'
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline'

export default function UploadBookPdf({ setBookPdf }: { setBookPdf: (file: TFile) => void }) {
  return (
    <div className='space-y-3 my-5 flex flex-col justify-center items-center'>
      <div className='w-full h-32 p-3 bg-slate-500/40 text-slate-700 border-2 border-dashed border-white rounded-xl my-2'>
        <ArrowUpTrayIcon className='mx-auto mt-2 w-10 h-10 text-slate-500' />
        <UploadButton
          className='font-semibold text-slate-700'
          endpoint="pdfUploader"
          onClientUploadComplete={(res: any) => {
            setBookPdf(res[0]);
          }}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`);
          }}
        />
      </div>
    </div>
  )
}
