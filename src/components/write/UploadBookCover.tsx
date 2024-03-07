'use client'

import { UploadButton } from '@/utils/uploadthing'

type Props = {

}

export default function UploadBookCover({ setBookCover }: { setBookCover: (file: TFile) => void }) {
  return (
    <div className='flex flex-col space-y-1 col-span-2'>
      <label className='form-label' htmlFor="cover">Cover Image of the Book</label>
      {/* <div className='form-input border border-slate-600 rounded-lg w-ful bg-slate-400'>
        <ArrowUpTrayIcon className='mx-auto my-5 w-10 h-10 text-slate-500 ' /> */}
      <UploadButton
        className='w-full h-20 bg-accent/40 text-slate-700 border border-dashed border-slate-600 rounded-xl my-2'
        endpoint="imageUploader"
        onClientUploadComplete={(res: any) => {
          console.log("Files: ", res);
          setBookCover(res[0]);
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      {/* </div> */}
    </div>
  )
}
