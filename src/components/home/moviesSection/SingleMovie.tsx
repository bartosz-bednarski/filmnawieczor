import classes from "./moviesSection.module.scss";
const SingleMovie = ({ title, image }) => {
  const newsCoverImage = require(`../../../assets/movies/${image}`);
  return (
    <div
      className={
        classes[
          "home-container__movies-section-container__movies-box__single-movie-box"
        ]
      }
    >
      <img
        src={newsCoverImage}
        alt="article cover"
        className={
          classes[
            "home-container__movies-section-container__movies-box__single-movie-box__image"
          ]
        }
      />
      <span
        className={
          classes[
            "home-container__movies-section-container__movies-box__single-movie-box__title"
          ]
        }
      >
        {title}
      </span>
    </div>
  );
};
export default SingleMovie;