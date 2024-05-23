import classes from "./home.module.scss";
import Slider from "./Slider";
import { useState, useEffect } from "react";
import TvIcon from "../ui/icons/TvIcon";
const Home = () => {
  const slides = [
    { image: "slider-movies-and-series.png" },
    { image: "slider-news.png" },
  ];
  const [sliderImage, setSliderImage] = useState({
    image: slides[0].image,
    index: 0,
  });
  const changeSlideOnClick = (index) => {
    setSliderImage({ image: slides[index].image, index: index });
  };
  useEffect(() => {
    const sliderHandler = () => {
      if (sliderImage.index < slides.length - 1) {
        setSliderImage({
          image: slides[sliderImage.index + 1].image,
          index: sliderImage.index + 1,
        });
      }
      if (sliderImage.index === slides.length - 1) {
        setSliderImage({ image: slides[0].image, index: 0 });
      }
    };
    const interval = setInterval(() => {
      sliderHandler();
    }, 6000);
    console.log(sliderImage);
    //Clearing the interval
    return () => clearInterval(interval);
  }, [sliderImage]);

  return (
    <div className={classes["home-container"]}>
      <Slider image={sliderImage.image} />
      <div className={classes["active-slide-box"]}>
        <TvIcon
          status={sliderImage.index === 0 ? "active" : "inactive"}
          onClick={() => changeSlideOnClick(0)}
        />
        <TvIcon
          status={sliderImage.index === 1 ? "active" : "inactive"}
          onClick={() => changeSlideOnClick(1)}
        />
      </div>
    </div>
  );
};
export default Home;