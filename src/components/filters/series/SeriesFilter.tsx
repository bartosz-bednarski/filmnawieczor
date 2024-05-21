import classes from "../filters.module.scss";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import FilterBtn from "../../ui/FilterBtn";
import { CATEGORIES } from "../../../utils/data/seriesCategories";
import { useState } from "react";
import {
  removeSecondaryFilter,
  setSecondaryFilter,
} from "../../../redux/seriesFilter-slice";
import ActiveFilterBtn from "../../ui/ActiveFilterBtn";
import ArrowUpBtn from "../../ui/ArrowUpBtn";
import ActionTimeFilter from "./ActionTimeFilter";
import DateReleaseFilter from "./DateReleaseFilter";
const SeriesFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const Series = CATEGORIES;
  const [showSecondaryFilters, setShowSecondaryFilters] = useState(false);
  const [secondaryFilters, setSecondaryFilters] = useState<{
    mainCategoryName: string;
    data: { id: string; catName: string }[];
  }>({ mainCategoryName: "", data: [] });
  const secondaryFiltersStore = useAppSelector(
    (state) => state.seriesFilter.secondaryFilters
  );

  const setSecondaryFiltersHandler = (catId: string) => {
    const categoryIndex = Series.findIndex((item) => item.id === catId);
    const mainCategoryName = Series[categoryIndex].catName;
    const secondaryCatsToShow = Series[categoryIndex].secondaryCats;
    if (secondaryCatsToShow.length > 0) {
      setSecondaryFilters({
        mainCategoryName: mainCategoryName,
        data: secondaryCatsToShow,
      });
    }
  };
  const selectSecondaryFilterHandler = (secondaryCat: {
    id: string;
    catName: string;
  }) => {
    const mainCategoryIndex = Series.findIndex(
      (cat) => cat.catName === secondaryFilters.mainCategoryName
    );
    const secondaryCategoryIndex = Series[
      mainCategoryIndex
    ].secondaryCats.findIndex((secCat) => secCat.id === secondaryCat.id);
    Series[mainCategoryIndex].secondaryCats.splice(secondaryCategoryIndex, 1);
    setSecondaryFilters({
      mainCategoryName: Series[mainCategoryIndex].catName,
      data: Series[mainCategoryIndex].secondaryCats,
    });
    dispatch(
      setSecondaryFilter({
        data: { [Series[mainCategoryIndex].catName]: secondaryCat.catName },
        mainCatName: Series[mainCategoryIndex].catDisplayName,
        displayName: secondaryCat.catName,
      })
    );
  };

  const removeActiveFilterHandler = (filter) => {
    dispatch(removeSecondaryFilter(filter.displayName));
    const mainCategoryIndex = Series.findIndex(
      (cat) => cat.catDisplayName === filter.mainCatName
    );
    Series[mainCategoryIndex].secondaryCats.push({
      id: `S${(Math.random() * 3).toFixed(0)}}`,
      catName: filter.displayName,
    });
  };
  return (
    <div className={classes["filters-container"]}>
      {/* <h1>Wybierz coś z naszego katalogu filmów</h1> */}
      <>
        {!showSecondaryFilters && (
          <div
            className={classes["filters-container__primary-filters-container"]}
          >
            <h2>Kategorie filtrów</h2>
            <div
              className={
                classes["filters-container__primary-filters-container__box"]
              }
            >
              {Series.map((cat) => {
                return (
                  <FilterBtn
                    value={cat.catDisplayName}
                    onClick={() => {
                      setShowSecondaryFilters(true);
                      setSecondaryFiltersHandler(cat.id);
                    }}
                  />
                );
              })}
            </div>
          </div>
        )}

        {showSecondaryFilters && (
          <>
            <div
              className={
                classes["filters-container__secondary-filters-container"]
              }
            >
              <ArrowUpBtn
                onClick={() => setShowSecondaryFilters(false)}
                text="Kategorie główne"
              />
              <div
                className={
                  classes["filters-container__secondary-filters-container__box"]
                }
              >
                {secondaryFilters.mainCategoryName !== "czas_akcji" &&
                  secondaryFilters.mainCategoryName !== "rok_produkcji" &&
                  secondaryFilters.data.map((secondaryCat) => {
                    return (
                      <FilterBtn
                        value={secondaryCat.catName}
                        key={secondaryCat.id}
                        onClick={() =>
                          selectSecondaryFilterHandler(secondaryCat)
                        }
                      />
                    );
                  })}
                {secondaryFilters.mainCategoryName === "czas_akcji" && (
                  <ActionTimeFilter />
                )}
                {secondaryFilters.mainCategoryName === "rok_produkcji" && (
                  <DateReleaseFilter />
                )}
              </div>
            </div>
          </>
        )}
      </>
      {secondaryFiltersStore.length > 0 && (
        <div className={classes["filters-container__active-filters-container"]}>
          <h2>Aktywne filtry</h2>
          <div
            className={
              classes["filters-container__active-filters-container__box"]
            }
          >
            {secondaryFiltersStore.map((filter) => {
              return (
                <ActiveFilterBtn
                  value={filter.displayName}
                  key={filter.id}
                  onClick={() => {
                    removeActiveFilterHandler(filter);
                  }}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default SeriesFilter;
