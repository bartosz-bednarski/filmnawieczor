import { ActiveFilter } from "filters";

export type GetLast10MoviesResponse = GetDataExsists | GetDataNotExsists;
type GetDataExsists = {
  dataExists: true;
  moviesData: MovieCover[];
};
type GetDataNotExsists = { dataExists: false; moviesData: [] };
export type GetError = {
  status: "error";
  message: string;
};
export type MovieCover = {
  id: number;
  name: string;
  description: string;
  image_cover: string;
  action_place: string;
  action_time: string;
  category: string;
  rating: string;
  production_year: string;
  movie_length: string;
  universe: string;
};
export type FilterBy =
  | "py.production_year"
  | "mr.movie_rating"
  | "at.action_time_end"
  | "at.action_time_start";
export type GetLast10MoviesCall = (
  filterBy: FilterBy,
  filterOrder: "ASC" | "DESC"
) => Promise<GetLast10MoviesResponse | GetError>;

type GetNext5MoviesResponse = GetDataExsists | GetDataNotExsists;
export type GetNext5MoviesCall = (
  offset: number,
  filterBy: FilterBy,
  filterOrder: "ASC" | "DESC"
) => Promise<GetNext5MoviesResponse | GetError>;

type GetLast10FilteredMoviesResponse = GetDataExsists | GetDataNotExsists;
export type GetLast10FilteredMoviesCall = (
  params: ActiveFilter[],
  filterBy: FilterBy,
  order: "ASC" | "DESC"
) => Promise<GetLast10FilteredMoviesResponse | GetError>;

type GetNext5FilteredMoviesResponse = GetDataExsists | GetDataNotExsists;
type ParamsGetNext5FilteredMoviesCall = {
  params: ActiveFilter[];
  offset: number;
  filterBy: FilterBy;
  filterOrder: "ASC" | "DESC";
};
export type GetNext5FilteredMoviesCall = (
  params: ParamsGetNext5FilteredMoviesCall
) => Promise<GetNext5FilteredMoviesResponse | GetError>;

export type MovieDetails = {
  id: number;
  name: string;
  description: string;
  image_cover: string;
  action_place: string;
  action_time: string;
  category: string;
  rating: string;
  production_year: string;
  movie_length: string;
  url: string;
  meta_description: string;
  universe: string;
};
export type GetMovieDetailsCall = (
  id: string
) => Promise<MovieDetails | GetError>;
