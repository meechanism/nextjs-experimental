/**
 * Wraps all pages in this root layout template
 *
 * */
import Link from 'next/link';
import './globals.css';

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat'
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <nav>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
