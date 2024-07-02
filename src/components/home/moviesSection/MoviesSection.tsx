import React from "react";
import H2Banner from "../../ui/H2Banner";
import * as classes from "./moviesSection.module.scss";
import SingleMovie from "./SingleMovie";
import { useState, useEffect } from "react";
import { getLatestMovies } from "../../../api/home";
import { NavLink, useNavigate } from "react-router-dom";
import { LatestMovie } from "../../../types/api/home";
const MoviesSection: React.FC = () => {
  const navigate = useNavigate();
  const [latestMovies, setLatestMovies] = useState<[] | LatestMovie[]>([]);
  const getLatestMoviesHandler = async () => {
    const latestMoviesFetched = await getLatestMovies();
    if ("status" in latestMoviesFetched) {
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
        {latestMovies.map((movie: LatestMovie) => (
          <SingleMovie
            title={movie.name}
            image={movie.image_cover}
            key={movie.id}
            id={movie.id}
          />
        ))}
      </div>
    </div>
  );
};
export default MoviesSection;
