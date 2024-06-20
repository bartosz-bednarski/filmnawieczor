import React from "react";
import { Helmet } from "react-helmet-async";
import Series from "../components/series/Index";

const SeriesPage = () => {
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
