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
  const filteredMovies =
    activeSecondaryFiltersStore[0].active_filters.length === 0
      ? MOVIES
      : MOVIES.filter(
          (item) =>
            item.gatunek ===
            activeSecondaryFiltersStore[0].active_filters[0].name
        );
  console.log("active", activeSecondaryFiltersStore);
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
