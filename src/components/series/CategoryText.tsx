import React from "react";
import * as classes from "./movie.module.scss";

const CategoryText: React.FC<{ title: string; text: string }> = ({
  title,
  text,
}) => {
  return (
    <span className={classes["container__content-box__cat-box"]}>
      <span className={classes["container__content-box__cat-box__cat-bold"]}>
        {title}
      </span>
      <span className={classes["container__content-box__cat-box__text"]}>
        {text}
      </span>
    </span>
  );
};

export default CategoryText;
