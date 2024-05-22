import { useNavigate } from "react-router-dom";
import { NEWS_ARTICLES } from "../../utils/data/newsArticles";
import classes from "../ui/mainContainerWithAdverts.module.scss";
import MainHeader from "../ui/MainHeader";
import NewsBox from "./NewsBox";
const News = () => {
  const navigate = useNavigate();
  const newsCoverImage = require("../../assets/news/5-filmow-wojennych-z-lat-90.webp");
  return (
    <div className={classes.container}>
      <MainHeader title="Aktualności" />
      <div className={classes["main-container"]}>
        <div className={classes["main-container__advert-box"]}> </div>
        <div className={classes["main-container__content-container"]}>
          {NEWS_ARTICLES.map((article) => (
            <NewsBox
              coverTitle={article.coverContent.coverTitle}
              coverImage={article.coverContent.coverImage}
              coverContent={article.coverContent.coverContent}
              onClick={() => navigate(`/aktualnosci/artykul/${article.url}`)}
            />
          ))}
        </div>
        <div className={classes["main-container__advert-box"]}> </div>
      </div>
    </div>
  );
};
export default News;
