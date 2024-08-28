import { ActiveFilter } from "filters";

export type Category = {
  id: string;
  catDisplayName: string;
  catName: string;
  queryName: string;
  secondaryCats?: SecondaryCategory[];
};
export type SortingItem = {
  name: string;
  order: "ASC" | "DESC";
  active: boolean;
};
export type SecondaryCategory = {
  id: string;
  catName: string;
  active: boolean;
};
export type MoviesFiltersInitialState = {
  categories: Category[];
  secondaryCatsToDisplay: string;
  sorting: SortingItem[];
  activeFilters: ActiveFilter[];
};
export type SecondaryCatsToDisplayAction = { payload: string; type: string };
export type ActivefilterAction = {
  payload: { queryName: string; queryValue: string; catName: string };
};
export type RemoveActiveFilterAction = {
  payload: { queryName: string; queryValue: string };
};
