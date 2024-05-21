import classes from "../filters.module.scss";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import FilterBtn from "../../ui/FilterBtn";
import { CATEGORIES } from "../../../utils/data/moviesCategories";
import { useState } from "react";
import {
  removeSecondaryFilter,
  setSecondaryFilter,
} from "../../../redux/moviesFilter-slice";
import ActiveFilterBtn from "../../ui/ActiveFilterBtn";
import ArrowUpBtn from "../../ui/ArrowUpBtn";
import ActionTimeFilter from "./ActionTimeFilter";
import DateReleaseFilter from "./DateReleaseFilter";
const MovieFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const Movies = CATEGORIES;
  const [showSecondaryFilters, setShowSecondaryFilters] = useState(false);
  const [secondaryFilters, setSecondaryFilters] = useState<{
    mainCategoryName: string;
    data: { id: string; catName: string }[];
  }>({ mainCategoryName: "", data: [] });
  const secondaryFiltersStore = useAppSelector(
    (state) => state.moviesFilter.secondaryFilters
  );

  const setSecondaryFiltersHandler = (catId: string) => {
    const categoryIndex = Movies.findIndex((item) => item.id === catId);
    const mainCategoryName = Movies[categoryIndex].catName;
    const secondaryCatsToShow = Movies[categoryIndex].secondaryCats;
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
    const mainCategoryIndex = Movies.findIndex(
      (cat) => cat.catName === secondaryFilters.mainCategoryName
    );
    const secondaryCategoryIndex = Movies[
      mainCategoryIndex
    ].secondaryCats.findIndex((secCat) => secCat.id === secondaryCat.id);
    Movies[mainCategoryIndex].secondaryCats.splice(secondaryCategoryIndex, 1);
    setSecondaryFilters({
      mainCategoryName: Movies[mainCategoryIndex].catName,
      data: Movies[mainCategoryIndex].secondaryCats,
    });
    dispatch(
      setSecondaryFilter({
        data: { [Movies[mainCategoryIndex].catName]: secondaryCat.catName },
        mainCatName: Movies[mainCategoryIndex].catDisplayName,
        displayName: secondaryCat.catName,
      })
    );
  };

  const removeActiveFilterHandler = (filter) => {
    dispatch(removeSecondaryFilter(filter.displayName));
    const mainCategoryIndex = Movies.findIndex(
      (cat) => cat.catDisplayName === filter.mainCatName
    );
    console.log(filter.mainCatName);
    console.log(Movies);
    Movies[mainCategoryIndex].secondaryCats.push({
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
              {Movies.map((cat) => {
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
                    // dispatch(removeSecondaryFilter(filter.displayName));
                    // console.log("filterRemoved", filter);
                    // console.log("filtersState", secondaryFilters);
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
export default MovieFilter;
