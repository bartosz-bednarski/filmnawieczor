import classes from "./home.module.scss";
const Slider = ({ image }) => {
  const sliderImage = require(`../../assets/home/${image}`);
  console.log(image);
  return (
    <div className={classes["home-container__slider-container__slider"]}>
      <img
        className={classes["home-container__slider-container__slider__image"]}
        src={sliderImage}
      />
    </div>
  );
};
export default Slider;
