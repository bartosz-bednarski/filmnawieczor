import { News_article_data } from "news";
import { ArticleSection } from "../../utils/data/newsArticles";
import parse from "html-react-parser";
import classes from "./newsArticleSection.module.scss";
const NewsArticleSection: React.FC<{ section: News_article_data }> = ({
  section,
}) => {
  const image = require(`../../assets/movies/${section.article_image}`);
  return (
    <div className={classes["article-list-item-box"]}>
      <h2 className={classes["article-list-item-box__header"]}>
        {section.article_title}
      </h2>
      <div className={classes["article-list-item-box__content-box"]}>
        <img
          src={image}
          width={205}
          height={320}
          alt="check"
          className="article-list-item-box__content-box__image"
        />
        <div className={classes["article-list-item-box__content-box__text"]}>
          {parse(section.article_content)}
          {/* {section.article_content.map((paragraph) => (
            <p
              className={
                classes["article-list-item-box__content-box__text__paragraph"]
              }
            >
              {paragraph.paragraph}
            </p>
          ))} */}
        </div>
      </div>
    </div>
  );
};
export default NewsArticleSection;
