import { NavLink } from "react-router-dom";
import classes from "./newsSection.module.scss";
const SingleNews = ({ title, image, url }) => {
  const newsCoverImage = require(`../../../assets/news/${image}`);
  return (
    <NavLink to={url}>
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
    </NavLink>
  );
};
export default SingleNews;
