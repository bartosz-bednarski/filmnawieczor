import React from "react";
import * as classes from "./h2Banner.module.scss";
const H2Banner: React.FC<{
  header: string;
  secondaryHeader: string;
  h2Styles?: any;
  h3Styles?: any;
}> = ({ header, secondaryHeader, h2Styles, h3Styles }) => {
  return (
    <div className={classes["header-container"]}>
      <h2 className={classes["header-container__header"]} style={h2Styles}>
        {header}
      </h2>
      {secondaryHeader !== "" && (
        <h3
          className={classes["header-container__secondary-header"]}
          style={h3Styles}
        >
          {secondaryHeader}
        </h3>
      )}
    </div>
  );
};
export default H2Banner;
