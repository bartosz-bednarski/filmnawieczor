import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import MovieDetails from "../components/movies/movieDetails/MovieDetails";
const MovieDetailsPage = () => {
  const data: any = useLoaderData();
  let { movieId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (data.status === "error") {
      navigate("/error", { state: { message: data.message } });
    }
  }, []);
  return (
    <>
      <Helmet>
        <title>{data.name}</title>
        <meta name="description" content={`${data.meta_description}`} />
        <link
          rel="canonical"
          href={`https://filmnawieczor.pl/movies/${movieId}`}
        />
      </Helmet>
      <MovieDetails />
    </>
  );
};
export default MovieDetailsPage;
