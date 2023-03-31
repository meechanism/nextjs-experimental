/**
 * Root path to website
 */

import Card, { CardBody, CardHeader } from './components/Card';
import PageSection from './components/PageSection';
import Image from 'next/image';

export default async function Home() {
  return (
    <PageSection className="flex justify-center">
      <Image
        className="rounded-full grayscale hover:grayscale-0 hover:drop-shadow-2xl"
        src="/mee-pixel.jpeg"
        width={300}
        height={300}
        alt="Pixel art of woman at computer"
        priority={true}
      />
      <h1 className="font-normal text-gray-600 text-7xl md:text-5xl leading-none my-8 mb-4 uppercase">
        Mee Cha
      </h1>
      <p className="font-norma text-4xl md:text-2xl leading-none mb-4">
        <span className="text-red-500">Nerdy.</span>
        <span className="text-lime-500"> Curious.</span>
        <span className="text-purple-500"> Imaginative.</span>
      </p>
      <p className="font-normal text-gray-600 text-md md:text-xl leading-none mb-4">
        Welcome, this is her creative dump.
      </p>
    </PageSection>
  );
}
