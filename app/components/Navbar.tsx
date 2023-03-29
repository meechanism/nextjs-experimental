import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <Link href="/">
          <Image
            src="/ramhorn.svg"
            width={50}
            height={50}
            alt="Hmong ramhorn motif"
            priority={true}
          />
        </Link>
        <Link
          className="text-white/90 no-underline hover:text-white"
          href="/about">
          About
        </Link>
        <Link
          className="text-white/90 no-underline hover:text-white"
          href="/blog">
          Blog
        </Link>
        <Link
          className="text-white/90 no-underline hover:text-white"
          href="/projects">
          Projects
        </Link>
        <Link
          className="text-white/90 no-underline hover:text-white"
          href="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}
