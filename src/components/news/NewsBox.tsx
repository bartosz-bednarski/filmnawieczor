import classes from "./newsBox.module.scss";
const NewsBox: React.FC<{
  coverTitle: string;
  coverImage: string;
  coverContent: { paragraph: string }[];
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
          {coverContent.map((line) => (
            <p>{line.paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default NewsBox;
