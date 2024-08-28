import React from "react";
import * as classes from "../buttons.module.scss";
const SortingButton: React.FC<{
  active: boolean;
  order: "ASC" | "DESC";
  listActive?: boolean;
  name: string;
  onClick: () => void;
}> = ({ active, order, listActive, name, onClick }) => {
  const sortingDirectionImage =
    require(`../../../../assets/ui/buttons/arrow-${order}-circle-${
      active ? "active" : "passive"
    }.webp`).default;
  return (
    <div
      className={classes[`sortingButton-box${active ? "--active" : ""}`]}
      onClick={() => onClick()}
    >
      <span>{name}</span>
      <img
        width={24}
        height={24}
        loading="eager"
        alt="sorting-direction"
        src={sortingDirectionImage}
      />
      {active && (
        <img
          className={
            classes[
              `sortingButton-box__dropdown-btn${listActive ? "--active" : ""}`
            ]
          }
          width={24}
          height={24}
          loading="eager"
          alt="dropdown-menu-status"
          src={
            require("../../../../assets/ui/buttons/chevron-down.webp").default
          }
        />
      )}
    </div>
  );
};
export default SortingButton;
