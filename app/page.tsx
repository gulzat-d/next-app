import styles from './page.module.css';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Мой блог'
  };
}

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div>Привет!</div>
      </main>
    </>

  );
}
