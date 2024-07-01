import React from "react";
import * as classes from "../buttons.module.scss";
const FilterBtn: React.FC<{
  value: string | number;
  onClick: any;
}> = ({ value, onClick }) => {
  return (
    <div className={classes["box"]} onClick={() => onClick()}>
      {value}
    </div>
  );
};
export default FilterBtn;
