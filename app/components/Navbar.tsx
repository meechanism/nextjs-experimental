import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="container max-w-screen-xl mx-auto px-1 md:px-6">
      <nav className="flex items-center justify-between" aria-label="Global">
        <div className="relative flex items-center py-2 md:py-[2.125rem]">
          <Link href="/" className="hover:opacity-50">
            <span className="sr-only">Meechanism</span>
            <Image
              src="/ramhorn.svg"
              width={50}
              height={50}
              alt="Hmong ramhorn motif"
              priority={true}
            />
          </Link>
        </div>

        <div className="lg:flex lg:items-center">
          <Link
            className="text-slate-700 no-underline hover:text-red-400 px-6"
            href="/about">
            About
          </Link>
          <Link
            className="text-slate-700 no-underline hover:text-red-400 px-6"
            href="/blog">
            Blog
          </Link>
          <Link
            className="text-slate-700 no-underline hover:text-red-400 px-6"
            href="/projects">
            Projects
          </Link>
          <Link
            className="text-slate-700 no-underline hover:text-red-400 px-6"
            href="/contact">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
