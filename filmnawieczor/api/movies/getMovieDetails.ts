export type ErrorType = {
  status: 'error';
};
export type FilterByMovies =
  | 'py.production_year'
  | 'mr.movie_rating'
  | 'at.action_time_end'
  | 'at.action_time_start';

export type GetMovieDetailsType = (
  id: string
) => Promise<OkResponseType | ErrorType>;

export type OkResponseType = {
  status: 'OK';
  data: MovieDetailsType;
};
export type MovieDetailsResponseType = {
  id: number;
  name: string;
  description: string;
  image_cover: string;
  meta_description: string;
  url: string;
  action_place: string;
  action_time_start: number;
  action_time_end: number;
  category: string;
  rating: string;
  production_year: string;
  movie_length: number;
  universe: string;
};
export type MovieDetailsType = {
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

export const getMovieDetails: GetMovieDetailsType = async (id) => {
  try {
    const response = await fetch(
      `https://filmnawieczor.online/api/movies/${id}`,
      // `http://localhost:9001/api/movies/${params}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
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
    const data: MovieDetailsResponseType[] = await response.json();
    const modifiedResponse: MovieDetailsType[] = data.map((item) => {
      const movieLengthToHoursAndMinutes = new Date(item.movie_length * 1000)
        .toISOString()
        .slice(11, 19);
      return {
        action_place: item.action_place,
        action_time:
          item.action_time_end === item.action_time_start
            ? String(item.action_time_end)
            : `${item.action_time_start}-${item.action_time_end}`,
        category: item.category,
        description: item.description,
        id: item.id,
        image_cover: item.image_cover,
        movie_length: movieLengthToHoursAndMinutes,
        name: item.name,
        production_year: item.production_year,
        rating: item.rating,
        url: item.url,
        meta_description: item.meta_description,
        universe: item.universe,
      };
    });
    return {status: 'OK', data: modifiedResponse[0]};
  } catch (error) {
    return {status: 'error'} as ErrorType;
  }
};
