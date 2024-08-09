import React from "react";
import Home from "../components/home/Index";
import { Helmet } from "react-helmet-async";
const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Film na wieczór</title>
        <meta
          name="description"
          content="Film na wieczór to serwis, który posiada własną bazę danych filmów i seriali umożliwiającą korzystanie z nietypowych filtrów miejsca i czasu akcji."
        />
        <link rel="canonical" href="https://filmnawieczor.pl" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Film na wieczór" />
        <meta
          property="og:description"
          content="Film na wieczór to serwis, który posiada własną bazę danych filmów i seriali umożliwiającą korzystanie z nietypowych filtrów miejsca i czasu akcji."
        />
        <meta
          property="og:image"
          content="https://filmnawieczor.pl/dist/src/assets/logo.webp"
        />
        <meta property="og:url" content="https://filmnawieczor.pl"></meta>
        <meta name="twitter:creator" content="Film na wieczór" />
        <meta name="twitter:card" content="article" />
        <meta name="twitter:title" content="Film na wieczór" />
        <meta
          name="twitter:description"
          content="Film na wieczór to serwis, który posiada własną bazę danych filmów i seriali umożliwiającą korzystanie z nietypowych filtrów miejsca i czasu akcji."
        />
      </Helmet>
      <Home />
    </>
  );
};
export default HomePage;
