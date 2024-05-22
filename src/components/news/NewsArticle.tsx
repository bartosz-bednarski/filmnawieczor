import { ArticleContent } from "../../utils/data/newsArticles";
import MainHeader from "../ui/MainHeader";
import NewsArticleSection from "./NewsArticleSection";
import NewsBox from "./NewsBox";
import classes from "../ui/mainContainerWithAdverts.module.scss";
const NewsArticle: React.FC<{
  article: { title: string; articleContent: ArticleContent } | any;
}> = ({ article }) => {
  console.log(article);
  return (
    <div className={classes.container}>
      <MainHeader title={article.title} />
      <div className={classes["main-container"]}>
        <div className={classes["main-container__advert-box"]}> </div>
        <div className={classes["main-container__content-container"]}>
          {article.articleContent.map((section) => (
            <NewsArticleSection section={section} />
          ))}
        </div>
        <div className={classes["main-container__advert-box"]}> </div>
      </div>
    </div>
  );
};

export default NewsArticle;
