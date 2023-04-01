/**
 * Root path to website
 */

import PageSection from './components/PageSection';
import Image from 'next/image';

export default async function Home() {
  return (
    <PageSection className="grid justify-items-center">
      <Image
        className="rounded-full grayscale hover:grayscale-0 hover:drop-shadow-2xl"
        src="/mee-pixel.jpeg"
        width={300}
        height={300}
        alt="Pixel art of woman at computer"
        priority={true}
      />
      <h1 className="font-normal text-gray-900 text-xl md:text-4xl leading-none my-8 mb-4 ">
        Mee Cha
      </h1>

      <p className="font-norma text-xl md:text-5xl leading-none mb-4 ">
        <span className="underline decoration-red-500">Nerdy.</span>
        {` `}
        <span className="underline decoration-lime-500">Curious.</span>
        {` `}
        <span className="underline decoration-indigo-500">Imaginative.</span>
      </p>
      <p className="font-normal text-gray-400 text-md md:text-xl leading-none mt-2">
        [ You found her creative dump ]
      </p>
    </PageSection>
  );
}
