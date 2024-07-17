import React from "react";
import H2Banner from "../../ui/H2Banner";
import * as classes from "./seriesSection.module.scss";
import SingleSerie from "./SingleSerie";
import { useState, useEffect } from "react";
import { getLatestSeries } from "../../../api/home";
import { useNavigate } from "react-router-dom";
import { LatestSerie } from "api/home";
const SeriesSection: React.FC = () => {
  const navigate = useNavigate();
  const [latestSeries, setLatestSeries] = useState<[] | LatestSerie[]>([]);
  const getLatestSeriesHandler = async () => {
    const latestSeriesFetched = await getLatestSeries();
    if ("status" in latestSeriesFetched) {
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
      <H2Banner header="Nowe seriale" secondaryHeader="w bazie danych" />
      <div
        className={
          classes["home-container__series-section-container__series-box"]
        }
      >
        {latestSeries.map((serie: LatestSerie) => (
          <SingleSerie
            title={serie.name}
            image={serie.image_cover}
            description={serie.description}
            key={serie.id}
          />
        ))}
      </div>
      <span
        className={
          classes["home-container__series-section-container__text-box"]
        }
      >
        <h4>To nie ten dzień na film? Wolisz obejrzeć coś krótszego?</h4>
        <h3> Wybierz serial!</h3>
        Mamy nadzieję, że nasze filtry dobrze się sprawdzają i będzie to jeden z
        tych przypadków, gdzie siadasz obejrzeć na szybko jeden odcinek, a
        kończysz o 2 rano bo pasowałoby jednak trochę pospać. Zestaw filtrów
        jest taki sam jak w bazie filmów z dodatkiem wyboru ilości sezonów, żeby
        mieć chociaż jakiś minimalny wpływ na zarządzanie swoim czasem.
        <h4>
          Obecnie skupiamy się na aktualizowaniu bazy filmów i na pracach
          technicznych. Jak tylko to ogarniemy zabieramy się za seriale. W
          przyszłości dostępne będą szczegółowe opisy seriali, zwiastuny itp.
          Aktualnie informacje jak i ilość seriali są mocno okrojone. Wpadajcie
          co jakiś czas żeby zobaczyć jak idą postępy.
        </h4>
      </span>
    </div>
  );
};
export default SeriesSection;
