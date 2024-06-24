import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import News from "../components/news/Index";
const NewsPage = () => {
  const loader: any = useLoaderData();
  const navigate = useNavigate();
  useEffect(() => {
    if (loader[0] === undefined) {
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
        <link rel="canonical" href="/aktualnosci" />
      </Helmet>
      <News />
    </>
  );
};

export default NewsPage;
