import { movie, MOVIES } from "../../utils/data/movies";
import CategoryText from "./CategoryText";
import classes from "./movie.module.scss";
import star from "../../assets/star.png";
const Movie: React.FC<{ movie: movie }> = ({ movie }) => {
  const privateRyan = require("../../assets/movies/saving-private-ryan.png");
  return (
    <div className={classes["container"]}>
      <img
        src={privateRyan}
        alt="movie image"
        className={classes["container__main-img"]}
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
          <img src={star} width={40} height={40} /> 9.2
        </span>
      </div>
    </div>
  );
};

export default Movie;
