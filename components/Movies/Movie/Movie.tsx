'use client';
import React from 'react';
import styles from './movie.module.scss';
import layoutStyles from '../../Ui/Styles/mainContainerWithAdverts500ad.module.scss';
import CategoriesArray from './Categories/CategoriesArray';
import CategoriesStatic from './Categories/CategoriesStatic';
import {UNIVERSES_STYLES} from '@/styles/Universes/universesStyles';

export interface MoviePropsType {
  id: number;
  name: string;
  description: string;
  image_cover: string;
  action_place: string;
  action_time: string;
  category: string;
  rating: string;
  production_year: string;
  movie_length: string;
  url: string;
  meta_description: string;
  universe: 'Marvel' | 'None';
}

const Movie = ({
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
  url,
  meta_description,
  universe,
}: MoviePropsType) => {
  const universeStyles = UNIVERSES_STYLES[universe];
  const coverImage = require(
    `../../../public/assets/movies/details/${image_cover}`
  ).default;

  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles['main-container']}>
        <div className={layoutStyles['main-container__advert-box']}> </div>
        <div className={layoutStyles['main-container__content-container']}>
          <div className={styles.movie}>
            <div className={styles.topContainer}>
              <h1 className={universeStyles.titleMovie}>{name}</h1>
              <img
                src={coverImage.src}
                className={styles.image}
                alt={name}
                title={name}
                width={620}
                height={400}
                loading="eager"
              />
            </div>
            <div className={styles.categoriesBox}>
              <CategoriesArray
                type="button"
                title="Miejsce akcji"
                queryName="ap.action_place"
                queryValue="Miejsce akcji"
                catName="miejsce_akcji"
                text={action_place.split(',')}
                universe={universe}
              />
              <CategoriesStatic
                type="static"
                title="Czas akcji"
                text={String(action_time)}
                universe={universe}
              />
              <CategoriesArray
                type="button"
                title="Gatunek"
                queryName="mc.movie_category"
                queryValue="Gatunek"
                catName="gatunek"
                text={category.split(',')}
                universe={universe}
              />
              <CategoriesStatic
                type="static"
                title="Rok produkcji"
                text={String(production_year)}
                universe={universe}
              />
              <CategoriesStatic
                type="static"
                title="Długość"
                text={String(movie_length)}
                universe={universe}
              />
              <CategoriesStatic
                type="static"
                title="Ocena"
                text={rating}
                universe={universe}
              />
            </div>
            <span className={universeStyles.descriptionMovie}>
              {description}
            </span>
            <div className={styles.youtubeBox}>
              <iframe
                width="560"
                height="315"
                src={url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          ;
        </div>
        <div className={layoutStyles['main-container__advert-box']}> </div>
      </div>
    </div>
  );
};

export default Movie;
