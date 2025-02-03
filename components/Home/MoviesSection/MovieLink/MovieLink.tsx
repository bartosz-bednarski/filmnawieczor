'use client';
import Link from '@/node_modules/next/link';
import React from 'react';
import styles from './movieLink.module.scss';

export interface MovieLinkHomePropsType{
  name: string;
  image_cover: string;
  id: number;
  description: string;
}

const MovieLink = ({name, image_cover, id, description}:MovieLinkHomePropsType) => {
  const link = `/filmy/${name.replace(/\s/g, '').toLowerCase()}-${id}`;
  const MOVIE_COVER_IMAGE_PC = require(
    `../../../../public/assets/movies/details/${image_cover.replace('.webp', '-details.webp')}`
  ).default;
  const MOVIE_COVER_IMAGE_MOBILE = require(
    `../../../../public/assets/movies/${image_cover}`
  ).default;
  return (
    <Link className={styles.container} role="link" href={link}>
      <img
        className={styles.imagePhone}
        src={MOVIE_COVER_IMAGE_MOBILE.src}
        alt="movie cover"
        width={175}
        height={300}
      />
      <img
        className={styles.imagePc}
        src={MOVIE_COVER_IMAGE_PC.src}
        alt="movie cover"
        width={200}
        height={300}
      />
      <div className={styles.textBox}>
        <h2>{name}</h2>
        <span className={styles.description}>
          {description}
        </span>
      </div>
    </Link>
  );
};
export default MovieLink;
