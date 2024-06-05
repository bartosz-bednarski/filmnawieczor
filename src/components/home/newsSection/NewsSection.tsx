import { NEWS_ARTICLES } from "../../../utils/data/newsArticles";
import MainHeader from "../../ui/MainHeader";
import classes from "./newsSection.module.scss";
import SingleNews from "./SingleNews";
import { useState, useEffect } from "react";
import { getLatestNews } from "../../../api/homePage";
const NewsSection = () => {
  const [latestNews, setLatestNews] = useState([]);
  const getLatestNewsHandler = async () => {
    const latestNewsFetched = await getLatestNews();
    setLatestNews(latestNewsFetched);
  };
  useEffect(() => {
    getLatestNewsHandler();
  }, []);
  return (
    <div className={classes["home-container__news-section-container"]}>
      <MainHeader title="Aktualności" />
      <div
        className={classes["home-container__news-section-container__news-box"]}
      >
        {latestNews.map((news) => (
          <SingleNews
            title={news.title}
            image={news.image_cover}
            key={news.id}
            url={`/aktualnosci/artykul/${news.url}`}
          />
        ))}
      </div>
    </div>
  );
};
export default NewsSection;
