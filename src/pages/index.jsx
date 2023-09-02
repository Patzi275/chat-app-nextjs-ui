import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import ChatsPanel from '@/components/ChatsPanel'
import DiscussionPanel from '@/components/DiscussionPanel'


export default function Home() {
  return (
    <>
      <Head>
        <title>Chat App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <ChatsPanel />
        <DiscussionPanel />
      </main>
    </>
  );
}
