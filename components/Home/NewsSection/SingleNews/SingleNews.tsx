'use client';
import Link from '@/node_modules/next/link';
import React from 'react';
import styles from './singleNews.module.scss';

export interface SingleNewsHomePropsType {
  id: number;
  image_cover: string;
  cover_content: string;
  title: string;
  url: string;
}

const SingleNews = ({
  id,
  title,
  image_cover,
  cover_content,
  url,
}: SingleNewsHomePropsType) => {
  const newsCoverImage = require(
    `../../../../public/assets/news/${image_cover}`
  ).default;

  return (
    <article className={styles.container}>
      <Link className={styles.box} role="link" href={url}>
        <img
          className={styles.imagePhone}
          src={newsCoverImage.src}
          alt="news cover"
          width={175}
          height={300}
        />
        <img
          className={styles.imagePc}
          src={newsCoverImage.src}
          alt="news cover"
          width={200}
          height={300}
        />
        <div className={styles.textBox}>
          <h2>{title}</h2>
        </div>
      </Link>
    </article>
  );
};

export default SingleNews;
