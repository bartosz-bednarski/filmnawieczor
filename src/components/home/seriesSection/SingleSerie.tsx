import React from "react";
import * as classes from "./seriesSection.module.scss";
const SingleSerie: React.FC<{ title: string; image: string }> = ({
  title,
  image,
}) => {
  const newsCoverImage = require(`../../../assets/series/${image}`).default;
  return (
    <div
      className={
        classes[
          "home-container__series-section-container__series-box__single-serie-box"
        ]
      }
    >
      <img
        src={newsCoverImage}
        alt="serie cover"
        width={175}
        height={255}
        className={
          classes[
            "home-container__series-section-container__series-box__single-serie-box__image"
          ]
        }
        title={title}
        loading="lazy"
      />
      <span
        className={
          classes[
            "home-container__series-section-container__series-box__single-serie-box__title"
          ]
        }
      >
        {title}
      </span>
    </div>
  );
};
export default SingleSerie;
