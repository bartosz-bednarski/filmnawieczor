import { useAppSelector } from "../../redux/hooks";
import { MOVIES } from "../../utils/data/movies";
import MovieFilter from "../filters/movie/MovieFilter";
// import Filters from "../globals/Filters";
import Movie from "./Movie";
import classes from "./movies.module.scss";
const Movies = () => {
  const activeSecondaryFiltersStore = useAppSelector(
    (state) => state.moviesFilter.secondaryFilters
  );
  const activeFiltersArray = activeSecondaryFiltersStore.map(
    (item) => item.data
  );
  const parseRange = (range) => {
    const [start, end] = range.split("-").map(Number);
    return { start, end: end || start };
  };

  const isYearInRange = (year, range) => {
    return year >= range.start && year <= range.end;
  };

  const isRangeOverlapWithYears = (years, range) => {
    return years.some((year) => isYearInRange(Number(year), range));
  };

  const getFilterValues = (filters) => {
    const filterValues = {};
    activeFiltersArray.forEach((filter) => {
      const key = Object.keys(filter)[0];
      const value = filter[key];
      if (key === "czas_akcji") {
        filterValues[key] = parseRange(value);
      } else if (key === "rok_produkcji") {
        filterValues[key] = parseRange(value);
      } else {
        filterValues[key] = value.split(", ").map((val) => val.trim());
      }
    });
    return filterValues;
  };

  const applyFilters = (movies, filters) => {
    const filterValues = getFilterValues(activeFiltersArray);

    return movies.filter((movie) => {
      return Object.keys(filterValues).every((key) => {
        if (key === "czas_akcji") {
          return isRangeOverlapWithYears(movie[key], filterValues[key]);
        } else if (key === "rok_produkcji") {
          return isRangeOverlapWithYears(movie[key], filterValues[key]);
        } else if (Array.isArray(movie[key])) {
          return movie[key].some((value) => filterValues[key].includes(value));
        } else {
          return filterValues[key].includes(movie[key]);
        }
      });
    });
  };

  const filteredMovies = applyFilters(MOVIES, activeFiltersArray);
  console.log("active", activeFiltersArray);
  return (
    <div className={classes.container}>
      <MovieFilter />
      <div className={classes["main-container"]}>
        <div className={classes["main-container__advert-box"]}> </div>
        <div className={classes["main-container__movies-container"]}>
          {filteredMovies.map((data) => {
            return <Movie movie={data} />;
          })}
        </div>
        <div className={classes["main-container__advert-box"]}> </div>
      </div>
    </div>
  );
};
export default Movies;
