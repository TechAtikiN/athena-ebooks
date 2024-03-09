'use client'

// named imports
import { UploadButton } from '@/utils/uploadthing'

export default function UploadBookCover({ setBookCover }: { setBookCover: (file: TFile) => void }) {
  return (
    <div className='flex flex-col space-y-1 col-span-2'>
      <label className='form-label' htmlFor="cover">Cover Image of the Book</label>
      <UploadButton
        className='w-full h-20 bg-accent/40 text-slate-700 border border-dashed border-slate-600 rounded-xl my-2'
        endpoint="imageUploader"
        onClientUploadComplete={(res: any) => {
          setBookCover(res[0]);
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  )
}
