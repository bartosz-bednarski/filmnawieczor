import React from 'react';
import parse from '@/node_modules/html-react-parser';
import styles from '../newsArticleSection.module.scss';
import {ArticleDetails} from '../../../../types/api/news';
import Link from '@/node_modules/next/link';

export interface SectionPropsType {
  article_title: string;
  article_image: string;
  article_content: string;
  article_id: number;
  article_url: string;
}

const Section = ({article_title,article_image,article_content,article_id,article_url}:SectionPropsType) => {
  const image = require(
    `../../../../public/assets/movies/details/${article_image.replace(
      '.webp',
      '-details.webp'
    )}`
  ).default;
  return (
    <div className={styles['article-list-item-box']}>
      <Link
        className={styles['article-list-item-box__header-box']}
        role="link"
        href={article_url}
      >
        <div
          className={styles['article-list-item-box__header-box__header-column']}
        >
          <h2
            className={
              styles['article-list-item-box__header-box__header-column__header']
            }
          >
            {article_title}
          </h2>
          <h2
            className={
              styles[
                'article-list-item-box__header-box__header-column__redirect-info'
              ]
            }
          >
            Przejdź do bazy filmów
          </h2>
        </div>
        <img
          src={image.src}
          width={700}
          height={320}
          alt={`${article_title} cover`}
          className={styles['article-list-item-box__header-box__image']}
          title={`${article_title}`}
          loading="eager"
        />
      </Link>

      <div className={styles['article-list-item-box__content-box']}>
        <div className={styles['article-list-item-box__content-box__text']}>
          {parse(article_content)}
        </div>
      </div>
    </div>
  );
};
export default Section;
