import Image from 'next/image';
/**
 * path: /about
 */

import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import PageSection from '../components/PageSection';

// bing prompt: pixel art, asian female programmer in her cyberpunk office surrounded by tropical plants, studio ghibli style
export default function About() {
  return (
    <PageSection className="grid grid-cols-1 items-baseline gap-x-6 gap-y-10 lg:grid-cols-3">
      <div>
        <h1 className="text-6xl font-semibold leading-9 tracking-tight text-slate-900">
          About
        </h1>
        <div className="py-8 h-80 lg:pr-4 lg:py-8 overflow-hidden lg:h-full">
          <p className="flex justify-center">
            <Image
              src="/profile-pic2.jpeg"
              width={550}
              height={825}
              alt="Woman drinking wines"
              priority={true}
            />
          </p>
        </div>
      </div>
      <div className="max-w-2xl space-y-10 lg:col-span-2 prose prose-slate prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600">
        <h2>...me</h2>
        <p>
          I&apos;m{' '}
          <em className="underline decoration-red-500 underline-offset-2">
            Mee Cha
          </em>
          , a first generation Hmong-American, born and raised in California.
          The name of this site is a{' '}
          <span className="line-through">terrible</span> ameezing pun of my name
          and my game design background lumped together:{' '}
          <span className="underline decoration-lime-500 underline-offset-2">
            mechanism
          </span>
          .
        </p>

        <p>
          My roots are{' '}
          <span className="underline decoration-purple-500 underline-offset-2">
            video games and anime
          </span>
          . I like to draw and paint when I am not coding away. I also love
          reading sci-fi and fantasy and taking care of my plants.
        </p>

        <p>
          My day trade is a{' '}
          <span className="underline decoration-blue-500 underline-offset-2">
            frontend developer
          </span>
          . I like building things and I enjoy seeing people use the things I
          make. I&apos;m no graphic designer, but if I had to complement my
          development with something, it would be design. I like dabbling with
          traditional and analog mediums (graphite, inks, paints), but I&apos;m
          not traditionally trained and only practice for fun, relaxation, and
          general happiness.
        </p>

        <h2>...the site</h2>
        <p>
          This site is a collection of my thoughts, projects, and learnings over
          time. It&apos;s mostly a memory dump for me to reference sometime down
          the road, but if someone finds it helpful, I think that&apos;s great.
        </p>
        <p>
          This verison of the site is written in Typescript/React/NextJS 13 and
          styled with TailwindCSS.
        </p>

        <h2>...the logo</h2>

        <p>
          The graphic is a traditional Hmong motif of a <em>ram horn</em> and is
          usually found on embroidery. Why a ram? I like to think of myself as
          resilient and surprising, like being found in unlikely places such as
          cliff edges. That and spiral horns are simply cute.
        </p>

        <p className="flex justify-center">
          <Image
            className="m-0"
            src="/ramhorn.svg"
            width={50}
            height={50}
            alt="Hmong ramhorn motif"
            priority={true}
          />
        </p>
        <p>The logo was drawn by me in Adobe Xd.</p>
      </div>
    </PageSection>
  );
}
