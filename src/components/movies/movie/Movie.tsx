import React from "react";
import * as classes from "./movie.module.scss";
import { useNavigate } from "react-router-dom";
import { MovieCover } from "api/movies";
import CategoryText from "./CategoryText";
const Movie: React.FC<{ movie: MovieCover }> = ({ movie }) => {
  const navigate = useNavigate();
  const movieCoverImage =
    require(`../../../assets/movies/details/${movie.image_cover.replace(
      ".webp",
      "-details.webp"
    )}`).default;

  return (
    <div
      className={classes["container"]}
      id={`${movie.id}`}
      role="link"
      onClick={() =>
        navigate(
          `/filmy/${movie.name.replace(/\s/g, "").toLowerCase()}-${movie.id}`
        )
      }
    >
      <img
        src={movieCoverImage}
        alt={`${movie.name} cover`}
        className={classes["container__main-img"]}
        width={175}
        height="auto"
        title={movie.name}
        loading="eager"
      />
      <div className={classes["container__content-box"]}>
        <div className={classes["container__content-box__header-box"]}>
          <h3>{movie.name}</h3>
          <span
            className={classes["container__content-box__header-box__rating"]}
          >
            {" "}
            <span
              className={
                classes["container__content-box__header-box__rating__star"]
              }
            ></span>{" "}
            {movie.rating}
          </span>
        </div>
        <span className={classes["container__content-box__description"]}>
          {movie.description}
        </span>
      </div>
      <div className={classes["container__content-box-hover"]}>
        <div className={classes["container__content-box-hover__header-box"]}>
          <h3>{movie.name}</h3>
          <span
            className={
              classes["container__content-box-hover__header-box__rating"]
            }
          >
            <span
              className={
                classes[
                  "container__content-box-hover__header-box__rating__star"
                ]
              }
            ></span>
            {movie.rating}
          </span>
        </div>

        <div
          className={classes["container__content-box-hover__content-details"]}
        >
          <CategoryText
            title="Miejsce akcji"
            text={movie.action_place}
            type="button"
          />
          <CategoryText
            title="Czas akcji"
            text={String(movie.action_time)}
            type="static"
          />
          <CategoryText title="Gatunek:" text={movie.category} type="button" />
          <CategoryText
            title="Rok produkcji"
            text={String(movie.production_year)}
            type="static"
          />
          <CategoryText
            title="Długość filmu"
            text={String(movie.movie_length)}
            type="static"
          />
        </div>
      </div>
    </div>
  );
};

export default Movie;
