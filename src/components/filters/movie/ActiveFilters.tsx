import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { removeActiveFilter } from "../../../redux/moviesFilters-slice";
import ActiveFilterBtn from "../../ui/filters/ActiveFilterBtn";
import classes from "../filters.module.scss";
const ActiveFilters: React.FC = () => {
  const dispatch = useAppDispatch();
  const activeFiltersStore = useAppSelector(
    (state) => state.moviesFilters.activeFilters
  );
  return (
    <div className={classes["filters-container__active-filters-container"]}>
      <h2>Aktywne filtry</h2>
      <div
        className={classes["filters-container__active-filters-container__box"]}
      >
        {activeFiltersStore.map((filter) => {
          return (
            <ActiveFilterBtn
              value={filter.queryValue}
              key={filter.queryValue}
              onClick={() => {
                dispatch(
                  removeActiveFilter({
                    queryName: filter.queryName,
                    queryValue: filter.queryValue,
                  })
                );
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ActiveFilters;
