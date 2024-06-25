import React from "react";
import * as classes from "./ui.module.scss";
const CategoryName: React.FC<{ title: string }> = ({ title }) => {
  return <div className={classes["categoryName"]}>{title}</div>;
};
export default CategoryName;
