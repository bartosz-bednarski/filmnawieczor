import {MovieLinkHomePropsType} from '@/components/Home/MoviesSection/MovieLink/MovieLink';
import {MoviePropsType} from '@/components/Movies/Movie/Movie';

export type GetLatestMoviesType = () => Promise<OkResponseType | ErrorType>;

type OkResponseType = {
  status: 'OK';
  data: MovieLinkHomePropsType[];
};
type ErrorType = {
  status: 'error';
};

export const getLatestMovies: GetLatestMoviesType = async () => {
  try {
    const response = await fetch(
      `https://filmnawieczor.online/api/homePage/latestMovies`,
      // `http://localhost:9001/api/homePage/latestMovies`,
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

    const data = await response.json();

    return {status: 'OK', data: data};
  } catch (error) {
    return {status: 'error'} as ErrorType;
  }
};
