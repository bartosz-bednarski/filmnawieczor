import FilterBtn from "../ui/FilterBtn";
import classes from "./filters.module.scss";
import { CATEGORIES } from "../../utils/data/moviesCategories";
import { useState } from "react";
import arrowBack from "../../assets/arrow-back-outline.svg";
const Filters = () => {
  const [showSecondaryCats, setShowSecondaryCats] = useState({
    status: false,
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
      setShowSecondaryCats({ status: true, data: secondaryCatsToShow });
    }
  };
  return (
    <div className={classes["filters-container"]}>
      <h1>Wybierz coś z naszego katalogu filmów</h1>
      <>
        {!showSecondaryCats.status && (
          <div className={classes["filters-container__main-cats-container"]}>
            {CATEGORIES.map((cat) => {
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
            })}
          </div>
        )}
        {showSecondaryCats.status && (
          <div className={classes["filters-container__sec-cats-container"]}>
            <img
              src={arrowBack}
              width="50px"
              alt="arrow-back"
              onClick={() => setShowSecondaryCats({ status: false, data: [] })}
            />
            {showSecondaryCats.data.map((cat) => {
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
            })}
          </div>
        )}
      </>
    </div>
  );
};
export default Filters;
