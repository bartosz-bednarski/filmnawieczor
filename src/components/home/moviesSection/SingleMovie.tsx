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
        alt="movie cover"
        width={175}
        height={255}
        className={
          classes[
            "home-container__movies-section-container__movies-box__single-movie-box__image"
          ]
        }
        title={title}
        loading="lazy"
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
