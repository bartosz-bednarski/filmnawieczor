import React from "react";
import H2Banner from "../../ui/H2Banner";
import * as classes from "./moviesSection.module.scss";
import SingleMovie from "./SingleMovie";
import { useState, useEffect } from "react";
import { getLatestMovies } from "../../../api/home";
import { NavLink, useNavigate } from "react-router-dom";
import { LatestMovie } from "../../../types/api/home";
import Demo from "./SingleMovie";
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
      <H2Banner header="Nowe filmy" secondaryHeader="w bazie danych" />
      <div
        className={
          classes["home-container__movies-section-container__movies-box"]
        }
      >
        {latestMovies.map((movie: LatestMovie) => (
          <SingleMovie
            title={movie.name}
            image={movie.image_cover}
            description={movie.description}
            key={movie.id}
            id={movie.id}
          />
        ))}
      </div>
      <span
        className={
          classes["home-container__movies-section-container__text-box"]
        }
      >
        <h3>Dlaczego warto zajrzeć do naszej bazy filmów?</h3> Zacznijmy od
        filtrowania. Gatunek czy rok produkcji to klasyczne filtry używane na
        wielu serwisach internetowych powiązanych z branżą filmową. My mamy do
        zaoferowania coś nowego. Filtry miejsca akcji pozwolą Ci znaleźć filmy,
        które będą toczyć się w wybranych przez Ciebie krajach lub krainach. W
        połączeniu z wybranym czasem akcji i gatunkiem masz możliwość szybkiego
        znalezienia filmu, którego właśnie szukasz.
        <h4>
          Nasze nietypowe rozwiązania zmusiły nas do zbudowania własnej bazy
          danych, dlatego dziękujemy za cierpliwość i ciągle pracujemy dodając
          nowe filmy i seriale do naszego zbioru dzieł filmowych.
        </h4>
      </span>
    </div>
  );
};
export default MoviesSection;
