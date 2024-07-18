import React from "react";
import parse from "html-react-parser";
import * as classes from "./newsArticleSection.module.scss";
import { ArticleDetails } from "api/news";
import { useNavigate } from "react-router-dom";
const NewsArticleSection: React.FC<{ section: ArticleDetails }> = ({
  section,
}) => {
  const navigate = useNavigate();
  const image =
    require(`../../../assets/movies/details/${section.article_image.replace(
      ".webp",
      "-details.webp"
    )}`).default;
  return (
    <div className={classes["article-list-item-box"]}>
      <div
        className={classes["article-list-item-box__header-box"]}
        role="link"
        onClick={() => navigate(section.article_url)}
      >
        <div
          className={
            classes["article-list-item-box__header-box__header-column"]
          }
        >
          <h2
            className={
              classes[
                "article-list-item-box__header-box__header-column__header"
              ]
            }
          >
            {section.article_title}
          </h2>
          <h2
            className={
              classes[
                "article-list-item-box__header-box__header-column__redirect-info"
              ]
            }
          >
            Przejdź do bazy filmów
          </h2>
        </div>
        <img
          src={image}
          width={700}
          height={320}
          alt={`${section.article_title} cover`}
          className={classes["article-list-item-box__header-box__image"]}
          title={`${section.article_title}`}
          loading="eager"
        />
      </div>

      <div className={classes["article-list-item-box__content-box"]}>
        <div className={classes["article-list-item-box__content-box__text"]}>
          {parse(section.article_content)}
        </div>
      </div>
    </div>
  );
};
export default NewsArticleSection;
