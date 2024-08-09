import { GetError, MovieDetails as MovieDetailsType } from "api/movies";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { encodePolishChars } from "../components/globals/scripts/encodePolishChars";
import Movie from "../components/movies/movie/Movie";
type Loader = MovieDetailsType | GetError;
const MoviePage = () => {
  const data = useLoaderData() as Loader;
  let { movieId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if ("status" in data) {
      navigate("/error", { state: { message: data.message } });
    }
  }, []);
  return (
    <>
      <Helmet>
        <title>{"name" in data ? data.name : "Szczegóły filmu"}</title>
        <meta
          name="description"
          content={
            "meta_description" in data
              ? `${data.meta_description}`
              : "Szczegółowy opis filmu zawierający informację szczegółowe jak gatunek, długość itp. oraz zwiastun filmu."
          }
        />
        <link
          rel="canonical"
          href={`https://filmnawieczor.pl/filmy/${encodePolishChars(movieId)}`}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={"name" in data ? data.name : "Szczegóły filmu"}
        />
        <meta
          property="og:description"
          content={
            "meta_description" in data
              ? `${data.meta_description}`
              : "Szczegółowy opis filmu zawierający informację szczegółowe jak gatunek, długość itp. oraz zwiastun filmu."
          }
        />
        <meta
          property="og:image"
          content="https://filmnawieczor.pl/dist/src/assets/home/home-fs-2.webp"
        />
        <meta
          property="og:url"
          content={`https://filmnawieczor.pl/filmy/${encodePolishChars(
            movieId
          )}`}
        ></meta>
        <meta name="twitter:creator" content="Film na wieczór" />
        <meta name="twitter:card" content="article" />
        <meta
          name="twitter:title"
          content={"name" in data ? data.name : "Szczegóły filmu"}
        />
        <meta
          name="twitter:description"
          content={
            "meta_description" in data
              ? `${data.meta_description}`
              : "Szczegółowy opis filmu zawierający informację szczegółowe jak gatunek, długość itp. oraz zwiastun filmu."
          }
        />
      </Helmet>
      <Movie />
    </>
  );
};
export default MoviePage;
