import { useAppSelector } from "../../redux/hooks";
import { MOVIES } from "../../utils/data/movies";
import MovieFilter from "../filters/MovieFilter";
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
  const filtersObject = activeFiltersArray.reduce((acc, obj) => {
    Object.keys(obj).forEach((key) => {
      if (acc[key]) {
        acc[key] += `, ${obj[key]}`;
      } else {
        acc[key] = obj[key];
      }
    });
    return acc;
  }, {});
  const filterKeys = Object.keys(filtersObject);
  const filterValues = Object.fromEntries(
    filterKeys.map((key) => [
      key,
      filtersObject[key].split(", ").map((val) => val.trim()),
    ])
  );
  console.log("toto", filterValues);
  const filteredMovies = MOVIES.filter((item) => {
    return filterKeys.every((key) => {
      if (Array.isArray(item[key])) {
        return item[key].some((value) => filterValues[key].includes(value));
      } else {
        return filterValues[key].includes(item[key]);
      }
    });
  });
  // const filteredMovies = MOVIES.filter(function (item) {
  //   for (let key in filtersObject) {
  //     if (item[key] === undefined || item[key] !== filtersObject[key])
  //       return false;
  //   }
  //   return true;
  // });
  // const filteredMovies =
  //   activeSecondaryFiltersStore[0].active_filters.length === 0
  //     ? MOVIES
  //     : MOVIES.filter(
  //         (item) =>
  //           item.gatunek ===
  //           activeSecondaryFiltersStore[0].active_filters[0].name
  //       );
  console.log("active", filteredMovies);
  return (
    <div className={classes.container}>
      {/* <Filters /> */}
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
