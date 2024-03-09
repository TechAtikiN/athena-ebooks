import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();
 
export const ourFileRouter = {
  // Upload Book Cover Image
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .onUploadComplete(async ({ file }) => {
      return { message: "Cover Image Upload complete"};
    }),
  
  // Upload Book PDF
  pdfUploader: f({ pdf: { maxFileSize: "8MB" } })
    .onUploadComplete(async ({ file }) => {
      return { message: "Book PDF Upload complete"};
    }),
  
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;