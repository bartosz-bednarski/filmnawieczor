import { GetError, GetLast10MoviesResponse } from "api/movies";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import Movies from "../components/movies/Index";
type Loader = GetLast10MoviesResponse | GetError;
const MoviesPage = () => {
  const loader = useLoaderData() as Loader;
  const navigate = useNavigate();
  useEffect(() => {
    if ("status" in loader) {
      navigate("/error", { state: { message: loader.message } });
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Baza filmów</title>
        <meta
          name="description"
          content="Znajdź swój film na wieczór korzystając z naszej bazy danych i nietypowych filtrów czasu lub miejsca akcji."
        />
        <link rel="canonical" href={`https://filmnawieczor.pl/filmy`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={"Baza filmów"} />
        <meta
          property="og:description"
          content={
            "Znajdź swój film na wieczór korzystając z naszej bazy danych i nietypowych filtrów czasu lub miejsca akcji."
          }
        />
        <meta
          property="og:image"
          content="https://filmnawieczor.pl/dist/src/assets/home/home-fs-2.webp"
        />
        <meta
          property="og:url"
          content={"https://filmnawieczor.pl/filmy"}
        ></meta>
        <meta name="twitter:creator" content="Film na wieczór" />
        <meta name="twitter:card" content="article" />
        <meta name="twitter:title" content={"Baza filmów"} />
        <meta
          name="twitter:description"
          content={
            "Znajdź swój film na wieczór korzystając z naszej bazy danych i nietypowych filtrów czasu lub miejsca akcji."
          }
        />
      </Helmet>
      <Movies />
    </>
  );
};

export default MoviesPage;
