import classes from "./newsSection.module.scss";
const SingleNews = ({ title, image }) => {
  const newsCoverImage = require(`../../../assets/news/${image}`);
  return (
    <div
      className={
        classes[
          "home-container__news-section-container__news-box__single-news-box"
        ]
      }
    >
      <img src={newsCoverImage} alt="article cover" />
      <span
        className={
          classes[
            "home-container__news-section-container__news-box__single-news-box__title"
          ]
        }
      >
        {title}
      </span>
    </div>
  );
};
export default SingleNews;
