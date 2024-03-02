// type imports
import type { Metadata } from 'next';

// style imports
import { Inter } from 'next/font/google';
import './globals.css'

// default imports
import Providers from '@/components/providers/Providers';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
        <Providers>
          <div className=''>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
