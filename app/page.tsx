import { Card } from './components/Card/Card';
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
        <Card
          title = {'title'}
          paragraph = {'text'}
          createDate={'1 month ago'}
          tag = {'front-end'}
          count={4}
          time={'3 minutes'}
        ></Card>
      </main>
    </>

  );
}
