import React from "react";
import * as classes from "./movieDetails.module.scss";
import * as layoutClasses from "../../ui/mainContainerWithAdverts500ad.module.scss";
import { useLoaderData } from "react-router-dom";
import { MovieDetails as MovieDetailsType } from "api/movies";
import RowBoxCategories from "./RowBoxCategories";
const MovieDetails: React.FC = () => {
  const loaderData = useLoaderData() as MovieDetailsType;
  const coverImage =
    require(`../../../assets/movies/details/${loaderData.image_cover}`).default;
  return (
    <div className={layoutClasses.container}>
      <div className={layoutClasses["main-container"]}>
        <div className={layoutClasses["main-container__advert-box"]}> </div>
        <div className={layoutClasses["main-container__content-container"]}>
          <div className={classes["movieDetails"]}>
            <div className={classes["movieDetails__top-container"]}>
              <h1 className={classes["movieDetails__top-container__title"]}>
                {loaderData.name}
              </h1>
              <img
                src={coverImage}
                className={classes["movieDetails__top-container__image"]}
                alt={loaderData.name}
                title={loaderData.name}
                width={620}
                height={400}
                loading="eager"
              />
            </div>
            <div className={classes["movieDetails__categories-box"]}>
              <RowBoxCategories
                type="button"
                title="Miejsce akcji"
                text={loaderData.action_place.split(",")}
              />
              <RowBoxCategories
                type="static"
                title="Czas akcji"
                text={String(loaderData.action_time)}
              />
              <RowBoxCategories
                type="button"
                title="Gatunek"
                text={loaderData.category.split(",")}
              />
              <RowBoxCategories
                type="static"
                title="Rok produkcji"
                text={String(loaderData.production_year)}
              />
              <RowBoxCategories
                type="static"
                title="Długość"
                text={String(loaderData.movie_length)}
              />
              <RowBoxCategories
                type="static"
                title="Ocena"
                text={loaderData.rating}
              />
            </div>
            <span className={classes["movieDetails__description"]}>
              {loaderData.description}
            </span>
            <div className={classes["movieDetails__youtube-box"]}>
              {" "}
              <iframe
                width="560"
                height="315"
                src={loaderData.url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          ;
        </div>
        <div className={layoutClasses["main-container__advert-box"]}> </div>
      </div>
    </div>
  );
};

export default MovieDetails;
