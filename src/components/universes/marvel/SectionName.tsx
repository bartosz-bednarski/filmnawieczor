import React from "react";
import * as classes from "./marvelUniverse.module.scss";
const SectionName: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className={classes["section-title-container"]}>
      <h2 className={classes["section-title-container__title"]}>{title}</h2>
    </div>
  );
};
export default SectionName;
