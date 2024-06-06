import classes from "./newsBox.module.scss";
import parse from "html-react-parser";
const NewsBox: React.FC<{
  coverTitle: string;
  coverImage: string;
  coverContent: string;
  onClick: () => void;
}> = ({ coverTitle, coverImage, coverContent, onClick }) => {
  const newsCoverImage = require(`../../assets/news/${coverImage}`);
  return (
    <div className={classes["newsBox-container"]} onClick={onClick}>
      <div className={classes["newsBox-container__title"]}>
        <h3>{coverTitle}</h3>
      </div>
      <div className={classes["newsBox-container__box"]}>
        <img
          src={newsCoverImage}
          width={325}
          className={classes["newsBox-container__box__image"]}
          alt="news cover"
        />
        <div className={classes["newsBox-container__box__text"]}>
          {parse(coverContent)}
        </div>
      </div>
    </div>
  );
};
export default NewsBox;
