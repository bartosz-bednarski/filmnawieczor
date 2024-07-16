import React from "react";
import * as classes from "./h2Banner.module.scss";
const H2Banner: React.FC<{ header: string; secondaryHeader: string }> = ({
  header,
  secondaryHeader,
}) => {
  return (
    <div className={classes["header-container"]}>
      <h2 className={classes["header-container__header"]}>{header}</h2>
      {secondaryHeader !== "" && (
        <h3 className={classes["header-container__secondary-header"]}>
          {secondaryHeader}
        </h3>
      )}
    </div>
  );
};
export default H2Banner;
