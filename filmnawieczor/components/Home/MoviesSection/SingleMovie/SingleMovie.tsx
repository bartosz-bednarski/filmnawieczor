'use client'
import Link from '@/node_modules/next/link';
import React from 'react';
import styles from './singleMovie.module.scss';
const SingleMovie: React.FC<{
  title: string;
  image: string;
  id: number;
  description: string;
}> = ({title, image, id, description}) => {
  const link = `/filmy/${title.replace(/\s/g, '').toLowerCase()}-${id}`;
  const movieCoverImage1100 = require(
    `../../../../public/assets/movies/details/${image.replace('.webp', '-details.webp')}`
  ).default;
  const movieCoverImage = require(`../../../../public/assets/movies/${image}`).default;
  return (
    <Link
      className={styles['single-movie-box']}
      role="link"
     href={link}
    >
      <img
        className={styles['single-movie-box__image']}
        src={movieCoverImage.src}
        alt="movie cover"
        width={175}
        height={300}
      />
      <img
        className={styles['single-movie-box__image-1100']}
        src={movieCoverImage1100.src}
        alt="movie cover"
        width={200}
        height={300}
      />
      <div className={styles['single-movie-box__text-box']}>
        <h2>{title}</h2>
        <span className={styles['single-movie-box__text-box__description']}>
          {description}
        </span>
      </div>
    </Link>
  );
};
export default SingleMovie;
