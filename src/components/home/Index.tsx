import React from "react";
import * as classes from "./home.module.scss";
import Slider from "./Slider/Slider";
import { useState, useEffect } from "react";
import NewsSection from "./newsSection/NewsSection";
import MoviesSection from "./moviesSection/MoviesSection";
import SeriesSection from "./seriesSection/SeriesSection";
import playBack from "../../assets/play-back.png";
import playForward from "../../assets/play-forward.png";
const Home: React.FC = () => {
  const slides = [
    {
      image: "slider-movies-and-series",
      text: {
        category: "BAZA FILMÓW I SERIALI",
        title: "Nowe filtry dostępne",
        text: "Prezentujemy nowe, nietypowe filtry, które pomogą Wam w szukaniu filmów i seriali. Filtr miejsca akcji - lokalizacje krajów i krain, w których toczy się akcja.Filtr czasu akcji - dostępny w formie wyboru zakresu lat.",
      },
      buttons: [
        { url: "/filmy", title: "Baza filmów" },
        { url: "/seriale", title: "Baza seriali" },
      ],
    },
    {
      image: "slider-news",
      text: {
        category: "AKTUALNOŚCI",
        title: "5 starych filmów wojennych",
        text: "Pamiętacie te czasy gdy w salonie całą rodziną przy obiedzie oglądało się stare filmy? Dzisiaj przedstawimy wam 5 filmów wojennych z XX wieku, które naszym zdaniem warto zobaczyć.",
      },
      buttons: [
        {
          url: "/aktualnosci/artykul/5-starych-filmow-wojennych-1",
          title: "Przejdź do artykułu",
        },
      ],
    },
  ];
  const [sliderContent, setSliderContent] = useState({
    image: slides[0].image,
    text: slides[0].text,
    buttons: slides[0].buttons,
    index: 0,
  });
  const changeSlideOnClick = (index: number) => {
    setSliderContent({
      image: slides[index].image,
      text: slides[index].text,
      buttons: slides[index].buttons,
      index: index,
    });
  };
  useEffect(() => {
    const sliderHandler = () => {
      if (sliderContent.index < slides.length - 1) {
        setSliderContent({
          image: slides[sliderContent.index + 1].image,
          text: slides[sliderContent.index + 1].text,
          buttons: slides[sliderContent.index + 1].buttons,
          index: sliderContent.index + 1,
        });
      }
      if (sliderContent.index === slides.length - 1) {
        setSliderContent({
          image: slides[0].image,
          text: slides[0].text,
          buttons: slides[0].buttons,
          index: 0,
        });
      }
    };
    const interval = setInterval(() => {
      sliderHandler();
    }, 6000);
    //Clearing the interval
    return () => clearInterval(interval);
  }, [sliderContent]);
  return (
    <div className={classes["home-container"]}>
      <div className={classes["home-container__slider-container"]}>
        <Slider content={sliderContent} />
        <div
          className={
            classes["home-container__slider-container__active-slide-box"]
          }
        >
          <img
            src={playBack}
            width={26}
            height={26}
            role="button"
            alt="Play backward"
            title="Play backward"
            onClick={() => changeSlideOnClick(0)}
          />
          <img
            src={playForward}
            width={26}
            height={26}
            role="button"
            alt="Play forward"
            title="Play forward"
            onClick={() => changeSlideOnClick(1)}
          />
        </div>
      </div>
      <NewsSection />
      <MoviesSection />
      <SeriesSection />
    </div>
  );
};
export default Home;
