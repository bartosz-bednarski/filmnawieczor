import { MovieType, MOVIES } from "../../utils/data/movies";
import CategoryText from "./CategoryText";
import classes from "./movie.module.scss";
import star from "../../assets/star.png";
import { getMovies } from "../../api/movies";
const Movie: React.FC<{ movie: MovieType }> = ({ movie }) => {
  const movieCoverImage = require(`../../assets/movies/${movie.image_cover}`);
  // const privateRyan = require("../../assets/movies/saving-private-ryan.png");
  let check = [];
  const setCheck = async () => {
    check = await getMovies();
  };

  return (
    <div className={classes["container"]}>
      <img
        src={movieCoverImage}
        alt="movie image"
        className={classes["container__main-img"]}
        onClick={() => {
          setCheck();
          console.log(check);
        }}
      />
      <div className={classes["container__content-box"]}>
        <h2>{movie.name}</h2>
        <CategoryText
          title={movie.description.opis.title}
          text={movie.description.opis.value}
        />
        <CategoryText
          title={movie.description.miejsce_akcji.title}
          text={movie.description.miejsce_akcji.value}
        />
        <CategoryText
          title={movie.description.czas_akcji.title}
          text={movie.description.czas_akcji.value}
        />
        <CategoryText
          title={movie.description.gatunek.title}
          text={movie.description.gatunek.value}
        />
        <CategoryText
          title={movie.description.rok_produkcji.title}
          text={movie.description.rok_produkcji.value}
        />
        <CategoryText
          title={movie.description.dlugosc_filmu.title}
          text={movie.description.dlugosc_filmu.value}
        />
      </div>
      <div className={classes["container__rating-box"]}>
        <span className={classes["container__rating-box__rate"]}>
          <img src={star} width={40} height={40} />{" "}
          {movie.description.ocena.toFixed(1)}
        </span>
      </div>
    </div>
  );
};

export default Movie;
