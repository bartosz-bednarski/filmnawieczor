import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getFilteredMovies } from "../../api/movies";
import { useAppSelector } from "../../redux/hooks";
import MovieFilter from "../filters/movie/MovieFilter";
// import Filters from "../globals/Filters";
import Movie from "./Movie";
import classes from "./movies.module.scss";
const Movies = () => {
  const loaderData: any = useLoaderData();

  const [moviesToDisplay, setMoviesToDisplay] = useState(loaderData);
  const activeSecondaryFiltersStore = useAppSelector(
    (state) => state.moviesFilter.secondaryFilters
  );

  const activeFiltersArray = activeSecondaryFiltersStore.map(
    (item) => item.data
  );
  const setFilteredMoviesHandler = async () => {
    const params = activeSecondaryFiltersStore.map((item) => {
      return { queryName: item.queryName, queryValue: item.displayName };
    });
    const filteredMovies = await getFilteredMovies(params);
    console.log("filteredMovies", filteredMovies);
    setMoviesToDisplay(filteredMovies);
  };

  useEffect(() => {
    if (activeSecondaryFiltersStore.length > 0) {
      setFilteredMoviesHandler();
    } else {
      setMoviesToDisplay(loaderData);
    }
    console.log("activeSecondaryFilters", activeSecondaryFiltersStore);
  }, [activeSecondaryFiltersStore]);

  console.log("active", activeFiltersArray);
  return (
    <div className={classes.container}>
      <MovieFilter />
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
