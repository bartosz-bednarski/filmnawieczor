import React from "react";
import { Helmet } from "react-helmet-async";
import Error from "../components/Error/Error";
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
        <link rel="canonical" href="https://filmnawieczor.pl/error" />
      </Helmet>
      <Error />
    </>
  );
};

export default ErrorPage;
