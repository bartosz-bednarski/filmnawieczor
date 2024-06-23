import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  getLast10FilteredMovies,
  getNext5FilteredMovies,
  getNext5Movies,
} from "../../api/movies";
import { useAppSelector } from "../../redux/hooks";
import Filters from "../filters/movie/Index";
import Movie from "./Movie";
import * as classes from "./movies.module.scss";
import * as classesGlobal from "../ui/mainContainerWithAdverts.module.scss";
import { getLast10MoviesResponseType } from "api/movies";

const Movies: React.FC = () => {
  const loaderData: any = useLoaderData();

  const [moviesToDisplay, setMoviesToDisplay] =
    useState<getLast10MoviesResponseType>(loaderData);
  const activeFiltersStore = useAppSelector(
    (state) => state.moviesFilters.activeFilters
  );

  const [fetched, setFetched] = useState(false);
  const [filteredMoviesLoaderFetched, setFilteredMoviesLoaderFetched] =
    useState(false);
  const setFilteredMoviesHandler = async () => {
    const params = activeFiltersStore.map((item) => {
      return { queryName: item.queryName, queryValue: item.queryValue };
    });
    const filteredMovies = await getLast10FilteredMovies(params);
    setMoviesToDisplay(filteredMovies);
  };

  const setNext5MoviesHandler = async () => {
    const idIndex = moviesToDisplay.moviesData.length - 1;
    const id = moviesToDisplay.moviesData[idIndex].id;
    if (activeFiltersStore.length === 0) {
      const next5Movies = await getNext5Movies(id);
      if (next5Movies.dataExists) {
        const moviesToSet = [
          ...moviesToDisplay.moviesData,
          ...next5Movies.moviesData,
        ];
        setMoviesToDisplay({ dataExists: true, moviesData: moviesToSet });
        setFetched(false);
      } else {
        setFetched(true);
      }
    } else if (activeFiltersStore.length > 0) {
      const params = activeFiltersStore.map((item) => {
        return { queryName: item.queryName, queryValue: item.queryValue };
      });
      const next5FilteredMovies = await getNext5FilteredMovies({
        params: params,
        id: id,
      });
      if (next5FilteredMovies.dataExists) {
        const moviesToSet = [
          ...moviesToDisplay.moviesData,
          ...next5FilteredMovies.moviesData,
        ];
        console.log(moviesToSet);
        setMoviesToDisplay({ dataExists: true, moviesData: moviesToSet });
        setFetched(false);
      } else {
        setFetched(true);
      }
    }
  };
  useEffect(() => {
    setFilteredMoviesLoaderFetched(false);
    if (activeFiltersStore.length === 0) {
      setMoviesToDisplay(loaderData);
      setFetched(false);
    }
  }, [activeFiltersStore]);
  useEffect(() => {
    if (activeFiltersStore.length === 0) {
      if (moviesToDisplay.dataExists) {
        window.onscroll = () => {
          if (fetched === false) {
            if (
              document.getElementById(
                String(
                  moviesToDisplay.moviesData[
                    moviesToDisplay.moviesData.length - 2
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
                          moviesToDisplay.moviesData[
                            moviesToDisplay.moviesData.length - 2
                          ].id
                        )
                      )
                      .getBoundingClientRect().top
                  : 0)
              ) {
                setFetched(true);
                setNext5MoviesHandler();
              }
            }
          }
        };
      }
    }

    if (activeFiltersStore.length > 0 && !filteredMoviesLoaderFetched) {
      setFilteredMoviesHandler();
      setFilteredMoviesLoaderFetched(true);
    }
    if (activeFiltersStore.length > 0 && filteredMoviesLoaderFetched) {
      window.onscroll = () => {
        if (fetched === false) {
          if (
            window.innerHeight + Math.round(window.scrollY) >=
            (!fetched
              ? document
                  .getElementById(
                    String(
                      moviesToDisplay.moviesData[
                        moviesToDisplay.moviesData.length - 2
                      ].id
                    )
                  )
                  .getBoundingClientRect().top
              : 0)
          ) {
            setFetched(true);
            setNext5MoviesHandler();
          }
        }
      };
    }
  }, [
    moviesToDisplay,
    fetched,
    activeFiltersStore,
    filteredMoviesLoaderFetched,
  ]);

  return (
    <div className={classes.container}>
      <Filters />
      <div className={classesGlobal["main-container"]}>
        <div className={classesGlobal["main-container__advert-box"]}> </div>
        <div className={classes["movies-container"]}>
          {moviesToDisplay.dataExists &&
            moviesToDisplay.moviesData.map((data) => {
              return <Movie movie={data} key={data.id} />;
            })}
        </div>
        <div className={classesGlobal["main-container__advert-box"]}> </div>
      </div>
    </div>
  );
};
export default Movies;
