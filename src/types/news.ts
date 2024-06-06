export interface News_details {
  news_id: number;
  news_title: string;
  type: string;
  news_details_data: News_details_data;
}
export type News_details_data = News_article_data[];
export interface News_article_data {
  article_title: string;
  article_image: string;
  article_content: string;
}
