export type GetAllIdsNewsType = () => Promise<OkResponseType | ErrorType>;

type ErrorType = {
  status: 'error';
};
type OkResponseType = {
  status: 'OK';
  data: string[];
};
export const getAllIdsNews: GetAllIdsNewsType = async () => {
  try {
    const response = await fetch(
      `https://filmnawieczor.online/api/news/allIds`,
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

    const data: {id: number; url: string}[] = await response.json();
    const modifiedData = data.map((item) => item.url);
    console.log(modifiedData);
    return {status: 'OK', data: modifiedData};
  } catch (error) {
    return {status: 'error'};
  }
};
