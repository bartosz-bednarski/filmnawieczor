import React from "react";
import * as classes from "./newsBox.module.scss";
import parse from "html-react-parser";
const NewsBox: React.FC<{
  coverTitle: string;
  coverImage: string;
  coverContent: string;
  onClick: () => void;
}> = ({ coverTitle, coverImage, coverContent, onClick }) => {
  const newsCoverImage = require(`../../../assets/news/${coverImage}`).default;
  return (
    <div className={classes["newsBox-container"]} onClick={onClick}>
      <div className={classes["newsBox-container__header"]}>
        <h4>{coverTitle}</h4>
      </div>

      <img
        src={newsCoverImage}
        width={325}
        height="auto"
        className={classes["newsBox-container__image"]}
        alt={`${coverTitle} cover`}
        title={coverTitle}
        loading="eager"
      />

      <div className={classes["newsBox-container__content"]}>
        {parse(coverContent)}
      </div>
    </div>
  );
};
export default NewsBox;
