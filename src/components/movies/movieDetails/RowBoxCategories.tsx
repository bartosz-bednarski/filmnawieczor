import React from "react";
import * as classes from "./rowBoxCategories.module.scss";
const RowBoxCategories: React.FC<{
  title: string;
  text: any;
  type: "button" | "static";
}> = ({ title, text, type }) => {
  return (
    <div className={classes["category-box"]}>
      <span className={classes["category-box__category"]}>{title}</span>
      {type === "static" && (
        <span className={classes["category-box__category-item-bg"]}>
          <span className={classes["category-box__category-item"]}>{text}</span>
        </span>
      )}
      <div className={classes["category-box__category-items-box"]}>
        {type === "button" &&
          text.map((item: String[]) => (
            <span className={classes["category-box__category-item-bg"]}>
              <span className={classes["category-box__category-item"]}>
                {item}
              </span>
            </span>
          ))}
      </div>
    </div>
  );
};

export default RowBoxCategories;