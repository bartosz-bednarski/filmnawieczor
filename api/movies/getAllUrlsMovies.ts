export type GetAllUrlsMoviesType = () => Promise<OkResponseType | ErrorType>;

type ErrorType = {
  status: 'error';
};
type OkResponseType = {
  status: 'OK';
  data: {url:string}[];
};
export const getAllUrlsMovies: GetAllUrlsMoviesType = async () => {
  try {
    const response = await fetch(
      `https://filmnawieczor.online/api/movies/allUrls`,
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

    const data: {url:string}[] = await response.json();

    return {status: 'OK', data: data};
  } catch (error) {
    return {status: 'error'};
  }
};
