'use client';
import React from 'react';
import {useEffect, useState} from 'react';

import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import styles from './movies.module.scss';
import stylesGlobal from '../Ui/Styles/mainContainerWithAdverts.module.scss';
import {setIncreaseOffset, setMoviesToDisplay} from '../../redux/movies-slice';
import MovieLink, {MovieLinkPropsType} from '../Ui/Links/MovieLink/MovieLink';
import Filters from './Filters/Filters';
import SortingFilters from './Filters/Sorting/SortingFilters';
import {getLast10Movies} from '@/api/movies/getLast10Movies';
import {getNext5Movies} from '@/api/movies/getNext5Movies';
import {getLast10FilteredMovies} from '@/api/movies/getLast10FilteredMovies';
import {getNext5FilteredMovies} from '@/api/movies/getNext5FilteredMovies';
import {setFilteredMovies} from './utils/setFilteredMovies';
import {setLast10Movies} from './utils/setLast10Movies';
import {setNext5Movies} from './utils/setNext5Movies';

export interface MoviesPropsType {
  moviesData: MovieLinkPropsType[];
}

const Movies = ({moviesData}: MoviesPropsType) => {
  const dispatch = useAppDispatch();

  const moviesToDisplayStore = useAppSelector(
    (state) => state.movies.moviesToDisplay
  );
  const offset = useAppSelector((state) => state.movies.offset);
  const activeFiltersStore = useAppSelector(
    (state) => state.movies.activeFilters
  );
  const sortingStore = useAppSelector((state) => state.movies.sorting);
  const [fetched, setFetched] = useState(false);
  const [filteredMoviesLoaderFetched, setFilteredMoviesLoaderFetched] =
    useState(false);

  const setFetchedHandler = (fetched: boolean) => {
    setFetched(fetched);
  };

  // const setNext5MoviesHandler = async () => {
  //   const activeSorting = sortingStore.filter(
  //     (item) => item.active === true
  //   );
  //   const filterBy = activeSorting[0].queryName;
  //   const filterOrder = activeSorting[0].order;
  //   if (activeFiltersStore.length === 0) {
  //     const next5Movies = await getNext5Movies(offset, filterBy, filterOrder);
  //     if (next5Movies.status==='OK') {
  //      if(moviesToDisplayStore){
  //       dispatch(setMoviesToDisplay([...moviesToDisplayStore,...next5Movies.data]));
  //       setFetched(false);
  //      }

  //     } else {
  //       setFetched(true);
  //     }
  //   } else if (activeFiltersStore.length > 0) {
  //     const params = activeFiltersStore.map((item) => {
  //       return {queryName: item.queryName, queryValue: item.queryValue};
  //     });
  //     const activeSorting = sortingStore.filter(
  //       (item) => item.active === true
  //     );
  //     const next5FilteredMovies = await getNext5FilteredMovies(
  //       params,activeSorting[0].queryName,activeSorting[0].order,
  //       offset,

  //     );
  //     if (
  //      next5FilteredMovies.status==='OK'
  //     ) {
  //      if(moviesToDisplayStore){
  //       dispatch(setMoviesToDisplay([...moviesToDisplayStore,...next5FilteredMovies.data]));

  //       setFetched(false);
  //      }

  //     } else {
  //       setFetched(true);
  //     }
  //   }
  //   dispatch(setIncreaseOffset());
  // };

  //Update when filters change
  useEffect(() => {
    setFetchedHandler(false);
    if (filteredMoviesLoaderFetched && activeFiltersStore.length > 0) {
      setFilteredMovies(dispatch, activeFiltersStore, sortingStore);
    }
    if (activeFiltersStore.length === 0) {
      setLast10Movies(dispatch, sortingStore);
    }
  }, [sortingStore, activeFiltersStore]);

  //Get known when loader loads data from api
  useEffect(() => {
    setFetchedHandler(false);
    setFilteredMoviesLoaderFetched(false);
    if (activeFiltersStore.length === 0) {
      setMoviesToDisplay(moviesData);
      setFetchedHandler(false);
    }
  }, [activeFiltersStore]);

  useEffect(() => {
    if (activeFiltersStore.length === 0) {
      if (moviesToDisplayStore) {
        window.onscroll = () => {
          if (fetched === false) {
            const check = document.getElementById(
              String(moviesToDisplayStore[moviesToDisplayStore.length - 2].id)
            );
            if (check !== null) {
              if (
                window.innerHeight + Math.round(window.scrollY) >=
                (!fetched ? check.getBoundingClientRect().top : 0)
              ) {
                setFetchedHandler(true);
                setNext5Movies(
                  dispatch,
                  setFetchedHandler,
                  moviesToDisplayStore,
                  offset,
                  activeFiltersStore,
                  sortingStore
                );
              }
            }
          }
        };
      }
    }

    if (activeFiltersStore.length > 0 && !filteredMoviesLoaderFetched) {
      setFilteredMovies(dispatch, activeFiltersStore, sortingStore);
      setFilteredMoviesLoaderFetched(true);
    }
    if (activeFiltersStore.length > 0 && filteredMoviesLoaderFetched) {
      window.onscroll = () => {
        if (fetched === false && moviesToDisplayStore) {
          const check = document.getElementById(
            String(moviesToDisplayStore[moviesToDisplayStore.length - 2].id)
          );
          if (check) {
            if (
              window.innerHeight + Math.round(window.scrollY) >=
              (!fetched ? check.getBoundingClientRect().top : 0)
            ) {
              setFetchedHandler(true);
              setNext5Movies(
                dispatch,
                setFetchedHandler,
                moviesToDisplayStore,
                offset,
                activeFiltersStore,
                sortingStore
              );
            }
          }
        }
      };
    }
  }, [
    moviesToDisplayStore,
    fetched,
    activeFiltersStore,
    filteredMoviesLoaderFetched,
    sortingStore,
  ]);

  return (
    <div className={styles.container}>
      <Filters />
      <div className={stylesGlobal['main-container']}>
        <div className={stylesGlobal['main-container__advert-box']}> </div>
        <div className={styles['movies-container']}>
          <SortingFilters />
          {moviesToDisplayStore &&
            moviesToDisplayStore.map((data: MovieLinkPropsType) => {
              return <MovieLink {...data} key={data.id} />;
            })}
        </div>
        <div className={stylesGlobal['main-container__advert-box']}> </div>
      </div>
    </div>
  );
};
export default Movies;
