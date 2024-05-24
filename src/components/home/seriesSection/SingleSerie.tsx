import classes from "./seriesSection.module.scss";
const SingleSerie = ({ title, image }) => {
  const newsCoverImage = require(`../../../assets/movies/${image}`);
  return (
    <div
      className={
        classes[
          "home-container__series-section-container__series-box__single-serie-box"
        ]
      }
    >
      <img
        src={newsCoverImage}
        alt="article cover"
        className={
          classes[
            "home-container__series-section-container__series-box__single-serie-box__image"
          ]
        }
      />
      <span
        className={
          classes[
            "home-container__series-section-container__series-box__single-serie-box__title"
          ]
        }
      >
        {title}
      </span>
    </div>
  );
};
export default SingleSerie;
