import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import ChatsPanel from '@/components/ChatsPanel'
import DiscussionPanel from '@/components/DiscussionPanel'
import { useState } from 'react'


export default function Home() {
  const [isHidden, setHidden] = useState(false);
  const toggleVisibility = () => {
    setHidden(!isHidden);
  };

  return (
    <>
      <Head>
        <title>Chat App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <ChatsPanel isHidden={!isHidden} onChatClick={toggleVisibility}/>
        <DiscussionPanel isHidden={isHidden} onActionsClick={toggleVisibility}/>
      </main>
    </>
  );
}
