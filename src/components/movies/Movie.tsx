import { SingleMovieType } from "../../utils/data/movies";
import CategoryText from "./CategoryText";
import classes from "./movie.module.scss";
import star from "../../assets/star.png";
const Movie: React.FC<{ movie: SingleMovieType }> = ({ movie }) => {
  const movieCoverImage = require(`../../assets/movies/${movie.image_cover}`);
  // const privateRyan = require("../../assets/movies/saving-private-ryan.png");

  return (
    <>
      <div className={classes["container"]}>
        <img
          src={movieCoverImage}
          alt="movie image"
          className={classes["container__main-img"]}
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
                <img src={star} width={40} height={40} /> {movie.rating}
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
      <div className={classes["container-mobile"]}>
        <div className={classes["container-mobile__top-box"]}>
          <img
            src={movieCoverImage}
            alt="movie image"
            className={classes["container-mobile__top-box__main-img"]}
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
                <img src={star} width={40} height={40} /> {movie.rating}
              </span>
            </div>
          </div>
        </div>
        <div className={classes["container-mobile__bottom-box"]}>
          <CategoryText title="Opis:" text={movie.description} />
          <CategoryText title="Miejsce akcji:" text={movie.action_place} />
          <CategoryText title="Czas akcji:" text={String(movie.action_time)} />
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
    </>
  );
};

export default Movie;
