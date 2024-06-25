import React from "react";
import * as classes from "../filters.module.scss";
import FilterBtn from "../../ui/filters/FilterBtn";
import ArrowUpBtn from "../../ui/filters/ArrowUpBtn";
import ActionTimeFilter from "./ActionTimeFilter";
import DateReleaseFilter from "./DateReleaseFilter";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useEffect, useState } from "react";
import { setActivefilterSerie } from "../../../redux/seriesFilter-slice";
import SeasonsFilter from "./SeasonsFilter";
const SecondaryFilters: React.FC<{ onHide: () => void }> = ({ onHide }) => {
  const dispatch = useAppDispatch();
  const secondaryCatsToDisplayStore = useAppSelector(
    (state) => state.seriesFilters.secondaryCatsToDisplay
  );
  const categoriesStore = useAppSelector(
    (state) => state.seriesFilters.categories
  );
  const [secondaryCategoriesToDisplay, setSecondaryCategoriestoDisplay] =
    useState(null);

  const onClickHandler = (catName) => {
    const payloadToSend = {
      catName: secondaryCategoriesToDisplay.catName,
      queryName: secondaryCategoriesToDisplay.queryName,
      queryValue: catName,
    };
    dispatch(setActivefilterSerie(payloadToSend));
    onHide();
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
        {secondaryCatsToDisplayStore === "czas_akcji" && <ActionTimeFilter />}
        {secondaryCatsToDisplayStore === "rok_produkcji" && (
          <DateReleaseFilter />
        )}
        {secondaryCatsToDisplayStore === "seasons_count" && <SeasonsFilter />}
        {secondaryCategoriesToDisplay !== null &&
          secondaryCategoriesToDisplay.secondaryCats.map((secCat) => {
            if (secCat.active) {
              return (
                <FilterBtn
                  value={secCat.catName}
                  key={secCat.id}
                  onClick={() => onClickHandler(secCat.catName)}
                />
              );
            }
          })}
      </div>
    </div>
  );
};
export default SecondaryFilters;
