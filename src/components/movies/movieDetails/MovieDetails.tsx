import React from "react";
import * as classes from "./movieDetails.module.scss";
import * as layoutClasses from "../../ui/mainContainerWithAdverts500ad.module.scss";
import image from "../../../assets/movies/details/bekarty-wojny-details.webp";
import TitleHeader from "../../ui/moviesAndSeries/TitleHeader";
import CategoryRowBox from "./CategoryRowBox";
import { useLoaderData } from "react-router-dom";
import { MovieDetailsLoaderTypes } from "movies";
const MovieDetails: React.FC = () => {
  const loaderData = useLoaderData() as MovieDetailsLoaderTypes;
  const data = loaderData;
  const actionTime =
    data.action_time_start === data.action_time_end
      ? `${data.action_time_start}`
      : `${data.action_time_start}-${data.action_time_end}`;
  const movieLength = new Date(data.movie_length * 1000)
    .toISOString()
    .slice(11, 19);
  return (
    <div className={layoutClasses.container}>
      <div className={layoutClasses["main-container"]}>
        <div className={layoutClasses["main-container__advert-box"]}> </div>
        <div className={layoutClasses["main-container__content-container"]}>
          <div className={classes["movieDetails"]}>
            <div className={classes["movieDetails__top-container"]}>
              <span className={classes["mobile"]}>
                <TitleHeader title={data.name} />
              </span>
              <img
                src={image}
                className={classes["movieDetails__top-container__image"]}
              />
              <div className={classes["movieDetails__top-container__content"]}>
                <span className={classes["desktop"]}>
                  <TitleHeader title={data.name} />
                </span>
                <CategoryRowBox
                  category="Miejsce akcji"
                  details={data.action_place}
                />
                <CategoryRowBox category="Czas akcji" details={actionTime} />
                <CategoryRowBox category="Gatunek" details={data.category} />
                <CategoryRowBox
                  category="Rok produkcji"
                  details={String(data.production_year)}
                />
                <CategoryRowBox category="Długość" details={movieLength} />
                <CategoryRowBox category="Ocena" details={data.rating} />
              </div>
            </div>
            <span className={classes["movieDetails__description"]}>
              {data.description}
            </span>
            <div className={classes["movieDetails__youtube-box"]}>
              {" "}
              <iframe
                width="560"
                height="315"
                src={data.url}
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
