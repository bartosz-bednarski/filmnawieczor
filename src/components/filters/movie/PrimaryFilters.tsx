import React from "react";
import * as classes from "../filters.module.scss";
import FilterBtn from "../../ui/buttons/filters/FilterBtn";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setSecondaryCatsToDisplayMovie } from "../../../redux/moviesFilters-slice";
const PrimaryFilters: React.FC<{ onHide: () => void }> = ({ onHide }) => {
  const dispatch = useAppDispatch();
  const primaryCategoriesStore = useAppSelector(
    (state) => state.moviesFilters.categories
  );
  const onClickHandler = (catName: string) => {
    onHide();
    dispatch(setSecondaryCatsToDisplayMovie(catName));
  };
  return (
    <>
      <div className={classes["filters-container"]}>
        <div className={classes["filters-container__side-boxes"]}></div>
        <div
          className={classes["filters-container__primary-filters-container"]}
        >
          <h1>Baza filmów</h1>
          <div
            className={
              classes["filters-container__primary-filters-container__box"]
            }
          >
            {primaryCategoriesStore.map((primaryCategory) => {
              return (
                <FilterBtn
                  value={primaryCategory.catDisplayName}
                  key={primaryCategory.id}
                  onClick={() => onClickHandler(primaryCategory.catName)}
                />
              );
            })}
          </div>
        </div>
        <div className={classes["filters-container__side-boxes"]}></div>
      </div>
      {/* <div className={classes["filters-container__primary-filters-container"]}>
      <h1>Baza filmów</h1>
      <div
        className={classes["filters-container__primary-filters-container__box"]}
      >
        {primaryCategoriesStore.map((primaryCategory) => {
          return (
            <FilterBtn
              value={primaryCategory.catDisplayName}
              key={primaryCategory.id}
              onClick={() => onClickHandler(primaryCategory.catName)}
            />
          );
        })}
      </div>
    </div> */}
    </>
  );
};
export default PrimaryFilters;
