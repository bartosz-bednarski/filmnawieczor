import React from "react";
import { Helmet } from "react-helmet-async";
import Error from "../components/globals/Error";
const ErrorPage = () => {
  return (
    <>
      {" "}
      <Helmet>
        <title>Error</title>
        <meta
          name="description"
          content="Wystąpił problem podczas komunikacji z serwerem."
        />
        <link rel="canonical" href="/error" />
      </Helmet>
      <Error />
    </>
  );
};

export default ErrorPage;
