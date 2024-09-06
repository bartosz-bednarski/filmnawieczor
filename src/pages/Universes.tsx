import React from "react";
import Universes from "../components/universes/Index";
import { Helmet } from "react-helmet-async";
const UniversesPage = () => {
  return (
    <>
      <Helmet>
        <title>Uniwersa filmowe</title>
        <meta
          name="description"
          content="Sprawdź zestawienia filmów z najpopularniejszych uniwersów, odkryj ukryte powiązania między historiami i dowiedz się, jak różne filmy tworzą wspólne, epickie narracje."
        />
        <link rel="canonical" href={`https://filmnawieczor.pl/uniwersa`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={"Uniwersa filmowe"} />
        <meta
          property="og:description"
          content={
            "Sprawdź nasze zestawienia filmów z najpopularniejszych uniwersów, odkryj ukryte powiązania między historiami i dowiedz się, jak różne filmy tworzą wspólne, epickie narracje."
          }
        />
        <meta
          property="og:image"
          content="https://filmnawieczor.pl/dist/src/assets/home/home-fs-2.webp"
        />
        <meta
          property="og:url"
          content={"https://filmnawieczor.pl/uniwersa"}
        ></meta>
        <meta name="twitter:creator" content="Film na wieczór" />
        <meta name="twitter:card" content="article" />
        <meta name="twitter:title" content={"Uniwersa filmowe"} />
        <meta
          name="twitter:description"
          content={
            "Sprawdź nasze zestawienia filmów z najpopularniejszych uniwersów, odkryj ukryte powiązania między historiami i dowiedz się, jak różne filmy tworzą wspólne, epickie narracje."
          }
        />
      </Helmet>
      <Universes />
    </>
  );
};
export default UniversesPage;
