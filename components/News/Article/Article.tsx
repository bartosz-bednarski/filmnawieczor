'use client';
import React from 'react';
import Section, {SectionPropsType} from './Section/Section';
import styles from '../../Ui/Styles/mainContainerWithAdverts.module.scss';
import H1SideBoxes from '@/components/Ui/Headers/H1SideBoxes/H1SideBoxes';

export type ArticlePropsType = {
  news_title: string;
  type: string;
  news_id: number;
  news_details_data: SectionPropsType[];
};

const Article = ({
  news_title,
  type,
  news_id,
  news_details_data,
}: ArticlePropsType) => {
  return (
    <div className={styles.container}>
      <H1SideBoxes title={news_title} />
      <div className={styles['main-container']}>
        <div className={styles['main-container__advert-box']}> </div>
        <div className={styles['main-container__content-container']}>
          {news_details_data.map((section) => (
            <React.Fragment key={section.article_title}>
              <Section
                article_content={section.article_content}
                article_id={section.article_id}
                article_image={section.article_image}
                article_title={section.article_title}
                article_url={section.article_url}
              />
            </React.Fragment>
          ))}
        </div>
        <div className={styles['main-container__advert-box']}> </div>
      </div>
    </div>
  );
};

export default Article;
