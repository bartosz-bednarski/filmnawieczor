import {SingleNewsHomePropsType} from '@/components/Home/NewsSection/SingleNews/SingleNews';

export type GetLatestNewsType = () => Promise<OkResponseType | ErrorType>;

type OkResponseType = {
  status: 'OK';
  data: SingleNewsHomePropsType[];
};
type ErrorType = {
  status: 'error';
};

export const getLatestNews: GetLatestNewsType = async () => {
  try {
    const response = await fetch(
      `https://filmnawieczor.online/api/homePage/latestNews`,
      // `http://localhost:9001/api/homePage/latestNews`,
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

    const data: SingleNewsHomePropsType[] = await response.json();

    return {status: 'OK', data: data};
  } catch (error) {
    return {status: 'error'} as ErrorType;
  }
};
