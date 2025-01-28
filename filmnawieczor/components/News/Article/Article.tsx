'use client';
import React from 'react';
import MainHeader from '../../Ui/Headers/MainHeader/MainHeader';
import Section from './Section/Section';
import styles from '../../Ui/Styles/mainContainerWithAdverts.module.scss';
import {NewsDetails} from '../../../types/api/news';

export type ArticlePropsType = {
  article: NewsDetails;
};

const Article = ({article}: ArticlePropsType) => {
  console.log(article);
  return (
    <div className={styles.container}>
      <MainHeader title={article.news_title} />
      <div className={styles['main-container']}>
        <div className={styles['main-container__advert-box']}> </div>
        <div className={styles['main-container__content-container']}>
          {article.news_details_data.map((section) => (
            <Section section={section} key={section.article_title} />
          ))}
        </div>
        <div className={styles['main-container__advert-box']}> </div>
      </div>
    </div>
  );
};

export default Article;
