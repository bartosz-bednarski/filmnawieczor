'use client'
import {Last10News} from '../../types/api/news';
import React from 'react';
import styles from '../Ui/Styles/mainContainerWithAdverts.module.scss';
import MainHeader from '../Ui/Headers/MainHeader/MainHeader';
import NewsBox from '../Ui/Links/NewsLink/NewsLink';

export type NewsPropsType = Last10News[]

const News: React.FC<{last10News:NewsPropsType}> = ({last10News}) => {
  
  return (
    <div className={styles.container}>
      <MainHeader title="Aktualności" />
      <div className={styles['main-container']}>
        <div className={styles['main-container__advert-box']}> </div>
        <div className={styles['main-container__content-container']}>
          {last10News.length > 0 &&
            last10News.map((news) => (
              <NewsBox
                key={news.title}
                coverTitle={news.title}
                coverImage={news.image_cover}
                coverContent={news.cover_content}
                url={news.url}
              />
            ))}
        </div>
        <div className={styles['main-container__advert-box']}> </div>
      </div>
    </div>
  );
};
export default News;
