import H2Banner from "../../ui/H2Banner";
import classes from "./moviesSection.module.scss";
import SingleMovie from "./SingleMovie";
import { useState, useEffect } from "react";
import { getLatestMovies } from "../../../api/homePage";
const MoviesSection = () => {
  const [latestMovies, setLatestMovies] = useState([]);
  const getLatestMoviesHandler = async () => {
    const latestMoviesFetched = await getLatestMovies();
    setLatestMovies(latestMoviesFetched);
  };
  useEffect(() => {
    getLatestMoviesHandler();
  }, []);
  return (
    <div className={classes["home-container__movies-section-container"]}>
      <H2Banner title="Nowe filmy w bazie danych" />
      <div
        className={
          classes["home-container__movies-section-container__movies-box"]
        }
      >
        {latestMovies.map((movie) => (
          <SingleMovie title={movie.name} image={movie.image_cover} />
        ))}
      </div>
    </div>
  );
};
export default MoviesSection;
