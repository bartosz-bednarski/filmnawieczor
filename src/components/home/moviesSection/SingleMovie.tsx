import React from "react";
import { useNavigate } from "react-router-dom";
import * as classes from "./singleMovie.module.scss";
const SingleMovie: React.FC<{
  title: string;
  image: string;
  id: number;
  description: string;
}> = ({ title, image, id, description }) => {
  const navigate = useNavigate();
  const link = `/filmy/${title.replace(/\s/g, "").toLowerCase()}-${id}`;
  const movieCoverImage1100 =
    require(`../../../assets/movies/details/${image.replace(
      ".webp",
      "-details.webp"
    )}`).default;
  const newsCoverImage = require(`../../../assets/movies/${image}`).default;
  return (
    <div
      className={classes["single-movie-box"]}
      role="link"
      onClick={() => navigate(link)}
    >
      <img
        className={classes["single-movie-box__image"]}
        src={newsCoverImage}
        alt="movie cover"
        width={175}
        height={300}
      />
      <img
        className={classes["single-movie-box__image-1100"]}
        src={movieCoverImage1100}
        alt="movie cover"
        width={200}
        height={300}
      />
      <div className={classes["single-movie-box__text-box"]}>
        <h2>{title}</h2>
        <span className={classes["single-movie-box__text-box__description"]}>
          {description}
        </span>
      </div>
    </div>
  );
};
export default SingleMovie;
