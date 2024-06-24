import React from "react";
import H2Banner from "../../ui/H2Banner";
import * as classes from "./seriesSection.module.scss";
import SingleSerie from "./SingleSerie";
import { useState, useEffect } from "react";
import { getLatestSeries } from "../../../api/homePage";
import { useNavigate } from "react-router-dom";
const SeriesSection: React.FC = () => {
  const navigate = useNavigate();
  const [latestSeries, setLatestSeries] = useState([]);
  const getLatestSeriesHandler = async () => {
    const latestSeriesFetched = await getLatestSeries();
    if (latestSeriesFetched.status === "error") {
      navigate("/error", { state: { message: latestSeriesFetched.message } });
    } else {
      setLatestSeries(latestSeriesFetched);
    }
  };
  useEffect(() => {
    getLatestSeriesHandler();
  }, []);
  return (
    <div className={classes["home-container__series-section-container"]}>
      <H2Banner title="Nowe seriale w bazie danych" />
      <div
        className={
          classes["home-container__series-section-container__series-box"]
        }
      >
        {latestSeries.map((movie) => (
          <SingleSerie
            title={movie.name}
            image={movie.image_cover}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
};
export default SeriesSection;
