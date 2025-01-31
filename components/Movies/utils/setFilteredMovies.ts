import {getLast10FilteredMovies} from '@/api/movies/getLast10FilteredMovies';
import {
  ActiveFilterType,
  setIncreaseOffset,
  setMoviesToDisplay,
} from '@/redux/movies-slice';
import {MoviesSortingFilterType} from '@/redux/utils/moviesSortingFilter';
import {AppDispatch} from '../../../redux/store';
export const setFilteredMovies = async (
  dispatch: AppDispatch,
  activeFiltersStore: ActiveFilterType[],
  sortingStore: MoviesSortingFilterType
) => {
  const params = activeFiltersStore.map((item) => {
    return {queryName: item.queryName, queryValue: item.queryValue};
  });
  const sorting = sortingStore.filter((item) => item.active === true);
  const filteredMovies = await getLast10FilteredMovies(
    params,
    sorting[0].queryName,
    sorting[0].order
  );
  if (filteredMovies.status === 'OK') {
    dispatch(setMoviesToDisplay(filteredMovies.data));
    dispatch(setIncreaseOffset());
  }
};
