import {getLast10Movies} from '@/api/movies/getLast10Movies';
import {setMoviesToDisplay} from '@/redux/movies-slice';
import {AppDispatch} from '@/redux/store';
import {MoviesSortingFilterType} from '@/redux/utils/moviesSortingFilter';

export const setLast10Movies = async (
  dispatch: AppDispatch,
  sortingStore: MoviesSortingFilterType
) => {
  const sorting = sortingStore.filter((item) => item.active === true);

  const data = await getLast10Movies(sorting[0].queryName, sorting[0].order);
  if (data.status === 'error') return null;
  dispatch(setMoviesToDisplay(data.data));
};
