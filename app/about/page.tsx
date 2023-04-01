import Image from 'next/image';
/**
 * path: /about
 */

import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import PageSection from '../components/PageSection';

// bing prompt: pixel art, asian female programmer in her cyberpunk office surrounded by tropical plants, studio ghibli style
export default function About() {
  return (
    <PageSection>
      <section className="grid grid-cols-1 items-baseline gap-x-6 gap-y-10 lg:grid-cols-3">
        <div>
          <h1 className="text-6xl font-semibold leading-9 tracking-tight text-slate-900">
            About
          </h1>
          <Image
            className="w-2/3 py-4 lg:pr-4 lg:w-full lg:py-8"
            src="/profile-pic2.jpeg"
            width={550}
            height={825}
            alt="Woman drinking wines"
            priority={true}
          />
        </div>
        <div className="max-w-2xl space-y-10 lg:col-span-2 prose prose-slate prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600">
          <h2>...me</h2>
          <p>
            I&apos;m <em>Mee Cha</em>, a first generation Hmong-American, born
            and raised in California.
          </p>

          <p>
            My roots are video games and anime. I like to draw and paint when I
            am not coding away. I also love reading sci-fi and fantasy and
            taking care of my plants.
          </p>
          <p>
            When I grow up, I want to run a bed and breakfast in a remote
            location. I will have chickens in the back yard and a fruitful
            garden to tend.
          </p>

          <h2>...the site</h2>
          <p>
            {' '}
            This site is a collection of my thughts, projects, and learnings
            over time. It&apos;s mostly a memory dump for me to reference
            sometime down the road, but if someone finds it helpful, I think
            that&apos;ss great.
          </p>
          <p>
            This verison of the site is written in Typescript/React/NextJS 13
            and styled with TailwindCSS.
          </p>
        </div>
      </section>
    </PageSection>
  );
}
