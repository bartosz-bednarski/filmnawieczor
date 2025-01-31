export type GetError = {
  status: 'error';
  message: string;
};
export type LatestMovie = {
  id: number;
  name: string;
  image_cover: string;
  description: string;
};
export type LatestSerie = {
  id: number;
  name: string;
  image_cover: string;
  description: string;
};
export type LatestNews = {
  id: number;
  url: string;
  title: string;
  image_cover: string;
};
export type GetLatestMoviesCall = () => Promise<LatestMovie[] | GetError>;
export type GetLatestSeriesCall = () => Promise<LatestSerie[] | GetError>;
export type GetLatestNewsCall = () => Promise<LatestNews[] | GetError>;
