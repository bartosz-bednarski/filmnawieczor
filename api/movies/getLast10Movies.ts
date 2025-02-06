import {MovieLinkPropsType} from '@/components/Ui/Links/MovieLink/MovieLink';

export type ErrorType = {
  status: 'error';
};
export type FilterByMovies =
  | 'py.production_year'
  | 'mr.movie_rating'
  | 'at.action_time_end'
  | 'at.action_time_start';

export type GetLast10MoviesType = (
  filterBy: FilterByMovies,
  filterOrder: 'ASC' | 'DESC'
) => Promise<OkResponseType | ErrorType>;

export type OkResponseType = {
  status: 'OK';
  data: MovieLinkPropsType[];
};
export type MovieResponseType = {
  id: number;
  name: string;
  url: string;
  description: string;
  image_cover: string;
  action_place: string;
  action_time_start: number;
  action_time_end: number;
  category: string;
  rating: string;
  production_year: string;
  movie_length: number;
  universe: 'Marvel' | 'None';
};

export const getLast10Movies: GetLast10MoviesType = async (
  filterBy,
  filterOrder
) => {
  try {
    const response = await fetch(
      `https://filmnawieczor.online/api/movies/last10`,
      // `http://localhost:9001/api/movies/last10`,
      {
        method: 'POST',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            filterBy: filterBy,
            filterOrder: filterOrder,
          },
        }),
      }
    );
    if (!response.ok) {
      // Sprawdzenie, czy jest to problem związany z CORS
      if (response.type === 'opaque') {
        throw new Error(
          'CORS error: No Access-Control-Allow-Origin header is present on the requested resource.'
        );
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    }
    const data: MovieResponseType[] = await response.json();
    let modifiedResponse: MovieLinkPropsType[] | [] = [];

    modifiedResponse = data.map((item) => {
      const movieLengthToHoursAndMinutes = new Date(item.movie_length * 1000)
        .toISOString()
        .slice(11, 19);

      return {
        action_place: item.action_place.split(','),
        action_time:
          item.action_time_end === item.action_time_start
            ? String(item.action_time_end)
            : `${item.action_time_start}-${item.action_time_end}`,
        category: item.category.split(','),
        description: item.description,
        id: item.id,
        image_cover: item.image_cover,
        movie_length: movieLengthToHoursAndMinutes,
        name: item.name,
        production_year: item.production_year,
        rating: item.rating,
        universe: item.universe,
        url: item.url,
      };
    });
    return {status: 'OK', data: modifiedResponse};
  } catch (error) {
    return {status: 'error'} as ErrorType;
  }
};
