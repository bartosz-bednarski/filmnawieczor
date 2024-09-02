import * as classes from "../../sortingFilters.module.scss";
import React, { useState } from "react";
import SortingButton from "../../../ui/buttons/filters/SortingButton";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { setActiveSorting } from "../../../../redux/moviesFilters-slice";
import { SortingItem } from "redux/moviesFilters";
const SortingFilters: React.FC = () => {
  const dispatch = useAppDispatch();
  const sortingCategoriesStore = useAppSelector(
    (state) => state.moviesFilters.sorting
  );
  const [listActive, setListActive] = useState(false);
  const selectSortingFilterHandler = (cat: SortingItem) => {
    dispatch(setActiveSorting({ sortingName: cat.sortingName }));
    setListActive(false);
  };
  return (
    <div className={classes["sortingFilters-container"]}>
      <div className={classes["sortingFilters-container__active-btn"]}>
        {sortingCategoriesStore.map(
          (cat) =>
            cat.active && (
              <SortingButton
                key={`${cat.sortingName}_${cat.order}`}
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
                    <li key={`${cat.sortingName}_${cat.order}`}>
                      <SortingButton
                        active={cat.active}
                        order={cat.order}
                        name={cat.buttonName}
                        onClick={() => selectSortingFilterHandler(cat)}
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
