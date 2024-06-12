import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getFilteredMovies } from "../../api/movies";
import { useAppSelector } from "../../redux/hooks";
import Filters from "../filters/series/Index";

import classes from "./movies.module.scss";
import classesGlobal from "../ui/mainContainerWithAdverts.module.scss";
import Serie from "./Serie";
import {
  getLast10SeriesResponseType,
  getLast10SeriesSeriesDataObjectType,
  getLast10SeriesType,
} from "api/series";
import { getFilteredSeries } from "../../api/series";
const Series = () => {
  const loaderData: any = useLoaderData();

  const [seriesToDisplay, setSeriesToDisplay] =
    useState<getLast10SeriesResponseType>(loaderData);
  const activeFiltersStore = useAppSelector(
    (state) => state.moviesFilters.activeFilters
  );

  const setFilteredSeriesHandler = async () => {
    const params = activeFiltersStore.map((item) => {
      return { queryName: item.queryName, queryValue: item.queryValue };
    });
    const filteredSeries = await getFilteredSeries(params);
    // setSeriesToDisplay(filteredSeries);
  };

  useEffect(() => {
    if (activeFiltersStore.length > 0) {
      setFilteredSeriesHandler();
    } else {
      setSeriesToDisplay(loaderData);
    }
  }, [activeFiltersStore]);

  return (
    <div className={classes.container}>
      <Filters />
      <div className={classesGlobal["main-container"]}>
        <div className={classesGlobal["main-container__advert-box"]}> </div>
        <div className={classes["series-container"]}>
          {seriesToDisplay.dataExists &&
            seriesToDisplay.seriesData.map(
              (serie: getLast10SeriesSeriesDataObjectType) => {
                return <Serie serie={serie} />;
              }
            )}
        </div>
        <div className={classesGlobal["main-container__advert-box"]}> </div>
      </div>
    </div>
  );
};
export default Series;
