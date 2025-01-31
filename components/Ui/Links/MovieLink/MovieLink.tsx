'use client';
import React from 'react';
import styles from './movieLink.module.scss';
import universesStyles from '../../Styles/universes.module.scss';
import CategoryDetailsRow from '../../Text/CategoryDetailsRow/CategoryDetailsRow';
import Link from 'next/link';

export interface MovieLinkPropsType {
  id: number;
  name: string;
  description: string;
  image_cover: string;
  action_place: string[];
  action_time: string;
  category: string[];
  rating: string;
  production_year: string;
  movie_length: string;
  universe: string;
}

const MovieLink = ({
  id,
  name,
  description,
  image_cover,
  action_place,
  action_time,
  category,
  rating,
  production_year,
  movie_length,
  universe,
}: MovieLinkPropsType) => {
  const movieCoverImage = require(
    `../../../../public/assets/movies/details/${image_cover.replace(
      '.webp',
      '-details.webp'
    )}`
  ).default.src;
  console.log('this name!',name)
  return (
    <Link
      className={`${styles['container']} ${
        universesStyles[`${universe.toLowerCase()}-container`]
      }`}
      id={`${id}`}
      role="link"
      href={`/filmy/${name.replace(/\s/g, '').toLowerCase()}-${id}`}
    >
      <img
        src={movieCoverImage}
        alt={`${name} cover`}
        className={styles['container__main-img']}
        width={155}
        height="auto"
        title={name}
        loading="eager"
      />
      <div className={styles['container__content-box']}>
        <div
          className={`${styles['container__content-box__header-box']} ${
            universesStyles[
              `${universe.toLowerCase()}-container__content-box__header-box`
            ]
          }`}
        >
          <h3>{name}</h3>
          <div className={styles['container__content-box__header-box__right']}>
            <span
              className={`${
                styles['container__content-box__header-box__right__rating']
              } ${
                universesStyles[
                  `${universe.toLowerCase()}-container__content-box__header-box__right__rating`
                ]
              }`}
            >
              <span
                className={`${
                  styles[
                    'container__content-box__header-box__right__rating__star'
                  ]
                } ${
                  universesStyles[
                    `${universe.toLowerCase()}-container__content-box__header-box__right__rating__star`
                  ]
                }`}
              ></span>{' '}
              {rating}
            </span>
            {universe !== 'None' && (
              <img
                src={
                  require(
                    `../../../../public/assets/universes/${universe}.webp`
                  ).default.src
                }
                alt={`${universe} cover`}
                className={
                  styles['container__content-box__header-box__right__universe']
                }
                width={155}
                height={45}
                title={universe}
                loading="eager"
              />
            )}
          </div>
        </div>
        <span
          className={`${styles['container__content-box__description']} ${
            universesStyles[
              `${universe.toLowerCase()}-container__content-box__description`
            ]
          }`}
        >
          {description}
        </span>
      </div>
      <div className={styles['container__content-box-hover']}>
        <div
          className={`${styles['container__content-box-hover__header-box']} ${
            universesStyles[
              `${universe.toLowerCase()}-container__content-box-hover__header-box`
            ]
          }`}
        >
          <h3>{name}</h3>
          <span
            className={`${
              styles['container__content-box-hover__header-box__rating']
            } ${
              universesStyles[
                `${universe.toLowerCase()}-container__content-box-hover__header-box__rating`
              ]
            }`}
          >
            <span
              className={`${
                styles['container__content-box-hover__header-box__rating__star']
              } ${
                universesStyles[
                  `${universe.toLowerCase()}-container__content-box-hover__header-box__rating__star`
                ]
              }`}
            ></span>
            {rating}
          </span>
        </div>

        <div
          className={styles['container__content-box-hover__content-details']}
        >
          <CategoryDetailsRow
            title="Miejsce akcji"
            text={action_place}
            type="listItem"
            universe={universe.toLowerCase()}
          />
          <CategoryDetailsRow
            title="Czas akcji"
            text={String(action_time)}
            type="static"
            universe={universe.toLowerCase()}
          />
          <CategoryDetailsRow
            title="Gatunek:"
            text={category}
            type="listItem"
            universe={universe.toLowerCase()}
          />
          <CategoryDetailsRow
            title="Rok produkcji"
            text={String(production_year)}
            type="static"
            universe={universe.toLowerCase()}
          />
          <CategoryDetailsRow
            title="Długość filmu"
            text={String(movie_length)}
            type="static"
            universe={universe.toLowerCase()}
          />
        </div>
      </div>
    </Link>
  );
};

export default MovieLink;
