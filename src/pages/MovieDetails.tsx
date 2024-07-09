import { GetError, MovieDetails as MovieDetailsType } from "api/movies";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { encodePolishChars } from "../components/globals/scripts/encodePolishChars";
import MovieDetails from "../components/movies/movieDetails/MovieDetails";
type Loader = MovieDetailsType | GetError;
const MovieDetailsPage = () => {
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
      </Helmet>
      <MovieDetails />
    </>
  );
};
export default MovieDetailsPage;
