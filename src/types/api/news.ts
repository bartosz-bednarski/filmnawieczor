export type GetError = {
  status: "error";
  message: string;
};

export type Last10News = {
  id: number;
  url: string;
  title: string;
  type: string;
  image_cover: string;
  cover_content: string;
};

export type GetLast10NewsCall = () => Promise<Last10News[] | GetError>;

export type ArticleDetails = {
  article_title: string;
  article_image: string;
  article_content: string;
  article_id: number;
};
export type NewsDetails = {
  news_title: string;
  type: string;
  news_id: number;
  news_details_data: ArticleDetails[];
};

export type GetNewsDetailsCall = (
  params: string
) => Promise<NewsDetails[] | GetError>;
