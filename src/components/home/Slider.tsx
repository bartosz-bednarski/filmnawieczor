import classes from "./home.module.scss";
const Slider = ({ image }) => {
  const sliderImage = require(`../../assets/home/${image}`);
  console.log(image);
  return (
    <div className={classes["slider"]}>
      <img className={classes["slider__image"]} src={sliderImage} />
    </div>
  );
};
export default Slider;
