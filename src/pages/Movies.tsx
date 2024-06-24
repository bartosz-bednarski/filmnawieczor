import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import Movies from "../components/movies/Index";

const MoviesPage = () => {
  const loader: any = useLoaderData();
  const navigate = useNavigate();
  useEffect(() => {
    if (loader.status === "error") {
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
