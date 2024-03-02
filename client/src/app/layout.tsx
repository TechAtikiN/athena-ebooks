// type imports
import type { Metadata } from 'next';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={lato.className}>
        <Providers>
          <div className=''>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
