'use client';
import Link from '@/node_modules/next/link';
import React from 'react';
import styles from './newsLink.module.scss';

export interface NewsLinkPropsType {
  title: string;
  image_cover: string;
  url: string;
}

const NewsLink = ({title, image_cover, url}: NewsLinkPropsType) => {
  const newsCoverImage = require(
    `../../../../public/assets/news/${image_cover}`
  ).default;
  return (
    <Link className={styles.link} href={`/aktualnosci/artykul/${url}`}>
      <img
        src={newsCoverImage.src}
        width={325}
        height="auto"
        className={styles.image}
        alt={`${title} cover`}
        title={title}
        loading="eager"
      />
      <div className={styles.header}>
        <h4>{title}</h4>
      </div>
    </Link>
  );
};

export default NewsLink;
