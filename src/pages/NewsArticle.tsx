import { GetError, NewsDetails } from "api/news";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import NewsArticle from "../components/news/NewsArticle/NewsArticle";
const NewsArticlePage = () => {
  const data = useLoaderData() as NewsDetails[] | GetError;
  let { articleId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if ("status" in data) {
      navigate("/error", { state: { message: data.message } });
    }
  }, []);
  return (
    <>
      <Helmet>
        <title>Aktualności</title>
        <meta
          name="description"
          content={`Artykuł: ${
            "news_title" in data
              ? data.news_title
              : "Artykuły polecające filmy i seriale na filmnawieczor.pl"
          }`}
        />
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
