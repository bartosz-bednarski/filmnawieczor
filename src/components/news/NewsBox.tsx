import classes from "./newsBox.module.scss";
const NewsBox = () => {
  const newsCoverImage = require("../../assets/news/5-filmow-wojennych-z-lat-90.webp");
  return (
    <div className={classes["newsBox-container"]}>
      <div className={classes["newsBox-container__title"]}>
        <h3>5 filmów wojennych z lat 90, które warto zobaczyć</h3>
      </div>
      <div className={classes["newsBox-container__box"]}>
        <img
          src={newsCoverImage}
          width={325}
          className={classes["newsBox-container__box__image"]}
        />
        <div className={classes["newsBox-container__box__text"]}>
          Pamiętacie te czasy gdy w salonie całą rodziną przy obiedzie oglądało
          się stare filmy z lat 90?
          <br />
          Dzisiaj przedstawimy wam 5 filmów wojennych z XX wieku, które naszym
          zdaniem warto zobaczyć.
        </div>
      </div>
    </div>
  );
};
export default NewsBox;
