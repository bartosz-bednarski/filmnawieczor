import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import FilterBtn from "../ui/FilterBtn";
import classes from "./dateFilter.module.scss";
import { setSecondaryFilterActionTimeRange } from "../../redux/moviesFilter-slice";
const ActionTimeFilter = () => {
  const dispatch = useAppDispatch();
  const [dateRangeStart, setDateRangeStart] = useState("");
  const [dateRangeEnd, setDateRangeEnd] = useState("");
  const addDateRangeFilter = () => {
    if (Number(dateRangeEnd) - Number(dateRangeStart) === 0) {
      dispatch(
        setSecondaryFilterActionTimeRange({
          data: {
            czas_akcji: `${Number(dateRangeStart) - 1}-${
              Number(dateRangeEnd) + 1
            }`,
          },
          mainCatName: "Czas akcji",
          displayName: `${dateRangeStart}`,
        })
      );
    } else {
      dispatch(
        setSecondaryFilterActionTimeRange({
          data: { czas_akcji: `${dateRangeStart}-${dateRangeEnd}` },
          mainCatName: "Czas akcji",
          displayName: `${dateRangeStart}-${dateRangeEnd}`,
        })
      );
    }
  };
  const submitHandler = () => {
    addDateRangeFilter();
    setDateRangeStart("");
    setDateRangeEnd("");
  };
  return (
    <div className={classes["date-filter-container"]}>
      <div className={classes["date-filter-container__box"]}>
        <div className={classes["date-filter-container__box__input-box"]}>
          <input
            type="number"
            value={dateRangeStart}
            onChange={(e) => setDateRangeStart(e.target.value)}
            placeholder="-1000"
            className={classes["date-filter-container__box__input-box__input"]}
          ></input>
          <span
            className={classes["date-filter-container__box__input-box__text"]}
          >
            Od roku
          </span>
        </div>
        <span className={classes["date-filter-container__box__text"]}>-</span>
        <div className={classes["date-filter-container__box__input-box"]}>
          <input
            type="number"
            value={dateRangeEnd}
            onChange={(e) => setDateRangeEnd(e.target.value)}
            placeholder="2025"
            className={classes["date-filter-container__box__input-box__input"]}
          ></input>
          <span
            className={classes["date-filter-container__box__input-box__text"]}
          >
            Do roku
          </span>
        </div>
      </div>
      <div className={classes["date-filter-container__commit-box"]}>
        <span className={classes["date-filter-container__commit-box__text"]}>
          {dateRangeStart}-{dateRangeEnd}
        </span>
        <FilterBtn value="Zatwierdź" onClick={() => submitHandler()} />
      </div>
      <div className={classes["date-filter-container__box"]}>
        <div className={classes["date-filter-container__box__input-box"]}>
          <input
            type="number"
            placeholder="2005"
            value={dateRangeEnd && dateRangeStart}
            onChange={(e) => {
              setDateRangeStart(e.target.value);
              setDateRangeEnd(e.target.value);
            }}
            className={classes["date-filter-container__box__input-box__input"]}
          ></input>
          <span
            className={classes["date-filter-container__box__input-box__text"]}
          >
            Podaj rok
          </span>
        </div>
      </div>
    </div>
  );
};

export default ActionTimeFilter;
