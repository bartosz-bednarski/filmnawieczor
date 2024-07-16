import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import * as classes from "./singleNews.module.scss";
const SingleNews: React.FC<{ title: string; image: string; url: string }> = ({
  title,
  image,
  url,
}) => {
  const navigate = useNavigate();
  const newsCoverImage = require(`../../../assets/news/${image}`).default;
  return (
    <div
      className={classes["single-news-box"]}
      role="link"
      onClick={() => navigate(url)}
    >
      {/* <img
        className={classes["single-news-box__image"]}
        src={newsCoverImage}
        alt="news cover"
        width={175}
        height={300}
      /> */}
      <img
        className={classes["single-news-box__image-1100"]}
        src={newsCoverImage}
        alt="news cover"
        width={200}
        height={300}
      />
      <div className={classes["single-news-box__text-box"]}>
        <h2>{title}</h2>
        <span className={classes["single-news-box__text-box__description"]}>
          {/* {description} */}
        </span>
      </div>
    </div>
  );
};
export default SingleNews;
