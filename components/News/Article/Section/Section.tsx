import React from 'react';
import parse from '@/node_modules/html-react-parser';
import styles from './section.module.scss';
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
    <div className={styles.container}>
      <Link
        className={styles.linkBox}
        role="link"
        href={article_url}
      >
        <div
          className={styles.headerColumn}
        >
          <h2
            className={
              styles.header
            }
          >
            {article_title}
          </h2>
          <h2
            className={
              styles.linkInfo
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
          className={styles.image}
          title={`${article_title}`}
          loading="eager"
        />
      </Link>

      <div className={styles.contentBox}>
        <div className={styles.text}>
          {parse(article_content)}
        </div>
      </div>
    </div>
  );
};

export default Section;
