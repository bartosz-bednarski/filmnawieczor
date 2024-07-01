import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import NewsArticle from "../components/news/NewsArticle/NewsArticle";
const NewsArticlePage = () => {
  const data: any = useLoaderData();
  let { articleId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (data.status === "error") {
      navigate("/error", { state: { message: data.message } });
    }
  }, []);
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
