import React from "react";
import { useEffect, useState } from "react";
import * as classes from "./home.module.scss";
const Slider: React.FC<{ image: string }> = ({ image }) => {
  const [updated, setUpdated] = useState(false);
  useEffect(() => {
    setUpdated(true);
    setTimeout(() => {
      setUpdated(false);
    }, 50);
    // if (imgClasses === "home-container__slider-container__slider") {
    //   setTimeout(() => {
    //     setImgClasses("home-container__slider-container__slider-2");
    //   }, 20);
    // } else {
    //   setTimeout(() => {
    //     setImgClasses("home-container__slider-container__slider");
    //   }, 20);
    // }
  }, [image]);
  const sliderImage = require(`../../assets/home/${image}.webp`).default;
  const sliderImage1000pxW =
    require(`../../assets/home/${image}-1000w.webp`).default;
  const sliderImage680pxW =
    require(`../../assets/home/${image}-680w.webp`).default;

  return (
    <div
      className={
        classes[
          !updated
            ? "home-container__slider-container__slider"
            : "home-container__slider-container__slider-blank"
        ]
      }
      id="slider-box"
    >
      {!updated && (
        <>
          {" "}
          <img
            className={
              classes["home-container__slider-container__slider__image"]
            }
            src={sliderImage}
            alt="slider cover"
            width={1920}
            height={983}
            title="Skorzystaj z naszej bazy filmów."
            loading="eager"
          />
          <img
            className={
              classes["home-container__slider-container__slider__image-1000pxW"]
            }
            src={sliderImage1000pxW}
            alt="slider cover"
            width={1920}
            height={983}
            title="Skorzystaj z naszej bazy filmów."
            loading="eager"
          />
          <img
            className={
              classes["home-container__slider-container__slider__image-680pxW"]
            }
            src={sliderImage680pxW}
            alt="slider cover"
            width={1920}
            height={983}
            title="Skorzystaj z naszej bazy filmów."
            loading="eager"
          />
        </>
      )}
    </div>
  );
};
export default Slider;
