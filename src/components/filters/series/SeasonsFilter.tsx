import React from "react";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import FilterBtn from "../../ui/buttons/filters/FilterBtn";
import * as classes from "../dateFilter.module.scss";
import { setActivefilterSerie } from "../../../redux/seriesFilter-slice";
const SeasonsFilter: React.FC<{ onHide: () => void }> = ({ onHide }) => {
  const dispatch = useAppDispatch();
  const [seasonsCountStart, setSeasonsCountStart] = useState("");
  const [seasonsCountEnd, setSeasonsCountEnd] = useState("");
  const [error, setError] = useState({
    seasonsCountStart: false,
    seasonsCountEnd: false,
  });
  const addDateRangeFilter = () => {
    if (Number(seasonsCountEnd) - Number(seasonsCountStart) === 0) {
      const payloadToSend = {
        catName: "seasons_count",
        queryName: "s.seasons_count",
        queryValue: `${seasonsCountStart}`,
      };
      dispatch(setActivefilterSerie(payloadToSend));
    } else {
      const payloadToSend = {
        catName: "seasons_count",
        queryName: "s.seasons_count",
        queryValue: `${seasonsCountStart}-${seasonsCountEnd}`,
      };
      dispatch(setActivefilterSerie(payloadToSend));
    }
  };
  const submitHandler = () => {
    if (seasonsCountStart === "") {
      setError((state) => ({
        seasonsCountStart: true,
        seasonsCountEnd: state.seasonsCountEnd,
      }));
    }
    if (seasonsCountEnd === "") {
      setError((state) => ({
        seasonsCountStart: state.seasonsCountStart,
        seasonsCountEnd: true,
      }));
    }
    if (Number(seasonsCountStart) <= 0) {
      setError((state) => ({
        seasonsCountStart: true,
        seasonsCountEnd: state.seasonsCountEnd,
      }));
    }
    if (Number(seasonsCountEnd) <= 0) {
      setError((state) => ({
        seasonsCountStart: state.seasonsCountStart,
        seasonsCountEnd: true,
      }));
    }
    if (seasonsCountStart > seasonsCountEnd) {
      setError((state) => ({
        seasonsCountStart: true,
        seasonsCountEnd: true,
      }));
    }
    if (
      seasonsCountEnd !== "" &&
      seasonsCountStart !== "" &&
      seasonsCountEnd >= seasonsCountStart &&
      Number(seasonsCountEnd) > 0 &&
      Number(seasonsCountStart) > 0
    ) {
      addDateRangeFilter();
      setSeasonsCountStart("");
      setSeasonsCountEnd("");
      setError({ seasonsCountEnd: false, seasonsCountStart: false });
      onHide();
    }
  };
  useEffect(() => {
    if (Number(seasonsCountStart) > 0 && Number(seasonsCountEnd) > 0) {
      if (error.seasonsCountStart && seasonsCountStart !== "") {
        setError((state) => ({
          seasonsCountStart: false,
          seasonsCountEnd: state.seasonsCountEnd,
        }));
      }
      if (error.seasonsCountEnd && seasonsCountEnd !== "") {
        setError((state) => ({
          seasonsCountStart: state.seasonsCountStart,
          seasonsCountEnd: false,
        }));
      }
      if (error.seasonsCountEnd && seasonsCountEnd > seasonsCountStart) {
        setError((state) => ({
          seasonsCountStart: false,
          seasonsCountEnd: false,
        }));
      }
    }
  }, [seasonsCountStart, seasonsCountEnd]);
  return (
    <div className={classes["date-filter-container"]}>
      <div className={classes["date-filter-container__box"]}>
        <div className={classes["date-filter-container__box__input-box"]}>
          <span
            className={`${
              classes["date-filter-container__box__input-box__input-bg"]
            } ${error.seasonsCountStart ? classes["error"] : ""}`}
          >
            <input
              type="number"
              min={1}
              max={100}
              value={seasonsCountStart}
              onChange={(e) => setSeasonsCountStart(e.target.value)}
              placeholder="1"
              className={
                classes["date-filter-container__box__input-box__input"]
              }
            ></input>
          </span>
          <span
            className={`${
              classes["date-filter-container__box__input-box__text"]
            } ${error.seasonsCountStart ? classes["error"] : ""}`}
          >
            Od sezonu
          </span>
        </div>
        <span className={classes["date-filter-container__box__text"]}>-</span>
        <div className={classes["date-filter-container__box__input-box"]}>
          <span
            className={`${
              classes["date-filter-container__box__input-box__input-bg"]
            } ${error.seasonsCountEnd ? classes["error"] : ""}`}
          >
            <input
              type="number"
              min={1}
              max={100}
              value={seasonsCountEnd}
              onChange={(e) => setSeasonsCountEnd(e.target.value)}
              placeholder="100"
              className={
                classes["date-filter-container__box__input-box__input"]
              }
            ></input>
          </span>
          <span
            className={`${
              classes["date-filter-container__box__input-box__text"]
            } ${error.seasonsCountEnd ? classes["error"] : ""}`}
          >
            Do sezonu
          </span>
        </div>
      </div>
      <div className={classes["date-filter-container__commit-box"]}>
        <span className={classes["date-filter-container__commit-box__text"]}>
          {seasonsCountStart}-{seasonsCountEnd}
        </span>
        <FilterBtn value="Zatwierdź" onClick={() => submitHandler()} />
      </div>
      <div className={classes["date-filter-container__box"]}>
        <div className={classes["date-filter-container__box__input-box"]}>
          <span
            className={`${
              classes["date-filter-container__box__input-box__input-bg"]
            } ${error.seasonsCountStart ? classes["error"] : ""}`}
          >
            <input
              type="number"
              placeholder="1"
              min={1}
              max={1000}
              value={seasonsCountEnd && seasonsCountStart}
              onChange={(e) => {
                setSeasonsCountStart(e.target.value);
                setSeasonsCountEnd(e.target.value);
              }}
              className={
                classes["date-filter-container__box__input-box__input"]
              }
            ></input>
          </span>
          <span
            className={`${
              classes["date-filter-container__box__input-box__text"]
            } ${error.seasonsCountStart ? classes["error"] : ""}`}
          >
            Ilość sezonów
          </span>
        </div>
      </div>
    </div>
  );
};

export default SeasonsFilter;
