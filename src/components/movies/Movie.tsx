import React from "react";
import { SingleMovieType } from "../../utils/data/movies";
import CategoryText from "./CategoryText";
import * as classes from "./movie.module.scss";
import star from "../../assets/star.png";
import useWindowDimensions from "../globals/scripts/windowDimensions";
import { useNavigate } from "react-router-dom";
const Movie: React.FC<{ movie: SingleMovieType }> = ({ movie }) => {
  const navigate = useNavigate();
  const { width } = useWindowDimensions();
  const movieCoverImage =
    require(`../../assets/movies/${movie.image_cover}`).default;

  return (
    <>
      {width > 850 && (
        <div
          className={classes["container"]}
          id={`${movie.id}`}
          onClick={() =>
            navigate(
              `/filmy/${movie.name.replace(/\s/g, "").toLowerCase()}-${
                movie.id
              }`
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
              <div
                className={
                  classes["container__content-box__header-box__rating-box"]
                }
              >
                <span
                  className={
                    classes[
                      "container__content-box__header-box__rating-box__rate"
                    ]
                  }
                >
                  <img
                    src={star}
                    width={40}
                    height={40}
                    alt="star"
                    title="star"
                    loading="eager"
                  />{" "}
                  {movie.rating}
                </span>
              </div>
            </div>

            <CategoryText title="Opis:" text={movie.description} />
            <div className={classes["container__content-box__content-details"]}>
              <CategoryText title="Miejsce akcji:" text={movie.action_place} />
              <CategoryText
                title="Czas akcji:"
                text={String(movie.action_time)}
              />
              <CategoryText title="Gatunek:" text={movie.category} />
              <CategoryText
                title="Rok produkcji:"
                text={String(movie.production_year)}
              />
              <CategoryText
                title="Długość filmu:"
                text={String(movie.movie_length)}
              />
            </div>
          </div>
        </div>
      )}
      {width <= 850 && (
        <div className={classes["container-mobile"]} id={`${movie.id}`}>
          <div className={classes["container-mobile__top-box"]}>
            <img
              src={movieCoverImage}
              alt={`${movie.name} cover`}
              className={classes["container-mobile__top-box__main-img"]}
              width="auto"
              height={175}
              title={movie.name}
              loading="eager"
            />
            <div className={classes["container-mobile__top-box__header-box"]}>
              <h3>{movie.name}</h3>
              <div
                className={
                  classes["container-mobile__top-box__header-box__rating-box"]
                }
              >
                <span
                  className={
                    classes[
                      "container-mobile__top-box__header-box__rating-box__rate"
                    ]
                  }
                >
                  <img
                    src={star}
                    width={40}
                    height={40}
                    alt="star"
                    title="star"
                    loading="eager"
                  />{" "}
                  {movie.rating}
                </span>
              </div>
            </div>
          </div>
          <div className={classes["container-mobile__bottom-box"]}>
            <CategoryText title="Opis:" text={movie.description} />
            <CategoryText title="Miejsce akcji:" text={movie.action_place} />
            <CategoryText
              title="Czas akcji:"
              text={String(movie.action_time)}
            />
            <CategoryText title="Gatunek:" text={movie.category} />
            <CategoryText
              title="Rok produkcji:"
              text={String(movie.production_year)}
            />
            <CategoryText
              title="Długość filmu:"
              text={String(movie.movie_length)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Movie;
