import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import {
  getLast10FilteredMovies,
  getLast10Movies,
  getNext5FilteredMovies,
  getNext5Movies,
} from "../../api/movies";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Filters from "../filters/movie/Index";
import MovieCoverBox from "./movieCoverBox/MovieCoverBox";
import * as classes from "./movies.module.scss";
import * as classesGlobal from "../ui/mainContainerWithAdverts.module.scss";
import { GetLast10MoviesResponse, MovieCover } from "api/movies";
import SortingFilters from "../filters/movie/sorting/SortingFilters";
import { setIncreaseOffset } from "../../redux/moviesFilters-slice";

const Movies: React.FC = () => {
  const navigate = useNavigate();
  const loaderData = useLoaderData() as GetLast10MoviesResponse;
  const dispatch = useAppDispatch();
  const [moviesToDisplay, setMoviesToDisplay] = useState<{
    dataExists: boolean;
    moviesData: [] | MovieCover[];
  }>(loaderData);
  const offset = useAppSelector((state) => state.moviesFilters.offset);
  const activeFiltersStore = useAppSelector(
    (state) => state.moviesFilters.activeFilters
  );
  const sortingCategoriesStore = useAppSelector(
    (state) => state.moviesFilters.sorting
  );
  const [fetched, setFetched] = useState(false);
  const [filteredMoviesLoaderFetched, setFilteredMoviesLoaderFetched] =
    useState(false);

  const setFilteredMoviesHandler = async () => {
    const params = activeFiltersStore.map((item) => {
      return { queryName: item.queryName, queryValue: item.queryValue };
    });
    const sorting = sortingCategoriesStore.filter(
      (item) => item.active === true
    );
    const filteredMovies = await getLast10FilteredMovies(
      params,
      sorting[0].queryName,
      sorting[0].order
    );
    if ("status" in filteredMovies) {
      navigate("/error", { state: { message: filteredMovies.message } });
    }
    if ("moviesData" in filteredMovies) {
      setMoviesToDisplay(filteredMovies);
      dispatch(setIncreaseOffset());
    }
  };
  const get10LastMoviesHandler = async () => {
    const sorting = sortingCategoriesStore.filter(
      (item) => item.active === true
    );

    const data = await getLast10Movies(sorting[0].queryName, sorting[0].order);
    if ("status" in data) {
      navigate("/error", { state: { message: data.message } });
    }
    if ("moviesData" in data) {
      setMoviesToDisplay(data);
    }
  };
  const setNext5MoviesHandler = async () => {
    const activeSorting = sortingCategoriesStore.filter(
      (item) => item.active === true
    );
    const filterBy = activeSorting[0].queryName;
    const filterOrder = activeSorting[0].order;
    if (activeFiltersStore.length === 0) {
      const next5Movies = await getNext5Movies(offset, filterBy, filterOrder);
      if ("dataExists" in next5Movies && next5Movies.moviesData.length > 0) {
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
      const activeSorting = sortingCategoriesStore.filter(
        (item) => item.active === true
      );
      const next5FilteredMovies = await getNext5FilteredMovies({
        params: params,
        offset: offset,
        filterBy: activeSorting[0].queryName,
        filterOrder: activeSorting[0].order,
      });
      if (
        "dataExists" in next5FilteredMovies &&
        next5FilteredMovies.moviesData.length > 0
      ) {
        const moviesToSet = [
          ...moviesToDisplay.moviesData,
          ...next5FilteredMovies.moviesData,
        ];
        setMoviesToDisplay({ dataExists: true, moviesData: moviesToSet });
        setFetched(false);
      } else {
        setFetched(true);
      }
    }
    dispatch(setIncreaseOffset());
  };

  //Update when filters change
  useEffect(() => {
    setFetched(false);
    if (filteredMoviesLoaderFetched && activeFiltersStore.length > 0) {
      setFilteredMoviesHandler();
    }
    if (activeFiltersStore.length === 0) {
      get10LastMoviesHandler();
    }
  }, [sortingCategoriesStore]);

  //Get known when loader loads data from api
  useEffect(() => {
    setFetched(false);
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
    sortingCategoriesStore,
  ]);

  return (
    <div className={classes.container}>
      <Filters />
      <div className={classesGlobal["main-container"]}>
        <div className={classesGlobal["main-container__advert-box"]}> </div>
        <div className={classes["movies-container"]}>
          <SortingFilters />
          {moviesToDisplay.dataExists &&
            moviesToDisplay.moviesData.map((data: MovieCover) => {
              return <MovieCoverBox movie={data} key={data.id} />;
            })}
        </div>
        <div className={classesGlobal["main-container__advert-box"]}> </div>
      </div>
    </div>
  );
};
export default Movies;
