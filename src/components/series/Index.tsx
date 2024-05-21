import { useAppSelector } from "../../redux/hooks";
import { SERIES } from "../../utils/data/series";
import SeriesFilter from "../filters/series/SeriesFilter";
// import Filters from "../globals/Filters";
import Serie from "./Serie";
import classes from "./series.module.scss";
const Series = () => {
  const activeSecondaryFiltersStore = useAppSelector(
    (state) => state.seriesFilter.secondaryFilters
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

  const applyFilters = (series, filters) => {
    const filterValues = getFilterValues(activeFiltersArray);

    return series.filter((serie) => {
      return Object.keys(filterValues).every((key) => {
        if (key === "czas_akcji") {
          return isRangeOverlapWithYears(serie[key], filterValues[key]);
        } else if (key === "rok_produkcji") {
          return isRangeOverlapWithYears(serie[key], filterValues[key]);
        } else if (Array.isArray(serie[key])) {
          return serie[key].some((value) => filterValues[key].includes(value));
        } else {
          return filterValues[key].includes(serie[key]);
        }
      });
    });
  };

  const filteredSeries = applyFilters(SERIES, activeFiltersArray);
  console.log("active", activeFiltersArray);
  return (
    <div className={classes.container}>
      <SeriesFilter />
      <div className={classes["main-container"]}>
        <div className={classes["main-container__advert-box"]}> </div>
        <div className={classes["main-container__movies-container"]}>
          {filteredSeries.map((data) => {
            return <Serie serie={data} />;
          })}
        </div>
        <div className={classes["main-container__advert-box"]}> </div>
      </div>
    </div>
  );
};
export default Series;
