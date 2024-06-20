import React from "react";
import { useState, useEffect } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import FilterBtn from "../../ui/filters/FilterBtn";
import * as classes from "../dateFilter.module.scss";
import { setActivefilterMovie } from "../../../redux/moviesFilters-slice";
const ActionTimeFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const [dateRangeStart, setDateRangeStart] = useState("");
  const [dateRangeEnd, setDateRangeEnd] = useState("");
  const [error, setError] = useState({
    dateRangeStart: false,
    dateRangeEnd: false,
  });
  const addDateRangeFilter = () => {
    if (Number(dateRangeEnd) - Number(dateRangeStart) === 0) {
      const payloadToSend = {
        catName: "czas_akcji",
        queryName: "at.action_time",
        queryValue: `${dateRangeStart}`,
      };
      dispatch(setActivefilterMovie(payloadToSend));
    } else {
      const payloadToSend = {
        catName: "czas_akcji",
        queryName: "at.action_time",
        queryValue: `${dateRangeStart}-${dateRangeEnd}`,
      };
      dispatch(setActivefilterMovie(payloadToSend));
    }
  };
  const submitHandler = () => {
    if (dateRangeStart === "") {
      setError((state) => ({
        dateRangeStart: true,
        dateRangeEnd: state.dateRangeEnd,
      }));
    }
    if (dateRangeEnd === "") {
      setError((state) => ({
        dateRangeStart: state.dateRangeStart,
        dateRangeEnd: true,
      }));
    }
    if (dateRangeStart > dateRangeEnd) {
      setError((state) => ({
        dateRangeStart: true,
        dateRangeEnd: true,
      }));
    }
    if (
      dateRangeStart !== "" &&
      dateRangeEnd !== "" &&
      dateRangeStart <= dateRangeEnd
    ) {
      addDateRangeFilter();
      setDateRangeStart("");
      setDateRangeEnd("");
      setError({ dateRangeEnd: false, dateRangeStart: false });
    }
  };
  useEffect(() => {
    if (error.dateRangeStart && dateRangeStart !== "") {
      setError((state) => ({
        dateRangeStart: false,
        dateRangeEnd: state.dateRangeEnd,
      }));
    }
    if (error.dateRangeEnd && dateRangeEnd !== "") {
      setError((state) => ({
        dateRangeStart: state.dateRangeStart,
        dateRangeEnd: false,
      }));
    }
    if (error.dateRangeEnd && dateRangeEnd > dateRangeStart) {
      setError((state) => ({ dateRangeStart: false, dateRangeEnd: false }));
    }
  }, [dateRangeStart, dateRangeEnd]);
  return (
    <div className={classes["date-filter-container"]}>
      <div className={classes["date-filter-container__box"]}>
        <div className={classes["date-filter-container__box__input-box"]}>
          <input
            type="number"
            value={dateRangeStart}
            onChange={(e) => setDateRangeStart(e.target.value)}
            placeholder="-1000"
            className={`${
              classes["date-filter-container__box__input-box__input"]
            } ${error.dateRangeStart ? classes["error"] : ""}`}
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
            className={`${
              classes["date-filter-container__box__input-box__input"]
            } ${error.dateRangeEnd ? classes["error"] : ""}`}
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
