import React from "react";
import * as classes from "../filters.module.scss";
import FilterBtn from "../../ui/buttons/filters/FilterBtn";
import ArrowUpBtn from "../../ui/buttons/filters/ArrowUpBtn";
import ActionTimeFilter from "./ActionTimeFilter";
import DateReleaseFilter from "./DateReleaseFilter";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useEffect, useState } from "react";
import { setActivefilterMovie } from "../../../redux/moviesFilters-slice";
import { Category } from "redux/moviesFilters";
const SecondaryFilters: React.FC<{ onHide: () => void }> = ({ onHide }) => {
  const dispatch = useAppDispatch();
  const secondaryCatsToDisplayStore = useAppSelector(
    (state) => state.moviesFilters.secondaryCatsToDisplay
  );
  const categoriesStore = useAppSelector(
    (state) => state.moviesFilters.categories
  );
  const [secondaryCategoriesToDisplay, setSecondaryCategoriestoDisplay] =
    useState<Category | null>(null);

  const onClickHandler = (catName: string) => {
    const payloadToSend = {
      catName: secondaryCategoriesToDisplay.catName,
      queryName: secondaryCategoriesToDisplay.queryName,
      queryValue: catName,
    };
    dispatch(setActivefilterMovie(payloadToSend));
  };
  useEffect(() => {
    if (secondaryCatsToDisplayStore === "gatunek") {
      const catStoreIndex = categoriesStore.findIndex(
        (cat) => cat.catName === "gatunek"
      );
      setSecondaryCategoriestoDisplay(categoriesStore[catStoreIndex]);
    } else if (secondaryCatsToDisplayStore === "miejsce_akcji") {
      const catStoreIndex = categoriesStore.findIndex(
        (cat) => cat.catName === "miejsce_akcji"
      );
      setSecondaryCategoriestoDisplay(categoriesStore[catStoreIndex]);
    }
  }, [categoriesStore, secondaryCatsToDisplayStore]);

  return (
    <div className={classes["filters-container__secondary-filters-container"]}>
      <ArrowUpBtn onClick={() => onHide()} text="Kategorie główne" />
      <div
        className={
          classes["filters-container__secondary-filters-container__box"]
        }
      >
        {secondaryCatsToDisplayStore === "czas_akcji" && (
          <ActionTimeFilter onHide={onHide} />
        )}
        {secondaryCatsToDisplayStore === "rok_produkcji" && (
          <DateReleaseFilter onHide={onHide} />
        )}
        {secondaryCategoriesToDisplay !== null &&
          secondaryCategoriesToDisplay.secondaryCats.map((secCat) => {
            if (secCat.active) {
              return (
                <FilterBtn
                  value={secCat.catName}
                  key={secCat.id}
                  onClick={() => {
                    onClickHandler(secCat.catName);
                    onHide();
                  }}
                />
              );
            }
          })}
      </div>
    </div>
  );
};
export default SecondaryFilters;
