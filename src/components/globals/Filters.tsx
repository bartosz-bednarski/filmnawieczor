import FilterBtn from "../ui/FilterBtn";
import classes from "./filters.module.scss";
import { CATEGORIES } from "../../utils/data/moviesCategories";
import { useState } from "react";
const Filters = () => {
  const [showSecCats, setShowSecCats] = useState({
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
    const secCatsToShow = CATEGORIES[categoryIndex].secondaryCats;

    if (secCatsToShow.length > 0) {
      setShowSecCats({ status: true, data: secCatsToShow });
    }
  };
  return (
    <div className={classes["filters-container"]}>
      <h1>Wybierz coś z naszego katalogu filmów</h1>
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
      {showSecCats.status && (
        <div className={classes["filters-container__sec-cats-container"]}>
          {showSecCats.data.map((cat) => {
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
    </div>
  );
};
export default Filters;
