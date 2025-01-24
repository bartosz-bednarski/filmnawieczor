'use client'
import Link from '@/node_modules/next/link';
import React from 'react';
import styles from './newsLink.module.scss';

// import parse from "html-react-parser";
const NewsLink: React.FC<{
  coverTitle: string;
  coverImage: string;
  coverContent: string;
  url:string
}> = ({coverTitle, coverImage, coverContent, url}) => {
  const newsCoverImage = require(`../../../../public/assets/news/${coverImage}`).default;
  return (
    <Link className={styles['newsLink-container']} href={`/aktualnosci/artykul/${url}`}>
      <img
        src={newsCoverImage.src}
        width={325}
        height="auto"
        className={styles['newsLink-container__image']}
        alt={`${coverTitle} cover`}
        title={coverTitle}
        loading="eager"
      />
      <div className={styles['newsLink-container__header']}>
        <h4>{coverTitle}</h4>
      </div>

    </Link>
  );
};
export default NewsLink;
