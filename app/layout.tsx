/**
 * Wraps all pages in this root layout template
 *
 * */
import Link from 'next/link';
import './globals.css';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
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
