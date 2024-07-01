import React from "react";
import { useNavigate } from "react-router-dom";
import * as classes from "./buttons.module.scss";
const ButtonSlider: React.FC<{ url: string; title: string }> = ({
  url,
  title,
}) => {
  const navigate = useNavigate();
  return (
    <div
      role="button"
      className={classes["button-slider"]}
      onClick={() => navigate(url)}
    >
      {title}
    </div>
  );
};

export default ButtonSlider;
