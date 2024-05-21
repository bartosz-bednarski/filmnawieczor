import { serie } from "../../utils/data/series";
import CategoryText from "./CategoryText";
import classes from "./serie.module.scss";
import star from "../../assets/star.png";
const Serie: React.FC<{ serie: serie }> = ({ serie }) => {
  const serieCoverImage = require(`../../assets/movies/${serie.image_cover}`);
  // const privateRyan = require("../../assets/movies/saving-private-ryan.png");
  return (
    <div className={classes["container"]}>
      <img
        src={serieCoverImage}
        alt="movie image"
        className={classes["container__main-img"]}
      />
      <div className={classes["container__content-box"]}>
        <h2>{serie.name}</h2>
        <CategoryText
          title={serie.description.opis.title}
          text={serie.description.opis.value}
        />
        <CategoryText
          title={serie.description.miejsce_akcji.title}
          text={serie.description.miejsce_akcji.value}
        />
        <CategoryText
          title={serie.description.czas_akcji.title}
          text={serie.description.czas_akcji.value}
        />
        <CategoryText
          title={serie.description.gatunek.title}
          text={serie.description.gatunek.value}
        />
        <CategoryText
          title={serie.description.rok_produkcji.title}
          text={serie.description.rok_produkcji.value}
        />
        <CategoryText
          title={serie.description.dlugosc_filmu.title}
          text={serie.description.dlugosc_filmu.value}
        />
      </div>
      <div className={classes["container__rating-box"]}>
        <span className={classes["container__rating-box__rate"]}>
          <img src={star} width={40} height={40} />{" "}
          {serie.description.ocena.toFixed(1)}
        </span>
      </div>
    </div>
  );
};

export default Serie;
