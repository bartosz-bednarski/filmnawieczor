import * as classes from "../../sortingFilters.module.scss";
import React, { useState } from "react";
import SortingButton from "../../../ui/buttons/filters/SortingButton";
import { useAppSelector } from "../../../../redux/hooks";
const SortingFilters: React.FC = () => {
  const sortingCategoriesStore = useAppSelector(
    (state) => state.moviesFilters.sorting
  );
  const [listActive, setListActive] = useState(false);
  return (
    <div className={classes["sortingFilters-container"]}>
      <div className={classes["sortingFilters-container__active-btn"]}>
        {sortingCategoriesStore.map(
          (cat) =>
            cat.active && (
              <SortingButton
                key={`${cat.name}-${cat.order}`}
                active={cat.active}
                order={cat.order}
                name={cat.buttonName}
                listActive={listActive}
                onClick={() => {
                  setListActive(!listActive);
                }}
              />
            )
        )}

        <div className={classes["sortingFilters-container__list-box"]}>
          {listActive && (
            <ul>
              {sortingCategoriesStore.map(
                (cat) =>
                  !cat.active && (
                    <li key={`${cat.name}-${cat.order}`}>
                      <SortingButton
                        active={cat.active}
                        order={cat.order}
                        name={cat.buttonName}
                        onClick={() => console.log("check")}
                      />
                    </li>
                  )
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SortingFilters;
