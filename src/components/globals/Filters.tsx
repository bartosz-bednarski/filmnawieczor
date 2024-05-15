import FilterBtn from "../ui/FilterBtn";
import classes from "./filters.module.scss";
import { CATEGORIES } from "../../utils/data/moviesCategories";
import { useState } from "react";
import arrowup from "../../assets/chevron-up.png";
import { useAppDispatch } from "../../redux/hooks";
import { setSecondaryFilter } from "../../redux/moviesFilter-slice";
const Filters = () => {
  const dispatch = useAppDispatch();
  const [showSecondaryCats, setShowSecondaryCats] = useState({
    status: false,
    mainCategoryName: "",
    data: [{ id: "S0", catName: "Brak" }],
  });
  const [activeMainFilter, setActiveMainFilter] = useState<null | {
    id: string;
    catName: string;
    secondaryCats: { id: string; catName: string }[];
  }>(null);
  const [activeSecondaryFilter, setActiveSecondaryFilter] = useState<null | {
    id: string;
    catName: string;
  }>(null);

  const showSecondaryCatsHandler = (catId: string) => {
    const categoryIndex = CATEGORIES.findIndex((item) => item.id === catId);
    const secondaryCatsToShow = CATEGORIES[categoryIndex].secondaryCats;

    if (secondaryCatsToShow.length > 0) {
      setShowSecondaryCats({
        status: true,
        mainCategoryName: CATEGORIES[categoryIndex].catName,
        data: secondaryCatsToShow,
      });
    }
  };
  // const onClickSecondaryFilterHandler = (cat) => {
  //   setActiveSecondaryFilter(cat);
  //   dispatch(setSecondaryFilter({mainCategoryName:showSecondaryCats.mainCategoryName,}));
  // };
  return (
    <div className={classes["filters-container"]}>
      {/* <h1>Wybierz coś z naszego katalogu filmów</h1> */}
      <>
        {!showSecondaryCats.status && (
          <div className={classes["filters-container__main-cats-container"]}>
            {/* {CATEGORIES.map((cat) => {
              return (
                <FilterBtn
                  value={cat.catName}
                  key={cat.id}
                  onClick={() => {
                    showSecondaryCatsHandler(cat.id);
                    setActiveMainFilter(cat);
                  }}
                  id={cat.id}
                  active={cat === activeMainFilter}
                />
              );
            })} */}
          </div>
        )}
        {showSecondaryCats.status && (
          <>
            <span className={classes["filters-container__arrow-up-box"]}>
              <img
                src={arrowup}
                width="50px"
                alt="arrow-back"
                onClick={() =>
                  setShowSecondaryCats({
                    status: false,
                    mainCategoryName: "",
                    data: [],
                  })
                }
              />
              <span>Kategorie główne</span>
            </span>
            <div className={classes["filters-container__sec-cats-container"]}>
              {/* {showSecondaryCats.data.map((cat) => {
                return (
                  <FilterBtn
                    value={cat.catName}
                    key={cat.id}
                    onClick={() => {
                      setActiveSecondaryFilter(cat);
                    }}
                    id={cat.id}
                    active={cat === activeSecondaryFilter}
                  />
                );
              })} */}
            </div>
          </>
        )}
      </>
    </div>
  );
};
export default Filters;
