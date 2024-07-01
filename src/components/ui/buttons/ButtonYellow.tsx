import React from "react";
import * as classes from "./buttons.module.scss";
const ButtonYellow: React.FC<{
  value: string | number;
  onClick: any;
}> = ({ value, onClick }) => {
  return (
    <div className={classes["button-yellow"]} onClick={() => onClick()}>
      {value}
    </div>
  );
};
export default ButtonYellow;
