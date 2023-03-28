/**
 * Root path to website
 */
import Link from 'next/link';
import styles from './page.module.css';

export default async function Home() {
  return (
    <main className={styles.main}>
      <h1 className="text-3xl font-bold underline m-4">Hello</h1>
      <div>
        <ul>
          <Link href="/about/drifloon">Drifloon</Link>
        </ul>
      </div>
    </main>
  );
}
