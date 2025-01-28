'use client';
import Link from '@/node_modules/next/link';
import React from 'react';
import styles from './singleSerie.module.scss';
const SingleSerie: React.FC<{
  title: string;
  image: string;
  description: string;
}> = ({title, image, description}) => {
  const serieCoverImage = require(
    `../../../../public/assets/series/${image}`
  ).default;
  const serieCoverImage1100 = require(
    `../../../../public/assets/series/details/${image.replace('.webp', '-details.webp')}`
  ).default;
  return (
    <Link className={styles['single-serie-box']} role="link" href="/seriale">
      <img
        className={styles['single-serie-box__image']}
        src={serieCoverImage.src}
        alt="serie cover"
        width={175}
        height={300}
      />
      <img
        className={styles['single-serie-box__image-1100']}
        src={serieCoverImage1100.src}
        alt="serie cover"
        width={200}
        height={300}
      />
      <div className={styles['single-serie-box__text-box']}>
        <h2>{title}</h2>
        <span className={styles['single-serie-box__text-box__description']}>
          {description}
        </span>
      </div>
    </Link>
  );
};
export default SingleSerie;
