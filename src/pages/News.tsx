import { GetError } from "api/home";
import { Last10News } from "api/news";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import News from "../components/news/Index";
const NewsPage = () => {
  const loader = useLoaderData() as Last10News[] | GetError;
  const navigate = useNavigate();
  useEffect(() => {
    if ("status" in loader) {
      navigate("/error", { state: { message: loader.message } });
    }
  }, []);
  return (
    <>
      <Helmet>
        <title>Aktualności</title>
        <meta
          name="description"
          content="W naszej sekcji aktualności znajdziesz artykuły związane z tematyką kinową."
        />
        <link rel="canonical" href="https://filmnawieczor.pl/aktualnosci" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={"Aktualności"} />
        <meta
          property="og:description"
          content={
            "W naszej sekcji aktualności znajdziesz artykuły związane z tematyką kinową."
          }
        />
        <meta
          property="og:image"
          content="https://filmnawieczor.pl/dist/src/assets/home/home-fs-1.webp"
        />
        <meta
          property="og:url"
          content={"https://filmnawieczor.pl/aktualnosci"}
        ></meta>
        <meta name="twitter:creator" content="Film na wieczór" />
        <meta name="twitter:card" content="article" />
        <meta name="twitter:title" content={"Aktualności"} />
        <meta
          name="twitter:description"
          content={
            "W naszej sekcji aktualności znajdziesz artykuły związane z tematyką kinową."
          }
        />
      </Helmet>
      <News />
    </>
  );
};

export default NewsPage;
