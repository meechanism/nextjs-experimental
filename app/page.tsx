/**
 * Root path to website
 */
import styles from './page.module.css';
import Image from 'next/image';

export default async function Home() {
  const data = await fetch('https://pokeapi.co/api/v2/pokemon/drifloon');
  const res = await data.json();

  console.log('res: ', res);
  return (
    <main className={styles.main}>
      <h1 className="text-3xl font-bold underline m-4">Hello2</h1>
      <div>
        <h2>{res.name}</h2>
        <Image
          src={res.sprites.front_default}
          width={80}
          height={70}
          alt="Default sprite"
        />
        <ul>
          <li></li>
        </ul>
      </div>
    </main>
  );
}
