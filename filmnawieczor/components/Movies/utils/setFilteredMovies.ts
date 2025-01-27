import { getLast10FilteredMovies } from '@/api/movies';
import { ActiveFilter } from '@/redux/movies-slice';
import { MoviesSortingFilterType} from '@/redux/utils/moviesSortingFilter';

export const setFilteredMovies = async (activeFiltersStore:ActiveFilter[],sortingStore:MoviesSortingFilterType) => {
    const params = activeFiltersStore.map((item) => {
        return {queryName: item.queryName, queryValue: item.queryValue};
      });
      const sorting = sortingStore.filter(
        (item) => item.active === true
      );
      const filteredMovies = await getLast10FilteredMovies(
        params,
        sorting[0].queryName,
        sorting[0].order
      );
      if(!filteredMovies.moviesData)return null
}