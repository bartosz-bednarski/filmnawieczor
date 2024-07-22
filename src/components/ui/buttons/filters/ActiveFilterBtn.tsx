import React from "react";
import * as classes from "../buttons.module.scss";
const ActiveFilterBtn: React.FC<{
  value: string | number;
  onClick: any;
  key: number | string;
}> = ({ value, onClick, key }) => {
  return (
    <div className={classes["active-filter-box"]} onClick={() => onClick()}>
      <span className={classes["active-filter-box__content"]}>{value}</span>
    </div>
  );
};
export default ActiveFilterBtn;
