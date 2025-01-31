'use client';
import React from 'react';
import styles from '../Ui/Styles/mainContainerWithAdverts.module.scss';
import MainHeader from '../Ui/Headers/MainHeader/MainHeader';
import NewsLink, { NewsLinkPropsType } from '../Ui/Links/NewsLink/NewsLink';

export type NewsPropsType ={last10News:NewsLinkPropsType[]} ;

const News = ({last10News}:NewsPropsType) => {
  return (
    <div className={styles.container}>
      <MainHeader title="Aktualności" />
      <div className={styles['main-container']}>
        <div className={styles['main-container__advert-box']}> </div>
        <div className={styles['main-container__content-container']}>
          {last10News.length > 0 &&
            last10News.map((news) => (
              <NewsLink
                key={news.title}
                title={news.title}
                image_cover={news.image_cover}
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
