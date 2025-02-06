'use client';
import React from 'react';
// import CategoryDetailsRow from '../../Text/CategoryDetailsRow/CategoryDetailsRow';
import Link from 'next/link';
import {UNIVERSES_STYLES} from '@/styles/Universes/universesStyles';
import CategoryHover from './CategoryDetailsRow/CategoryHover';

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
  universe: 'Marvel' | 'None';
  url: string;
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
  url,
}: MovieLinkPropsType) => {
  const styles = UNIVERSES_STYLES[universe];

  const movieCoverImage = require(
    `../../../../public/assets/movies/details/${image_cover.replace(
      '.webp',
      '-details.webp'
    )}`
  ).default.src;
  const link = `/filmy/${url}`;
  return (
    <Link className={styles.movieLink} id={String(id)} role="link" href={link}>
      <img
        src={movieCoverImage}
        alt={`${name} cover`}
        className={styles.image}
        width={155}
        height="auto"
        title={name}
        loading="eager"
      />
      <div className={styles.contentBox}>
        <div className={styles.headerBox}>
          <h3>{name}</h3>
          <div className={styles.right}>
            <span className={styles.rating}>
              <span className={styles.star}></span>
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
                className={styles.universe}
                width={155}
                height={45}
                title={universe}
                loading="eager"
              />
            )}
          </div>
        </div>
        <span className={styles.description}>{description}</span>
      </div>
      <div className={styles.contentBoxHover}>
        <div className={styles.headerBox}>
          <h3>{name}</h3>
          <span className={styles.rating}>
            <span className={styles.star}></span>
            {rating}
          </span>
        </div>

        <div className={styles.details}>
          <CategoryHover
            title="Miejsce akcji"
            text={action_place}
            type="listItem"
            universe={universe}
          />
          <CategoryHover
            title="Czas akcji"
            text={String(action_time)}
            type="static"
            universe={universe}
          />
          <CategoryHover
            title="Gatunek:"
            text={category}
            type="listItem"
            universe={universe}
          />
          <CategoryHover
            title="Rok produkcji"
            text={String(production_year)}
            type="static"
            universe={universe}
          />
          <CategoryHover
            title="Długość filmu"
            text={String(movie_length)}
            type="static"
            universe={universe}
          />
        </div>
      </div>
    </Link>
  );
};

export default MovieLink;
