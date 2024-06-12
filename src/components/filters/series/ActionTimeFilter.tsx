import { useState } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import FilterBtn from "../../ui/filters/FilterBtn";
import classes from "../dateFilter.module.scss";
import { setActivefilterSerie } from "../../../redux/seriesFilter-slice";
const ActionTimeFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const [dateRangeStart, setDateRangeStart] = useState("");
  const [dateRangeEnd, setDateRangeEnd] = useState("");
  const addDateRangeFilter = () => {
    if (Number(dateRangeEnd) - Number(dateRangeStart) === 0) {
      const payloadToSend = {
        catName: "czas_akcji",
        queryName: "at.action_time",
        queryValue: `${dateRangeStart}`,
      };
      dispatch(setActivefilterSerie(payloadToSend));
    } else {
      const payloadToSend = {
        catName: "czas_akcji",
        queryName: "at.action_time",
        queryValue: `${dateRangeStart}-${dateRangeEnd}`,
      };
      dispatch(setActivefilterSerie(payloadToSend));
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
