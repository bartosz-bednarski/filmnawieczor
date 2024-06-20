import React from "react";
import { News_article_data } from "news";
import parse from "html-react-parser";
import * as classes from "./newsArticleSection.module.scss";
const NewsArticleSection: React.FC<{ section: News_article_data }> = ({
  section,
}) => {
  const image = require(`../../assets/movies/${section.article_image}`).default;
  return (
    <div className={classes["article-list-item-box"]}>
      <h2 className={classes["article-list-item-box__header"]}>
        {section.article_title}
      </h2>
      <div className={classes["article-list-item-box__content-box"]}>
        <img
          src={image}
          width={205}
          height={320}
          alt={`${section.article_title} cover`}
          className="article-list-item-box__content-box__image"
          title={`${section.article_title}`}
          loading="eager"
        />
        <div className={classes["article-list-item-box__content-box__text"]}>
          {parse(section.article_content)}
        </div>
      </div>
    </div>
  );
};
export default NewsArticleSection;
