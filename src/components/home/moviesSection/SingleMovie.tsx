import React from "react";
import { useNavigate } from "react-router-dom";
import * as classes from "./moviesSection.module.scss";
const SingleMovie: React.FC<{
  title: string;
  image: string;
  id: number;
}> = ({ title, image, id }) => {
  const navigate = useNavigate();
  const newsCoverImage = require(`../../../assets/movies/${image}`).default;
  const link = `/filmy/${title.replace(/\s/g, "").toLowerCase()}-${id}`;

  return (
    <div
      className={
        classes[
          "home-container__movies-section-container__movies-box__single-movie-box"
        ]
      }
      onClick={() => navigate(link)}
    >
      <img
        src={newsCoverImage}
        alt="movie cover"
        width={175}
        height={255}
        className={
          classes[
            "home-container__movies-section-container__movies-box__single-movie-box__image"
          ]
        }
        title={title}
        loading="lazy"
      />
      <span
        className={
          classes[
            "home-container__movies-section-container__movies-box__single-movie-box__title"
          ]
        }
      >
        {title}
      </span>
    </div>
  );
};
export default SingleMovie;
