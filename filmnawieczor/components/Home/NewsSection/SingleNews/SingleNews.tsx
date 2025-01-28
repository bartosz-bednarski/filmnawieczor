'use client';
import Link from '@/node_modules/next/link';
import React from 'react';
import styles from './singleNews.module.scss';
const SingleNews: React.FC<{title: string; image: string; url: string}> = ({
  title,
  image,
  url,
}) => {
  const newsCoverImage = require(
    `../../../../public/assets/news/${image}`
  ).default;
  return (
    <article className={styles['single-news-container']}>
      <Link className={styles['single-news-box']} role="link" href={url}>
        <img
          className={styles['single-news-box__image']}
          src={newsCoverImage.src}
          alt="news cover"
          width={175}
          height={300}
        />
        <img
          className={styles['single-news-box__image-1100']}
          src={newsCoverImage.src}
          alt="news cover"
          width={200}
          height={300}
        />
        <div className={styles['single-news-box__text-box']}>
          <h2>{title}</h2>
        </div>
      </Link>
    </article>
  );
};
export default SingleNews;
