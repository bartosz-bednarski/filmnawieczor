import { ArticleContent } from "../../utils/data/newsArticles";
import MainHeader from "../ui/MainHeader";
import NewsArticleSection from "./NewsArticleSection";
import NewsBox from "./NewsBox";
import classes from "../ui/mainContainerWithAdverts.module.scss";
import { useLoaderData } from "react-router-dom";
import { News_details } from "news";
const NewsArticle: React.FC = () => {
  const newsDetails: News_details | any = useLoaderData();

  console.log(newsDetails);
  return (
    <div className={classes.container}>
      <MainHeader title={newsDetails.news_title} />
      <div className={classes["main-container"]}>
        <div className={classes["main-container__advert-box"]}> </div>
        <div className={classes["main-container__content-container"]}>
          {newsDetails.news_details_data.map((section) => (
            <NewsArticleSection section={section} />
          ))}
        </div>
        <div className={classes["main-container__advert-box"]}> </div>
      </div>
    </div>
  );
};

export default NewsArticle;
