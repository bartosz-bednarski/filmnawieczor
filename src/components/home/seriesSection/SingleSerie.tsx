import React from "react";
import { useNavigate } from "react-router-dom";
import * as classes from "./singleSerie.module.scss";
const SingleSerie: React.FC<{
  title: string;
  image: string;
  description: string;
}> = ({ title, image, description }) => {
  const navigate = useNavigate();
  const serieCoverImage = require(`../../../assets/series/${image}`).default;
  const serieCoverImage1100 =
    require(`../../../assets/series/details/${image.replace(
      ".webp",
      "-details.webp"
    )}`).default;
  return (
    // <div
    //   className={
    //     classes[
    //       "home-container__series-section-container__series-box__single-serie-box"
    //     ]
    //   }
    // >
    //   <img
    //     src={newsCoverImage}
    //     alt="serie cover"
    //     width={175}
    //     height={255}
    //     className={
    //       classes[
    //         "home-container__series-section-container__series-box__single-serie-box__image"
    //       ]
    //     }
    //     title={title}
    //     loading="lazy"
    //   />
    //   <span
    //     className={
    //       classes[
    //         "home-container__series-section-container__series-box__single-serie-box__title"
    //       ]
    //     }
    //   >
    //     {title}
    //   </span>
    // </div>
    <div
      className={classes["single-serie-box"]}
      role="link"
      onClick={() => navigate("/seriale")}
    >
      <img
        className={classes["single-serie-box__image"]}
        src={serieCoverImage}
        alt="serie cover"
        width={175}
        height={300}
      />
      <img
        className={classes["single-serie-box__image-1100"]}
        src={serieCoverImage1100}
        alt="serie cover"
        width={200}
        height={300}
      />
      <div className={classes["single-serie-box__text-box"]}>
        <h2>{title}</h2>
        <span className={classes["single-serie-box__text-box__description"]}>
          {description}
        </span>
      </div>
    </div>
  );
};
export default SingleSerie;
