import React from "react";
import * as classes from "./newsSection.module.scss";
import SingleNews from "./SingleNews";
import { useState, useEffect } from "react";
import { getLatestNews } from "../../../api/home";
import { useNavigate } from "react-router-dom";
import { LatestNews } from "api/home";
import H2Banner from "../../ui/H2Banner";
import backgroundImage from "../../../assets/home/bg-yellow.webp";
const NewsSection: React.FC = () => {
  const navigate = useNavigate();

  const [latestNews, setLatestNews] = useState<[] | LatestNews[]>([]);
  const getLatestNewsHandler = async () => {
    const latestNewsFetched = await getLatestNews();
    if ("status" in latestNewsFetched) {
      navigate("/error", { state: { message: latestNewsFetched.message } });
    } else {
      setLatestNews(latestNewsFetched);
    }
  };
  useEffect(() => {
    getLatestNewsHandler();
  }, []);
  return (
    <>
      <section className={classes["home-container__news-section-container"]}>
        <picture
          className={classes["home-container__news-section-container__picture"]}
        >
          <img
            src={backgroundImage}
            alt="news background"
            width={1920}
            height={1920}
            loading="eager"
          />
        </picture>
        <H2Banner
          header="Aktualności"
          secondaryHeader=""
          h2Styles={{ color: "#FFE500" }}
        />
        <div
          className={
            classes["home-container__news-section-container__news-box"]
          }
        >
          {latestNews.map((news: LatestNews) => (
            <SingleNews
              title={news.title}
              image={news.image_cover}
              key={news.id}
              url={`/aktualnosci/artykul/${news.url}`}
            />
          ))}
        </div>
      </section>
    </>
  );
};
export default NewsSection;
