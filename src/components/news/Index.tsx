import React, { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import * as classes from "../ui/mainContainerWithAdverts.module.scss";
import MainHeader from "../ui/MainHeader";
import NewsBox from "./NewsBox";
const News: React.FC = () => {
  const navigate = useNavigate();
  const last10News: any = useLoaderData();
  // useEffect(() => {
  //   if (last10News[0] === undefined) {
  //     navigate("/error", { state: { message: "Failed to fetch" } });
  //   }
  // }, []);
  return (
    <div className={classes.container}>
      <MainHeader title="Aktualności" />
      <div className={classes["main-container"]}>
        <div className={classes["main-container__advert-box"]}> </div>
        <div className={classes["main-container__content-container"]}>
          {last10News.length > 0 &&
            last10News.map((news) => (
              <NewsBox
                key={news.title}
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
