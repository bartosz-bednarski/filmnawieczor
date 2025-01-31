// import {ActiveFilter} from 'filters';

// export type GetLast10SeriesResponse = GetDataExsists | GetDataNotExsists;
// type GetDataExsists = {
//   dataExists: true;
//   seriesData: SeriesCover[];
// };
// type GetDataNotExsists = {dataExists: false; seriesData: []};
// export type GetError = {
//   status: 'error';
//   message: string;
// };
// export type SeriesCover = {
//   id: number;
//   name: string;
//   seasons_count: number;
//   description: string;
//   image_cover: string;
//   action_place: string;
//   action_time: string;
//   category: string;
//   rating: string;
//   production_year: string;
// };
// export type GetLast10SeriesCall = () => Promise<
//   GetLast10SeriesResponse | GetError
// >;

// type GetLast10FilteredSeriesResponse = GetDataExsists | GetDataNotExsists;
// export type GetLast10FilteredSeriesCall = (
//   params: ActiveFilter[]
// ) => Promise<GetLast10FilteredSeriesResponse | GetError>;

// type GetNext5SeriesResponse = GetDataExsists | GetDataNotExsists;
// export type GetNext5SeriesCall = (
//   id: number
// ) => Promise<GetNext5SeriesResponse | GetError>;

// type GetNext5FilteredSeriesResponse = GetDataExsists | GetDataNotExsists;
// type ParamsGetNext5FilteredSeriesCall = {params: ActiveFilter[]; id: number};
// export type GetNext5FilteredSeriesCall = (
//   params: ParamsGetNext5FilteredSeriesCall
// ) => Promise<GetNext5FilteredSeriesResponse | GetError>;
