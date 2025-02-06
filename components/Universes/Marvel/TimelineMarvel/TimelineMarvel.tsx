'use client';
import styles from './timeline.module.scss';
import MovieMarvel from './MovieMarvel/MovieMarvel';
import {MARVEL_TIMELINE} from '../UtilsMarvel/MarvelTimeline';

const TimelineMarvel = () => {
  return (
    <div className={styles.container}>
      <span className={styles.line}></span>
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
