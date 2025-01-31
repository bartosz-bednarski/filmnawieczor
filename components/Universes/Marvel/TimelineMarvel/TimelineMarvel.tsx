'use client';
import React from 'react';
import styles from './timeline.module.scss';
import MovieMarvel from './MovieMarvel/MovieMarvel';
import {MARVEL_TIMELINE} from '../UtilsMarvel/MarvelTimeline';

const TimelineMarvel: React.FC = () => {
  return (
    <div className={styles['timeline-container']}>
      <span className={styles['timeline-container__line']}></span>
      {MARVEL_TIMELINE.map((movie, index) => {
        return (
          <MovieMarvel
            key={index}
            link={movie.link}
            title={movie.title}
            actionTime={movie.actionTime}
            description={movie.description}
            image={movie.image}
            view={movie.id % 2 === 0 ? 'left' : 'right'}
          />
        );
      })}
    </div>
  );
};
export default TimelineMarvel;
