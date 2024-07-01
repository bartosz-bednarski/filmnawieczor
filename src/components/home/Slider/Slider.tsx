import React from "react";
import { useEffect, useState } from "react";
import * as classes from "./slider.module.scss";
import ButtonSlider from "../../ui/buttons/ButtonSlider";
const Slider: React.FC<{
  content: {
    image: string;
    text: { category: string; title: string; text: string };
    buttons: { url: string; title: string }[];
  };
}> = ({ content }) => {
  const [updated, setUpdated] = useState(false);
  useEffect(() => {
    setUpdated(true);
    setTimeout(() => {
      setUpdated(false);
    }, 50);
  }, [content]);
  const sliderImage =
    require(`../../../assets/home/${content.image}.png`).default;
  const sliderImage560px =
    require(`../../../assets/home/${content.image}-560px.webp`).default;

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
            width={904}
            height={626}
            title="Skorzystaj z naszej bazy filmów."
            loading="eager"
          />
          <img
            className={
              classes["home-container__slider-container__slider__image-560px"]
            }
            src={sliderImage560px}
            alt="slider cover"
            width={283}
            height={326}
            title="Skorzystaj z naszej bazy filmów."
            loading="eager"
          />
          <div
            className={
              classes["home-container__slider-container__slider__text-box"]
            }
          >
            <span
              className={
                classes[
                  "home-container__slider-container__slider__text-box__category"
                ]
              }
            >
              {content.text.category}
            </span>
            <h1>{content.text.title}</h1>
            <span
              className={
                classes[
                  "home-container__slider-container__slider__text-box__text"
                ]
              }
            >
              {content.text.text}
            </span>
            <div
              className={
                classes[
                  "home-container__slider-container__slider__text-box__buttons-row"
                ]
              }
            >
              {content.buttons.map((button) => (
                <ButtonSlider url={button.url} title={button.title} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Slider;
