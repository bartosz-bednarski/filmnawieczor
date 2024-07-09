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
      </Helmet>
      <News />
    </>
  );
};

export default NewsPage;
