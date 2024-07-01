import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import Filters from "../filters/series/Index";
import * as classes from "./series.module.scss";
import * as classesGlobal from "../ui/mainContainerWithAdverts.module.scss";
import Serie from "./Serie/Serie";
import {
  getLast10FilteredSeries,
  getNext5FilteredSeries,
  getNext5Series,
} from "../../api/series";
import { GetLast10SeriesResponse, SeriesCover } from "api/series";
const Series: React.FC = () => {
  const navigate = useNavigate();
  const loaderData = useLoaderData() as GetLast10SeriesResponse;

  const [seriesToDisplay, setSeriesToDisplay] = useState<{
    dataExists: boolean;
    seriesData: [] | SeriesCover[];
  }>(loaderData);
  const activeFiltersStore = useAppSelector(
    (state) => state.seriesFilters.activeFilters
  );
  const [fetched, setFetched] = useState(false);
  const [filteredSeriesLoaderFetched, setFilteredSeriesLoaderFetched] =
    useState(false);

  const setFilteredSeriesHandler = async () => {
    const params = activeFiltersStore.map((item) => {
      return { queryName: item.queryName, queryValue: item.queryValue };
    });
    const filteredSeries = await getLast10FilteredSeries(params);
    if ("status" in filteredSeries) {
      navigate("/error", { state: { message: filteredSeries.message } });
    }
    if ("seriesData" in filteredSeries) {
      setSeriesToDisplay(filteredSeries);
    }
  };

  const setNext5SeriesHandler = async () => {
    const idIndex = seriesToDisplay.seriesData.length - 1;
    const id = seriesToDisplay.seriesData[idIndex].id;
    if (activeFiltersStore.length === 0) {
      const next5Series = await getNext5Series(id);
      if ("dataExists" in next5Series) {
        if (next5Series.dataExists) {
          const seriesToSet = [
            ...seriesToDisplay.seriesData,
            ...next5Series.seriesData,
          ];
          setSeriesToDisplay({ dataExists: true, seriesData: seriesToSet });
          setFetched(false);
        } else {
          setFetched(true);
        }
      }
    } else if (activeFiltersStore.length > 0) {
      const params = activeFiltersStore.map((item) => {
        return { queryName: item.queryName, queryValue: item.queryValue };
      });
      const next5FilteredSeries = await getNext5FilteredSeries({
        params: params,
        id: id,
      });
      if ("dataExists" in next5FilteredSeries) {
        if (next5FilteredSeries.dataExists) {
          const seriesToSet = [
            ...seriesToDisplay.seriesData,
            ...next5FilteredSeries.seriesData,
          ];
          setSeriesToDisplay({ dataExists: true, seriesData: seriesToSet });
          setFetched(false);
        } else {
          setFetched(true);
        }
      }
    }
  };

  useEffect(() => {
    setFilteredSeriesLoaderFetched(false);
    if (activeFiltersStore.length === 0) {
      setSeriesToDisplay(loaderData);
      setFetched(false);
    }
  }, [activeFiltersStore]);

  useEffect(() => {
    if (activeFiltersStore.length === 0) {
      if (seriesToDisplay.dataExists) {
        window.onscroll = () => {
          if (fetched === false) {
            if (
              document.getElementById(
                String(
                  seriesToDisplay.seriesData[
                    seriesToDisplay.seriesData.length - 2
                  ].id
                )
              ) !== null
            ) {
              if (
                window.innerHeight + Math.round(window.scrollY) >=
                (!fetched
                  ? document
                      .getElementById(
                        String(
                          seriesToDisplay.seriesData[
                            seriesToDisplay.seriesData.length - 2
                          ].id
                        )
                      )
                      .getBoundingClientRect().top
                  : 0)
              ) {
                setFetched(true);
                setNext5SeriesHandler();
              }
            }
          }
        };
      }
    }

    if (activeFiltersStore.length > 0 && !filteredSeriesLoaderFetched) {
      setFilteredSeriesHandler();
      setFilteredSeriesLoaderFetched(true);
    }
    if (activeFiltersStore.length > 0 && filteredSeriesLoaderFetched) {
      window.onscroll = () => {
        if (fetched === false) {
          if (
            window.innerHeight + Math.round(window.scrollY) >=
            (!fetched
              ? document
                  .getElementById(
                    String(
                      seriesToDisplay.seriesData[
                        seriesToDisplay.seriesData.length - 2
                      ].id
                    )
                  )
                  .getBoundingClientRect().top
              : 0)
          ) {
            setFetched(true);
            setNext5SeriesHandler();
          }
        }
      };
    }
  }, [
    seriesToDisplay,
    fetched,
    activeFiltersStore,
    filteredSeriesLoaderFetched,
  ]);
  return (
    <div className={classes.container}>
      <Filters />
      <div className={classesGlobal["main-container"]}>
        <div className={classesGlobal["main-container__advert-box"]}> </div>
        <div className={classes["series-container"]}>
          {seriesToDisplay.dataExists &&
            seriesToDisplay.seriesData.map((serie: SeriesCover) => {
              return <Serie serie={serie} key={serie.id} />;
            })}
        </div>
        <div className={classesGlobal["main-container__advert-box"]}> </div>
      </div>
    </div>
  );
};
export default Series;
