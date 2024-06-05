import { SERIES } from "../../../utils/data/series";
import H2Banner from "../../ui/H2Banner";
import classes from "./seriesSection.module.scss";
import SingleSerie from "./SingleSerie";
import { useState, useEffect } from "react";
import { getLatestMovies } from "../../../api/homePage";
const SeriesSection = () => {
  const [latestMovies, setLatestMovies] = useState([]);
  const getLatestMoviesHandler = async () => {
    const latestMoviesFetched = await getLatestMovies();
    setLatestMovies(latestMoviesFetched);
  };
  useEffect(() => {
    getLatestMoviesHandler();
  }, []);
  // const seriesToDisplay = SERIES.slice(
  //   SERIES.length - 8,
  //   SERIES.length
  // ).reverse();
  return (
    <div className={classes["home-container__series-section-container"]}>
      <H2Banner title="Nowe seriale w bazie danych" />
      <div
        className={
          classes["home-container__series-section-container__series-box"]
        }
      >
        {latestMovies.map((movie) => (
          <SingleSerie
            title={movie.name}
            image={movie.image_cover}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
};
export default SeriesSection;
