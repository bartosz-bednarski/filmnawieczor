export type SortingFilterType = {
  sortingName:
    | 'py.production_year_DESC'
    | 'py.production_year_ASC'
    | 'mr.movie_rating_DESC'
    | 'mr.movie_rating_ASC'
    | 'at.action_time_end_DESC'
    | 'at.action_time_start_ASC';
  queryName:
    | 'py.production_year'
    | 'mr.movie_rating'
    | 'at.action_time_end'
    | 'at.action_time_start';
  buttonName: string;
  order: 'ASC' | 'DESC';
  active: boolean;
};
export type MoviesSortingFilterType = SortingFilterType[];

export const MOVIES_SORTING_FILTER: MoviesSortingFilterType = [
  {
    sortingName: 'py.production_year_DESC',
    queryName: 'py.production_year',
    buttonName: 'Rok produkcji',
    order: 'DESC',
    active: true,
  },
  {
    sortingName: 'py.production_year_ASC',
    queryName: 'py.production_year',
    buttonName: 'Rok produkcji',
    order: 'ASC',
    active: false,
  },
  {
    sortingName: 'mr.movie_rating_DESC',
    queryName: 'mr.movie_rating',
    buttonName: 'Ocena',
    order: 'DESC',
    active: false,
  },
  {
    sortingName: 'mr.movie_rating_ASC',
    queryName: 'mr.movie_rating',
    buttonName: 'Ocena',
    order: 'ASC',
    active: false,
  },
  {
    sortingName: 'at.action_time_end_DESC',
    queryName: 'at.action_time_end',
    buttonName: 'Czas akcji',
    order: 'DESC',
    active: false,
  },
  {
    sortingName: 'at.action_time_start_ASC',
    queryName: 'at.action_time_start',
    buttonName: 'Czas akcji',
    order: 'ASC',
    active: false,
  },
];
