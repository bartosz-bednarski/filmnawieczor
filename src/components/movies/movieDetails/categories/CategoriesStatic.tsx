import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../redux/hooks";
import { setActivefilterMovie } from "../../../../redux/moviesFilters-slice";
import * as classes from "./categories.module.scss";
import * as universesStyles from "../universes.module.scss";
const CategoriesStatic: React.FC<{
  title: string;
  text: any;
  type: "button" | "static";
  universe: string;
  queryName?: string;
  queryValue?: string;
  catName?: string;
}> = ({ title, text, type, universe, queryName, queryValue, catName }) => {
  const naviagate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <div
      className={`${classes["category-box"]} ${
        universesStyles[`${universe}-category-box`]
      }`}
    >
      <span
        className={`${classes["category-box__category"]} ${
          universesStyles[`${universe}-category-box__category`]
        }`}
      >
        {title}
      </span>

      <span
        className={`${classes["category-box__category-item-bg"]} ${
          universesStyles[`${universe}-category-box__category-item-bg`]
        }`}
      >
        <span
          className={`${
            classes[
              `category-box__category-item${type === "button" ? "-button" : ""}`
            ]
          } ${
            universesStyles[
              `${universe}-category-box__category-item${
                type === "button" ? "-button" : ""
              }`
            ]
          }`}
          onClick={() => {
            dispatch(
              setActivefilterMovie({
                queryName: queryName,
                queryValue: text.trim(),
                catName: catName,
              })
            );
            naviagate("/filmy");
          }}
        >
          {text}
        </span>
      </span>
    </div>
  );
};

export default CategoriesStatic;
