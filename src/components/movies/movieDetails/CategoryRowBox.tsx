import React from "react";
import CategoryDetail from "../../ui/moviesAndSeries/CategoryDetail";
import CategoryName from "../../ui/moviesAndSeries/CategoryName";
import * as classes from "./movieDetails.module.scss";
const CategoryRowBox: React.FC<{ category: string; details: string }> = ({
  category,
  details,
}) => {
  const detailsArray = details.split(",");
  return (
    <div className={classes["movieDetails__top-container__content__row-box"]}>
      <CategoryName title={category} />
      {detailsArray.map((detail) => (
        <CategoryDetail title={detail} />
      ))}
    </div>
  );
};

export default CategoryRowBox;
