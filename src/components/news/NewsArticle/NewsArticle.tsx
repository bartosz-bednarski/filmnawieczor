import React from "react";
import MainHeader from "../../ui/MainHeader";
import NewsArticleSection from "./NewsArticleSection";
import * as classes from "../../ui/mainContainerWithAdverts.module.scss";
import { useLoaderData } from "react-router-dom";
import { NewsDetails } from "api/news";
const NewsArticle: React.FC = () => {
  const newsDetails = useLoaderData() as NewsDetails;

  return (
    <div className={classes.container}>
      <MainHeader title={newsDetails.news_title} />
      <div className={classes["main-container"]}>
        <div className={classes["main-container__advert-box"]}> </div>
        <div className={classes["main-container__content-container"]}>
          {newsDetails.news_details_data.map((section) => (
            <NewsArticleSection section={section} key={section.article_title} />
          ))}
        </div>
        <div className={classes["main-container__advert-box"]}> </div>
      </div>
    </div>
  );
};

export default NewsArticle;
