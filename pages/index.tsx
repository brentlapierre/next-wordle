import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

import store from '../data/store.json';
import words from '../data/words.json';
import fs from 'fs';

import Word from '../components/word';

type Props = {
  word: string[],
}

export async function getServerSideProps () {
  const now = Date.now();

  // Update to the next word on day change
  if ((now - store.timestamp) >= 86400000) {
    store.currentWordIndex += 1;
    store.timestamp += 86400000;

    await fs.writeFile(`${__dirname}/../../../data/store.json`, JSON.stringify(store, null, 2), (err) => {
      
    });
  }

  const wordIndex = store.currentWordIndex;
  const word = words.list[wordIndex].split(''); // Get the next word and split the letters

  return {
    props: {
      word,
    },
  };
}

const Home: NextPage<Props> = ({ word }) => {
  return (
    <>
      <Head>
        <title>Next Wordle</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.title}>Today&apos;s Wordle:</div>
        <Word word={word} />
      </div>
    </>
  )
};

export default Home;
