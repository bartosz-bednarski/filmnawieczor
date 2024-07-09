import React from "react";
import { Helmet } from "react-helmet-async";
import ErrorRoute from "../components/Error/ErrorRoute";
const ErrorRoutePage = () => {
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
      <ErrorRoute />
    </>
  );
};

export default ErrorRoutePage;
