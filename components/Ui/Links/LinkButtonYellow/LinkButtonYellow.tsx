'use client';
import Link from 'next/link';
import styles from './linkButtonYellow.module.scss';

export interface LinkButtonYellowPropsType {
  title: string;
  url: string;
}

const LinkButtonYellow = ({title, url}: LinkButtonYellowPropsType) => {
  return (
    <Link href={url} className={styles.link}>
      {title}
    </Link>
  );
};
export default LinkButtonYellow;
