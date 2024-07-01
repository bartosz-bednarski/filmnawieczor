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
      </Helmet>
      <Movies />
    </>
  );
};

export default MoviesPage;
