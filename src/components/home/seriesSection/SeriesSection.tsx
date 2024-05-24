import { SERIES } from "../../../utils/data/series";
import MainHeader from "../../ui/MainHeader";
import classes from "./seriesSection.module.scss";
import SingleSerie from "./SingleSerie";

const SeriesSection = () => {
  const seriesToDisplay = SERIES.slice(
    SERIES.length - 8,
    SERIES.length
  ).reverse();
  return (
    <div className={classes["home-container__series-section-container"]}>
      <MainHeader title="Nowe seriale w bazie danych" />
      <div
        className={
          classes["home-container__series-section-container__series-box"]
        }
      >
        {seriesToDisplay.map((serie) => (
          <SingleSerie title={serie.name} image={serie.image_cover} />
        ))}
      </div>
    </div>
  );
};
export default SeriesSection;
