import { GetError, GetLast10SeriesResponse } from "api/series";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import Series from "../components/series/Index";
type Loader = GetLast10SeriesResponse | GetError;
const SeriesPage = () => {
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
        <title>Baza seriali</title>
        <meta
          name="description"
          content="Znajdź swój serial na wieczór korzystając z naszej bazy danych i nietypowych filtrów czasu lub miejsca akcji."
        />
        <link rel="canonical" href={`https://filmnawieczor.pl/seriale`} />
      </Helmet>
      <Series />
    </>
  );
};

export default SeriesPage;
