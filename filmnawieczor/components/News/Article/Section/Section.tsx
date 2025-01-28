import React from 'react';
import parse from '@/node_modules/html-react-parser';
import styles from '../newsArticleSection.module.scss';
import {ArticleDetails} from '../../../../types/api/news';
import Link from '@/node_modules/next/link';
const Section: React.FC<{section: ArticleDetails}> = ({section}) => {
  const image = require(
    `../../../../public/assets/movies/details/${section.article_image.replace(
      '.webp',
      '-details.webp'
    )}`
  ).default;
  return (
    <div className={styles['article-list-item-box']}>
      <Link
        className={styles['article-list-item-box__header-box']}
        role="link"
        href={section.article_url}
      >
        <div
          className={styles['article-list-item-box__header-box__header-column']}
        >
          <h2
            className={
              styles['article-list-item-box__header-box__header-column__header']
            }
          >
            {section.article_title}
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
          alt={`${section.article_title} cover`}
          className={styles['article-list-item-box__header-box__image']}
          title={`${section.article_title}`}
          loading="eager"
        />
      </Link>

      <div className={styles['article-list-item-box__content-box']}>
        <div className={styles['article-list-item-box__content-box__text']}>
          {parse(section.article_content)}
        </div>
      </div>
    </div>
  );
};
export default Section;
