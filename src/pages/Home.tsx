import React from "react";
import Home from "../components/home/Index";
import { Helmet } from "react-helmet-async";
const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Strona główna</title>
        <meta
          name="description"
          content="Film na wieczór to serwis, który posiada własną bazę danych filmów i seriali umożliwiającą korzystanie z nietypowych filtrów miejsca i czasu akcji."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <Home />
    </>
  );
};
export default HomePage;
