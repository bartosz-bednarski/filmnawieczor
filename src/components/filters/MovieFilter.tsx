import classes from "./filters.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import FilterBtn from "../ui/FilterBtn";
import { CATEGORIES } from "../../utils/data/moviesCategories";
import { useState } from "react";
import arrowup from "../../assets/chevron-up.png";
import { setSecondaryFilter } from "../../redux/moviesFilter-slice";
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

  const activeFiltersList = [];

  for (let i = 0; i < secondaryFiltersStore.length; i++) {
    for (let x = 0; x < secondaryFiltersStore[i].active_filters.length; x++) {
      activeFiltersList.push({
        ...secondaryFiltersStore[i].active_filters[x],
        mainCategoryName: secondaryFiltersStore[i].mainCategoryName,
      });
      // {mainCategoryName:secondaryFiltersStore[i].mainCategoryName,}
    }
  }
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
        mainCategoryName: Movies[mainCategoryIndex].catName,
        secondaryCategory: { id: secondaryCat.id, name: secondaryCat.catName },
      })
    );
  };
  return (
    <div className={classes["filters-container"]}>
      {/* <h1>Wybierz coś z naszego katalogu filmów</h1> */}
      <>
        {!showSecondaryFilters && (
          <div className={classes["filters-container__main-cats-container"]}>
            {Movies.map((cat) => {
              return (
                <FilterBtn
                  value={cat.catName}
                  onClick={() => {
                    setShowSecondaryFilters(true);
                    setSecondaryFiltersHandler(cat.id);
                  }}
                />
              );
            })}
          </div>
        )}

        {showSecondaryFilters && (
          <>
            <span
              className={classes["filters-container__arrow-up-box"]}
              onClick={() => setShowSecondaryFilters(false)}
            >
              <img
                src={arrowup}
                width="50px"
                alt="arrow-back"
                onClick={() => setShowSecondaryFilters(false)}
              />
              <span>Kategorie główne</span>
            </span>
            <div className={classes["filters-container__sec-cats-container"]}>
              {secondaryFilters.data.map((secondaryCat) => {
                return (
                  <FilterBtn
                    value={secondaryCat.catName}
                    key={secondaryCat.id}
                    onClick={() => selectSecondaryFilterHandler(secondaryCat)}
                  />
                );
              })}
            </div>
          </>
        )}
      </>
      <div className={classes["filters-container__active-filters-container"]}>
        {activeFiltersList.map((filter) => {
          return (
            <FilterBtn
              value={filter.name}
              key={filter.id}
              onClick={() => console.log("nic")}
            />
          );
        })}
      </div>
    </div>
  );
};
export default MovieFilter;
