import React from "react";
import * as classes from "./icons.module.scss";
const TvIcon: React.FC<{ status: string; onClick: () => void }> = ({
  status,
  onClick,
}) => {
  return (
    <div className={classes["tvicon-box"]} onClick={() => onClick()}>
      <div
        className={
          status === "active"
            ? classes["tvicon-box__content-box-active"]
            : classes["tvicon-box__content-box-inactive"]
        }
      >
        {status === "active" ? "PLAY" : "STOP"}
      </div>
      <div className={classes["tvicon-box__bottom-frame"]}>
        <div className={classes["tvicon-box__bottom-frame__buttons-box"]}>
          <span
            className={classes["tvicon-box__bottom-frame__buttons-box__button"]}
          ></span>
        </div>
      </div>
    </div>
  );
};
export default TvIcon;
