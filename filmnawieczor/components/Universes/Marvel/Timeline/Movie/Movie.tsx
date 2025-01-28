'use client'
import Link from 'next/link';
import React from 'react';
import styles from '../timeline.module.scss';
const Movie: React.FC<{
  view: 'left' | 'right';
  title: string;
  actionTime: string;
  description: string;
  image: string;
  link: string;
}> = ({view, title, actionTime, description, image, link}) => {
  return (
    <Link href={link}>
      <div className={styles['timelineMovie-container']}>
        <img
          src={require(`../../../../../public/assets/movies/details/${image}`).default.src}
          width={580}
          height={200}
          alt={title}
          loading="eager"
          title={title}
          style={{left: view === 'right' ? 0 : '50%'}}
        />
        <div
          className={styles['timelineMovie-container__content-box']}
          style={{flexDirection: view === 'left' ? 'row' : 'row-reverse'}}
        >
          <div
            className={
              styles['timelineMovie-container__content-box__title-box']
            }
            style={{alignItems: view === 'left' ? 'flex-end' : 'flex-start'}}
          >
            <h3
              className={
                styles[
                  'timelineMovie-container__content-box__title-box__title'
                ]
              }
              style={{textAlign: view === 'left' ? 'right' : 'left'}}
            >
              {title}
            </h3>
            <div
              className={
                styles['timelineMovie-container__content-box__title-box__date']
              }
            >
              {actionTime}
            </div>
          </div>
          <div
            className={styles['timelineMovie-container__content-box__dot-box']}
          >
            <div
              className={
                styles['timelineMovie-container__content-box__dot-box__dot']
              }
            ></div>
          </div>
          <div
            className={
              styles['timelineMovie-container__content-box__description-box']
            }
            style={{
              justifyContent: view === 'left' ? 'flex-start' : 'flex-end',
            }}
          >
            {description}
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Movie;
