import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import NewsArticle from "../components/news/NewsArticle";
const NewsArticlePage = () => {
  const data: any = useLoaderData();
  let { articleId } = useParams();
  return (
    <>
      <Helmet>
        <title>Aktualności</title>
        <meta name="description" content={`Artykuł: ${data.news_title}`} />
        <link
          rel="canonical"
          href={`https://filmnawieczor.pl/aktualnosci/artykul/${articleId}`}
        />
      </Helmet>
      <NewsArticle />
    </>
  );
};
export default NewsArticlePage;
