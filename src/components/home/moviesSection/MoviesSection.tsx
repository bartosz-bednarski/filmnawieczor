import React from "react";
import H2Banner from "../../ui/H2Banner";
import * as classes from "./moviesSection.module.scss";
import SingleMovie from "./SingleMovie";
import { useState, useEffect } from "react";
import { getLatestMovies } from "../../../api/homePage";
import { useNavigate } from "react-router-dom";

const MoviesSection: React.FC = () => {
  const navigate = useNavigate();
  const [latestMovies, setLatestMovies] = useState([]);
  const getLatestMoviesHandler = async () => {
    const latestMoviesFetched = await getLatestMovies();
    if (latestMoviesFetched.status === "error") {
      navigate("/error", { state: { message: latestMoviesFetched.message } });
    } else {
      setLatestMovies(latestMoviesFetched);
    }
  };
  useEffect(() => {
    getLatestMoviesHandler();
  }, []);
  return (
    <div className={classes["home-container__movies-section-container"]}>
      <H2Banner title="Nowe filmy w bazie danych" />
      <div
        className={
          classes["home-container__movies-section-container__movies-box"]
        }
      >
        {latestMovies.map((movie) => (
          <SingleMovie
            title={movie.name}
            image={movie.image_cover}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
};
export default MoviesSection;
