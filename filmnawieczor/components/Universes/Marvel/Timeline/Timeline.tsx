'use client'
import React from 'react';
import styles from './timeline.module.scss';
import TimelineMovie from './Movie/Movie';
import { MARVEL_TIMELINE } from '../Utils/MarvelTimeline';
const Timeline: React.FC = () => {
  return (
    <div className={styles['timeline-container']}>
      <span className={styles['timeline-container__line']}></span>
      {MARVEL_TIMELINE.map((movie,index) => {
        return (
          <TimelineMovie
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
export default Timeline;
