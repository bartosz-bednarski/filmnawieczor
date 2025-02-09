import {ArticlePropsType} from '@/components/News/Article/Article';

export type GetNewsDetailsType = (
  params: string
) => Promise<OkResponseType | ErrorType>;

type OkResponseType = {
  status: 'OK';
  data: ArticlePropsType;
};
type ErrorType = {
  status: 'error';
};

export const getNewsDetails: GetNewsDetailsType = async (params) => {
  try {
    const response = await fetch(
      `https://filmnawieczor.online/api/news/${params}`,
      // `http://localhost:9001/api/news/${params}`,
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
    const data: ArticlePropsType = await response.json();
    return {status: 'OK', data: data};
  } catch (error) {
    return {status: 'error'};
  }
};
