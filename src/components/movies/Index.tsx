import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getFilteredMovies } from "../../api/movies";
import { useAppSelector } from "../../redux/hooks";
import Filters from "../filters/movie/Index";
import Movie from "./Movie";
import classes from "./movies.module.scss";
const Movies = () => {
  const loaderData: any = useLoaderData();

  const [moviesToDisplay, setMoviesToDisplay] = useState(loaderData);
  const activeFiltersStore = useAppSelector(
    (state) => state.moviesFilters.activeFilters
  );

  const setFilteredMoviesHandler = async () => {
    const params = activeFiltersStore.map((item) => {
      return { queryName: item.queryName, queryValue: item.queryValue };
    });
    const filteredMovies = await getFilteredMovies(params);
    setMoviesToDisplay(filteredMovies);
  };

  useEffect(() => {
    if (activeFiltersStore.length > 0) {
      setFilteredMoviesHandler();
    } else {
      setMoviesToDisplay(loaderData);
    }
  }, [activeFiltersStore]);

  return (
    <div className={classes.container}>
      <Filters />
      <div className={classes["main-container"]}>
        <div className={classes["main-container__advert-box"]}> </div>
        <div className={classes["main-container__movies-container"]}>
          {moviesToDisplay.dataExists &&
            moviesToDisplay.moviesData.map((data) => {
              return <Movie movie={data} />;
            })}
        </div>
        <div className={classes["main-container__advert-box"]}> </div>
      </div>
    </div>
  );
};
export default Movies;
