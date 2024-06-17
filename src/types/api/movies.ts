export type getLast10MoviesResponseType = {
  dataExists: boolean;
  moviesData: getLast10MoviesMoviesDataObjectType[] | [];
};

export type getLast10MoviesType = () => Promise<getLast10MoviesResponseType>;

export type getLast10MoviesMoviesDataObjectType = {
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
};
