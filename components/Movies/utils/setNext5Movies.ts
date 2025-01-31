import {getNext5FilteredMovies} from '@/api/movies/getNext5FilteredMovies';
import {getNext5Movies} from '@/api/movies/getNext5Movies';
import {MovieLinkPropsType} from '@/components/Ui/Links/MovieLink/MovieLink';
import {
  ActiveFilterType,
  setIncreaseOffset,
  setMoviesToDisplay,
} from '@/redux/movies-slice';
import {AppDispatch} from '@/redux/store';
import {MoviesSortingFilterType} from '@/redux/utils/moviesSortingFilter';

export const setNext5Movies = async (
  dispatch: AppDispatch,
  setFetchedHandler: (fetched: boolean) => void,
  moviesToDisplayStore: MovieLinkPropsType[] | null,
  offset: number,
  activeFiltersStore: ActiveFilterType[],
  sortingStore: MoviesSortingFilterType
) => {
  const activeSorting = sortingStore.filter((item) => item.active === true);
  const filterBy = activeSorting[0].queryName;
  const filterOrder = activeSorting[0].order;
  if (activeFiltersStore.length === 0) {
    const next5Movies = await getNext5Movies(offset, filterBy, filterOrder);
    if (next5Movies.status === 'OK') {
      if (moviesToDisplayStore) {
        dispatch(
          setMoviesToDisplay([...moviesToDisplayStore, ...next5Movies.data])
        );
        setFetchedHandler(false);
      }
    } else {
      setFetchedHandler(true);
    }
  } else if (activeFiltersStore.length > 0) {
    const params = activeFiltersStore.map((item) => {
      return {queryName: item.queryName, queryValue: item.queryValue};
    });
    const activeSorting = sortingStore.filter((item) => item.active === true);
    const next5FilteredMovies = await getNext5FilteredMovies(
      params,
      activeSorting[0].queryName,
      activeSorting[0].order,
      offset
    );
    if (next5FilteredMovies.status === 'OK') {
      if (moviesToDisplayStore) {
        dispatch(
          setMoviesToDisplay([
            ...moviesToDisplayStore,
            ...next5FilteredMovies.data,
          ])
        );

        setFetchedHandler(false);
      }
    } else {
      setFetchedHandler(true);
    }
  }
  dispatch(setIncreaseOffset());
};
