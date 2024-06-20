import React from "react";
import CategoryText from "./CategoryText";
import * as classes from "./movie.module.scss";
import star from "../../assets/star.png";
import { getLast10SeriesSeriesDataObjectType } from "api/series";
const Serie: React.FC<{ serie: getLast10SeriesSeriesDataObjectType }> = ({
  serie,
}) => {
  const movieCoverImage =
    require(`../../assets/series/${serie.image_cover}`).default;

  return (
    <>
      <div className={classes["container"]} id={`${serie.id}`}>
        <img
          src={movieCoverImage}
          alt={`${serie.name} serie cover`}
          className={classes["container__main-img"]}
          width={175}
          height="auto"
          title={serie.name}
          loading="eager"
        />
        <div className={classes["container__content-box"]}>
          <div className={classes["container__content-box__header-box"]}>
            <h3>{serie.name}</h3>
            <div
              className={
                classes["container__content-box__header-box__rating-box"]
              }
            >
              <span
                className={
                  classes[
                    "container__content-box__header-box__rating-box__rate"
                  ]
                }
              >
                <img
                  src={star}
                  width={40}
                  height={40}
                  alt="star"
                  title="star"
                  loading="eager"
                />{" "}
                {serie.rating}
              </span>
            </div>
          </div>

          <CategoryText title="Opis:" text={serie.description} />
          <div className={classes["container__content-box__content-details"]}>
            <CategoryText title="Miejsce akcji:" text={serie.action_place} />
            <CategoryText
              title="Czas akcji:"
              text={String(serie.action_time)}
            />
            <CategoryText title="Gatunek:" text={serie.category} />
            <CategoryText
              title="Rok produkcji:"
              text={String(serie.production_year)}
            />
            <CategoryText title="Sezony:" text={String(serie.seasons_count)} />
          </div>
        </div>
      </div>
      <div className={classes["container-mobile"]}>
        <div className={classes["container-mobile__top-box"]}>
          <img
            src={movieCoverImage}
            alt={`${serie.name} serie cover`}
            className={classes["container-mobile__top-box__main-img"]}
            width={120}
            height={175}
            title={serie.name}
            loading="eager"
          />
          <div className={classes["container-mobile__top-box__header-box"]}>
            <h3>{serie.name}</h3>
            <div
              className={
                classes["container-mobile__top-box__header-box__rating-box"]
              }
            >
              <span
                className={
                  classes[
                    "container-mobile__top-box__header-box__rating-box__rate"
                  ]
                }
              >
                <img
                  src={star}
                  width={40}
                  height={40}
                  alt="star"
                  title="star"
                  loading="eager"
                />{" "}
                {serie.rating}
              </span>
            </div>
          </div>
        </div>
        <div className={classes["container-mobile__bottom-box"]}>
          <CategoryText title="Opis:" text={serie.description} />
          <CategoryText title="Miejsce akcji:" text={serie.action_place} />
          <CategoryText title="Czas akcji:" text={String(serie.action_time)} />
          <CategoryText title="Gatunek:" text={serie.category} />
          <CategoryText
            title="Rok produkcji:"
            text={String(serie.production_year)}
          />
          <CategoryText title="Sezony:" text={String(serie.seasons_count)} />
        </div>
      </div>
    </>
  );
};

export default Serie;
