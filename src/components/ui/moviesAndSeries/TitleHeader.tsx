import React from "react";
import * as classes from "./ui.module.scss";
const TitleHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className={classes["titleHeader"]}>
      <h1 className={classes["titleHeader__header"]}>{title}</h1>
    </div>
  );
};
export default TitleHeader;
