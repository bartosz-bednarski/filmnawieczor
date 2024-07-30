import React from "react";
import * as classes from "./movieCoverBox.module.scss";
import * as universesStyles from "./universes.module.scss";
import { useNavigate } from "react-router-dom";
import { MovieCover } from "api/movies";
import CategoryText from "./CategoryText";
const MovieCoverBox: React.FC<{ movie: MovieCover }> = ({ movie }) => {
  const navigate = useNavigate();
  const movieCoverImage =
    require(`../../../assets/movies/details/${movie.image_cover.replace(
      ".webp",
      "-details.webp"
    )}`).default;
  return (
    <div
      className={`${classes["container"]} ${
        universesStyles[`${movie.universe.toLowerCase()}-container`]
      }`}
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
        width={155}
        height="auto"
        title={movie.name}
        loading="eager"
      />
      <div className={classes["container__content-box"]}>
        <div
          className={`${classes["container__content-box__header-box"]} ${
            universesStyles[
              `${movie.universe.toLowerCase()}-container__content-box__header-box`
            ]
          }`}
        >
          <h3>{movie.name}</h3>
          <div className={classes["container__content-box__header-box__right"]}>
            <span
              className={`${
                classes["container__content-box__header-box__right__rating"]
              } ${
                universesStyles[
                  `${movie.universe.toLowerCase()}-container__content-box__header-box__right__rating`
                ]
              }`}
            >
              <span
                className={`${
                  classes[
                    "container__content-box__header-box__right__rating__star"
                  ]
                } ${
                  universesStyles[
                    `${movie.universe.toLowerCase()}-container__content-box__header-box__right__rating__star`
                  ]
                }`}
              ></span>{" "}
              {movie.rating}
            </span>
            {movie.universe !== "None" && (
              <img
                src={
                  require(`../../../assets/universes/${movie.universe}.webp`)
                    .default
                }
                alt={`${movie.universe} cover`}
                className={
                  classes["container__content-box__header-box__right__universe"]
                }
                width={155}
                height={45}
                title={movie.universe}
                loading="eager"
              />
            )}
          </div>
        </div>
        <span
          className={`${classes["container__content-box__description"]} ${
            universesStyles[
              `${movie.universe.toLowerCase()}-container__content-box__description`
            ]
          }`}
        >
          {movie.description}
        </span>
      </div>
      <div className={classes["container__content-box-hover"]}>
        <div
          className={`${classes["container__content-box-hover__header-box"]} ${
            universesStyles[
              `${movie.universe.toLowerCase()}-container__content-box-hover__header-box`
            ]
          }`}
        >
          <h3>{movie.name}</h3>
          <span
            className={`${
              classes["container__content-box-hover__header-box__rating"]
            } ${
              universesStyles[
                `${movie.universe.toLowerCase()}-container__content-box-hover__header-box__rating`
              ]
            }`}
          >
            <span
              className={`${
                classes[
                  "container__content-box-hover__header-box__rating__star"
                ]
              } ${
                universesStyles[
                  `${movie.universe.toLowerCase()}-container__content-box-hover__header-box__rating__star`
                ]
              }`}
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
            type="listItem"
            universe={movie.universe.toLowerCase()}
          />
          <CategoryText
            title="Czas akcji"
            text={String(movie.action_time)}
            type="static"
            universe={movie.universe.toLowerCase()}
          />
          <CategoryText
            title="Gatunek:"
            text={movie.category}
            type="listItem"
            universe={movie.universe.toLowerCase()}
          />
          <CategoryText
            title="Rok produkcji"
            text={String(movie.production_year)}
            type="static"
            universe={movie.universe.toLowerCase()}
          />
          <CategoryText
            title="Długość filmu"
            text={String(movie.movie_length)}
            type="static"
            universe={movie.universe.toLowerCase()}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieCoverBox;
