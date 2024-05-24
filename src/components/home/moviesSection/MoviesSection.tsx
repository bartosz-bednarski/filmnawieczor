import { MOVIES } from "../../../utils/data/movies";
import { NEWS_ARTICLES } from "../../../utils/data/newsArticles";
import MainHeader from "../../ui/MainHeader";
import classes from "./moviesSection.module.scss";
import SingleMovie from "./SingleMovie";
const MoviesSection = () => {
  const moviesToDisplay = MOVIES.slice(
    MOVIES.length - 8,
    MOVIES.length
  ).reverse();
  return (
    <div className={classes["home-container__movies-section-container"]}>
      <MainHeader title="Nowe filmy w bazie danych" />
      <div
        className={
          classes["home-container__movies-section-container__movies-box"]
        }
      >
        {moviesToDisplay.map((movie) => (
          <SingleMovie title={movie.name} image={movie.image_cover} />
        ))}
      </div>
    </div>
  );
};
export default MoviesSection;
