import { NEWS_ARTICLES } from "../../../utils/data/newsArticles";
import MainHeader from "../../ui/MainHeader";
import classes from "./newsSection.module.scss";
import SingleNews from "./SingleNews";
const NewsSection = () => {
  return (
    <div className={classes["home-container__news-section-container"]}>
      <MainHeader title="Aktualności" />
      <div
        className={classes["home-container__news-section-container__news-box"]}
      >
        {NEWS_ARTICLES.map((news) => (
          <SingleNews
            title={news.coverContent.coverTitle}
            image={news.coverContent.coverImage}
          />
        ))}
      </div>
    </div>
  );
};
export default NewsSection;
