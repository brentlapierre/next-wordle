import { NextPage } from 'next';

import styles from '../styles/components/word.module.css';

type Props = {
  word: string[],
};

const Word: NextPage<Props> = ({ word }) => {
  return (
    <div className={styles.word}>
      {word.map((letter: string, index: number) => (
        <div className={styles.letter} key={index}>{letter}</div>
      ))}
    </div>
  );
};

export default Word;
