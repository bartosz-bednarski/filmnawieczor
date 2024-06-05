import { SingleMovieType } from "../../utils/data/movies";
import CategoryText from "./CategoryText";
import classes from "./movie.module.scss";
import star from "../../assets/star.png";
const Movie: React.FC<{ movie: SingleMovieType }> = ({ movie }) => {
  const movieCoverImage = require(`../../assets/movies/${movie.image_cover}`);
  // const privateRyan = require("../../assets/movies/saving-private-ryan.png");

  return (
    <div className={classes["container"]}>
      <img
        src={movieCoverImage}
        alt="movie image"
        className={classes["container__main-img"]}
      />
      <div className={classes["container__content-box"]}>
        <h2>{movie.name}</h2>
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
      <div className={classes["container__rating-box"]}>
        <span className={classes["container__rating-box__rate"]}>
          <img src={star} width={40} height={40} /> {movie.rating}
        </span>
      </div>
    </div>
  );
};

export default Movie;
