/**
 * Wraps all pages in this root layout template
 *
 * */
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './globals.css';
import Navbar from './components/Navbar';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-100">
        <Navbar />
        {children}
        <div className="prose prose-xl mx-auto p-2 mt-10 flex justify-between text-sm">
          <div className="text-gray-300">
            © 2023. Built and maintained by Mee.
          </div>
          <div className="flex justify-end">
            <Link
              className="text-white/50 hover:text-white p-2"
              href="https://www.linkedin.com/in/meecha">
              <FaLinkedin />
            </Link>
            <Link
              className="text-white/50 hover:text-white p-2"
              href="https://www.github.com/meechanism">
              <FaGithub />
            </Link>
            <Link
              className="text-white/50 hover:text-white p-2"
              href="https://www.instagram.com/meechanism">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
