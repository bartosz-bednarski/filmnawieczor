import React from "react";
import * as classes from "./mainHeader.module.scss";
const MainHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className={classes["header-container"]}>
      <div className={classes["header-container__side-boxes"]}></div>
      <div className={classes["header-container__text-box"]}>
        <h1>{title}</h1>
      </div>
      <div className={classes["header-container__side-boxes"]}></div>
    </div>
  );
};
export default MainHeader;
