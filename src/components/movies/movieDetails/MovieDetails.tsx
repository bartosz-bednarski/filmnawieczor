import React from "react";
import * as classes from "./movieDetails.module.scss";
import * as layoutClasses from "../../ui/mainContainerWithAdverts500ad.module.scss";
import TitleHeader from "../../ui/moviesAndSeries/TitleHeader";
import CategoryRowBox from "./CategoryRowBox";
import { useLoaderData } from "react-router-dom";
import { MovieDetailsLoaderTypes } from "movies";
const MovieDetails: React.FC = () => {
  const loaderData = useLoaderData() as MovieDetailsLoaderTypes;
  const coverImage =
    require(`../../../assets/movies/details/${loaderData.image_cover}`).default;
  return (
    <div className={layoutClasses.container}>
      <div className={layoutClasses["main-container"]}>
        <div className={layoutClasses["main-container__advert-box"]}> </div>
        <div className={layoutClasses["main-container__content-container"]}>
          <div className={classes["movieDetails"]}>
            <div className={classes["movieDetails__top-container"]}>
              <span className={classes["mobile"]}>
                <TitleHeader title={loaderData.name} />
              </span>
              <img
                src={coverImage}
                className={classes["movieDetails__top-container__image"]}
                alt={loaderData.name}
                title={loaderData.name}
                width={620}
                height={400}
                loading="eager"
              />
              <div className={classes["movieDetails__top-container__content"]}>
                <span className={classes["desktop"]}>
                  <TitleHeader title={loaderData.name} />
                </span>
                <CategoryRowBox
                  category="Miejsce akcji"
                  details={loaderData.action_place}
                />
                <CategoryRowBox
                  category="Czas akcji"
                  details={String(loaderData.action_time)}
                />
                <CategoryRowBox
                  category="Gatunek"
                  details={loaderData.category}
                />
                <CategoryRowBox
                  category="Rok produkcji"
                  details={String(loaderData.production_year)}
                />
                <CategoryRowBox
                  category="Długość"
                  details={String(loaderData.movie_length)}
                />
                <CategoryRowBox category="Ocena" details={loaderData.rating} />
              </div>
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
