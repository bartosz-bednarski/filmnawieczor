import React from "react";
import { NavLink } from "react-router-dom";
import * as classes from "./newsSection.module.scss";
const SingleNews: React.FC<{ title: string; image: string; url: string }> = ({
  title,
  image,
  url,
}) => {
  const newsCoverImage = require(`../../../assets/news/${image}`).default;
  return (
    <NavLink to={url}>
      <div
        className={
          classes[
            "home-container__news-section-container__news-box__single-news-box"
          ]
        }
      >
        <img
          src={newsCoverImage}
          alt="article cover"
          width={416}
          height={234}
          title={title}
          loading="eager"
        />
        <span
          className={
            classes[
              "home-container__news-section-container__news-box__single-news-box__title"
            ]
          }
        >
          {title}
        </span>
      </div>
    </NavLink>
  );
};
export default SingleNews;
