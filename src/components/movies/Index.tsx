import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getFilteredMovies } from "../../api/movies";
import { useAppSelector } from "../../redux/hooks";
import { MOVIES, MoviesFromLoader } from "../../utils/data/movies";
import MovieFilter from "../filters/movie/MovieFilter";
// import Filters from "../globals/Filters";
import Movie from "./Movie";
import classes from "./movies.module.scss";
const Movies = () => {
  const loaderData: any = useLoaderData();
  // const moviesFromLoader: MoviesFromLoader = loaderData.map((item) => {
  //   return {
  //     action_place: item.action_place,
  //     action_time:
  //       item.action_time_end === item.action_time_start
  //         ? item.action_time_end
  //         : `${item.action_time_start}-${item.action_time_end}`,
  //     category: item.category,
  //     description: item.description,
  //     id: item.id,
  //     image_cover: item.image_cover,
  //     movie_length: item.movie_length,
  //     name: item.name,
  //     production_year: item.production_year,
  //     rating: item.rating,
  //   };
  // });
  const [moviesToDisplay, setMoviesToDisplay] = useState(loaderData);
  // console.log("moviesfromloader", moviesFromLoader);
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
  // const parseRange = (range) => {
  //   const [start, end] = range.split("-").map(Number);
  //   return { start, end: end || start };
  // };

  // const isYearInRange = (year, range) => {
  //   return year >= range.start && year <= range.end;
  // };

  // const isRangeOverlapWithYears = (years, range) => {
  //   return years.some((year) => isYearInRange(Number(year), range));
  // };

  // const getFilterValues = (filters) => {
  //   const filterValues = {};
  //   activeFiltersArray.forEach((filter) => {
  //     const key = Object.keys(filter)[0];
  //     const value = filter[key];
  //     if (key === "czas_akcji") {
  //       filterValues[key] = parseRange(value);
  //     } else if (key === "rok_produkcji") {
  //       filterValues[key] = parseRange(value);
  //     } else {
  //       filterValues[key] = value.split(", ").map((val) => val.trim());
  //     }
  //   });
  //   return filterValues;
  // };

  // const applyFilters = (movies, filters) => {
  //   const filterValues = getFilterValues(activeFiltersArray);

  //   return movies.filter((movie) => {
  //     return Object.keys(filterValues).every((key) => {
  //       if (key === "czas_akcji") {
  //         return isRangeOverlapWithYears(movie[key], filterValues[key]);
  //       } else if (key === "rok_produkcji") {
  //         return isRangeOverlapWithYears(movie[key], filterValues[key]);
  //       } else if (Array.isArray(movie[key])) {
  //         return movie[key].some((value) => filterValues[key].includes(value));
  //       } else {
  //         return filterValues[key].includes(movie[key]);
  //       }
  //     });
  //   });
  // };

  // const filteredMovies = applyFilters(MOVIES, activeFiltersArray);
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
