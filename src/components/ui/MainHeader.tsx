import React from "react";
import * as classes from "./mainHeader.module.scss";
const MainHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className={classes["header-container"]}>
      <h1>{title}</h1>
    </div>
  );
};
export default MainHeader;
