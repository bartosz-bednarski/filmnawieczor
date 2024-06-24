export type getLast10SeriesResponseType = {
  dataExists?: boolean;
  seriesData?: getLast10SeriesSeriesDataObjectType[] | [];
  status?: "error";
  message?: string;
};

export type getLast10SeriesType = () => Promise<getLast10SeriesResponseType>;

export type getLast10SeriesSeriesDataObjectType = {
  id: number;
  name: string;
  seasons_count: number;
  description: string;
  image_cover: string;
  action_place: string;
  action_time: string;
  category: string;
  rating: string;
  production_year: string;
};
