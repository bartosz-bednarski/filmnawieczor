import React from "react";
import * as classes from "./ui.module.scss";
const CategoryDetail: React.FC<{ title: string }> = ({ title }) => {
  return <div className={classes["categoryDetail"]}>{title}</div>;
};
export default CategoryDetail;
