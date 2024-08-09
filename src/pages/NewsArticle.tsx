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
        <title>{`${
          "news_title" in data ? data.news_title : "Nowy Artykuł"
        }`}</title>
        <meta
          name="description"
          content={`Artykuł: ${
            "news_title" in data
              ? data.news_title
              : "Jaki film wybrać? | Co nowego w świecie filmów? | Co polecamy?"
          }`}
        />
        <link
          rel="canonical"
          href={`https://filmnawieczor.pl/aktualnosci/artykul/${articleId}`}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={`${"news_title" in data ? data.news_title : "Nowy Artykuł"}`}
        />
        <meta
          property="og:description"
          content={`Artykuł: ${
            "news_title" in data
              ? data.news_title
              : "Jaki film wybrać? | Co nowego w świecie filmów? | Co polecamy?"
          }`}
        />
        <meta
          property="og:image"
          content="https://filmnawieczor.pl/dist/src/assets/home/home-fs-1.webp"
        />
        <meta
          property="og:url"
          content={`https://filmnawieczor.pl/aktualnosci/artykul/${articleId}`}
        ></meta>
        <meta name="twitter:creator" content="Film na wieczór" />
        <meta name="twitter:card" content="article" />
        <meta
          name="twitter:title"
          content={`${"news_title" in data ? data.news_title : "Nowy Artykuł"}`}
        />
        <meta
          name="twitter:description"
          content={`Artykuł: ${
            "news_title" in data
              ? data.news_title
              : "Jaki film wybrać? | Co nowego w świecie filmów? | Co polecamy?"
          }`}
        />
      </Helmet>
      <NewsArticle />
    </>
  );
};
export default NewsArticlePage;
