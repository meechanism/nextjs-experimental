import Image from 'next/image';

type Pokemon = {
  name: string;
};
/**
 *
 * Prefetch popular pokemon. reduce network requests (unless you do revalidate)
 *
 */
export async function generateStaticParams() {
  const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const res = await data.json();
  return res.map((p: Pokemon) => ({
    pokemon: p.name
  }));
}

export default async function Pokemon({ params }: any) {
  const { pokemon } = params;
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  const res = await data.json();

  return (
    <div>
      <h1>{res.name}</h1>
      <Image
        src={res.sprites.front_default}
        width={80}
        height={80}
        alt="Default sprite"
      />
    </div>
  );
}
