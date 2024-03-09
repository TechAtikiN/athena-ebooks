// type imports
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';

// style imports
import { Lato } from 'next/font/google';
import './globals.css'

// default imports
import Providers from '@/components/providers/Providers';

const lato = Lato(
  {
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
  }
);

export const metadata: Metadata = {
  title: 'Athena E-books',
  description: 'Unlock the power of knowledge and wisdom with Athena E-books',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={lato.className}>
        <Providers>
          <div className=''>
            {children}
            <Toaster />
          </div>
        </Providers>
      </body>
    </html>
  );
}
