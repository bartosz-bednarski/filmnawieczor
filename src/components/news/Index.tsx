import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { NEWS_ARTICLES } from "../../utils/data/newsArticles";
import classes from "../ui/mainContainerWithAdverts.module.scss";
import MainHeader from "../ui/MainHeader";
import NewsBox from "./NewsBox";
const News = () => {
  const navigate = useNavigate();
  const last10News: any = useLoaderData();
  const [newsToDisplay, setNewsToDisplay] = useState(last10News);
  console.log("last 10 news", last10News);
  return (
    <div className={classes.container}>
      <MainHeader title="Aktualności" />
      <div className={classes["main-container"]}>
        <div className={classes["main-container__advert-box"]}> </div>
        <div className={classes["main-container__content-container"]}>
          {newsToDisplay.map((news) => (
            <NewsBox
              coverTitle={news.title}
              coverImage={news.image_cover}
              coverContent={news.cover_content}
              onClick={() => navigate(`/aktualnosci/artykul/${news.url}`)}
            />
          ))}
        </div>
        <div className={classes["main-container__advert-box"]}> </div>
      </div>
    </div>
  );
};
export default News;
