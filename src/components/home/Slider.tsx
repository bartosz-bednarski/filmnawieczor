import classes from "./home.module.scss";
const Slider = ({ image }) => {
  const sliderImage = require(`../../assets/home/${image}.png`);
  const sliderImage1000pxW = require(`../../assets/home/${image}-1000w.png`);
  const sliderImage680pxW = require(`../../assets/home/${image}-680w.png`);
  console.log(image);
  return (
    <div className={classes["home-container__slider-container__slider"]}>
      <img
        className={classes["home-container__slider-container__slider__image"]}
        src={sliderImage}
      />
      <img
        className={
          classes["home-container__slider-container__slider__image-1000pxW"]
        }
        src={sliderImage1000pxW}
      />
      <img
        className={
          classes["home-container__slider-container__slider__image-680pxW"]
        }
        src={sliderImage680pxW}
      />
    </div>
  );
};
export default Slider;
