'use client';
import React from 'react';
import styles from './movie.module.scss';
import layoutStyles from '../../Ui/Styles/mainContainerWithAdverts500ad.module.scss';
import universesStyles from './universes.module.scss';
import CategoriesArray from './Categories/CategoriesArray';
import CategoriesStatic from './Categories/CategoriesStatic';
import {MovieDetailsType} from '@/api/movies/getMovieDetails';

export interface MoviePropsType {
  movieData: MovieDetailsType;
}

const Movie = ({movieData}: MoviePropsType) => {
  const coverImage = require(
    `../../../public/assets/movies/details/${movieData.image_cover}`
  ).default;
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles['main-container']}>
        <div className={layoutStyles['main-container__advert-box']}> </div>
        <div className={layoutStyles['main-container__content-container']}>
          <div className={styles['movie']}>
            <div className={styles['movie__top-container']}>
              <h1
                className={`${styles['movie__top-container__title']} ${
                  universesStyles[`${movieData.universe.toLowerCase()}-title`]
                }`}
              >
                {movieData.name}
              </h1>
              <img
                src={coverImage.src}
                className={styles['movie__top-container__image']}
                alt={movieData.name}
                title={movieData.name}
                width={620}
                height={400}
                loading="eager"
              />
            </div>
            <div className={styles['movie__categories-box']}>
              <CategoriesArray
                type="button"
                title="Miejsce akcji"
                queryName="ap.action_place"
                queryValue="Miejsce akcji"
                catName="miejsce_akcji"
                text={movieData.action_place.split(',')}
                universe={movieData.universe.toLowerCase()}
              />
              <CategoriesStatic
                type="static"
                title="Czas akcji"
                text={String(movieData.action_time)}
                universe={movieData.universe.toLowerCase()}
              />
              <CategoriesArray
                type="button"
                title="Gatunek"
                queryName="mc.movie_category"
                queryValue="Gatunek"
                catName="gatunek"
                text={movieData.category.split(',')}
                universe={movieData.universe.toLowerCase()}
              />
              <CategoriesStatic
                type="static"
                title="Rok produkcji"
                text={String(movieData.production_year)}
                universe={movieData.universe.toLowerCase()}
              />
              <CategoriesStatic
                type="static"
                title="Długość"
                text={String(movieData.movie_length)}
                universe={movieData.universe.toLowerCase()}
              />
              <CategoriesStatic
                type="static"
                title="Ocena"
                text={movieData.rating}
                universe={movieData.universe.toLowerCase()}
              />
            </div>
            <span
              className={`${styles['movie__description']} ${
                universesStyles[
                  `${movieData.universe.toLowerCase()}-description`
                ]
              }`}
            >
              {movieData.description}
            </span>
            <div className={styles['movie__youtube-box']}>
              {' '}
              <iframe
                width="560"
                height="315"
                src={movieData.url}
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
