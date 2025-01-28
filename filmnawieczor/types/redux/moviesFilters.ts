import {MovieLinkPropsType} from '@/components/Ui/Links/MovieLink/MovieLink';
import {ActiveFilter} from 'filters';

export type Category = {
  id: string;
  catDisplayName: string;
  catName: string;
  queryName: string;
  secondaryCats?: SecondaryCategory[];
};
export type SortingItem = {
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
export type SecondaryCategory = {
  id: string;
  catName: string;
  active: boolean;
};

export type SecondaryCatsToDisplayAction = {payload: string; type: string};
export type ActivefilterAction = {
  payload: {queryName: string; queryValue: string; catName: string};
};
export type RemoveActiveFilterAction = {
  payload: {queryName: string; queryValue: string};
};
export type SetActiveSortingAction = {
  payload: {
    sortingName:
      | 'py.production_year_DESC'
      | 'py.production_year_ASC'
      | 'mr.movie_rating_DESC'
      | 'mr.movie_rating_ASC'
      | 'at.action_time_end_DESC'
      | 'at.action_time_start_ASC';
  };
};
