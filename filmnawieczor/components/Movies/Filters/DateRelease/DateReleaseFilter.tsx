'use client';
import React from 'react';
import {useState, useEffect} from 'react';
import {useAppDispatch} from '../../../../redux/hooks';
import FilterBtn from '../../../ui/buttons/FilterBtn';
import styles from '../dateFilter.module.scss';
import {setActivefilterMovie} from '../../../../redux/movies-slice';
const DateReleaseFilter: React.FC<{onHide: () => void}> = ({onHide}) => {
  const dispatch = useAppDispatch();
  const [dateRangeStart, setDateRangeStart] = useState('');
  const [dateRangeEnd, setDateRangeEnd] = useState('');
  const [error, setError] = useState({
    dateRangeStart: false,
    dateRangeEnd: false,
  });
  const addDateRangeFilter = () => {
    if (Number(dateRangeEnd) - Number(dateRangeStart) === 0) {
      const payloadToSend = {
        catName: 'rok_produkcji',
        queryName: 'py.production_year',
        queryValue: `${dateRangeStart}`,
      };
      dispatch(setActivefilterMovie(payloadToSend));
    } else {
      const payloadToSend = {
        catName: 'rok_produkcji',
        queryName: 'py.production_year',
        queryValue: `${dateRangeStart}-${dateRangeEnd}`,
      };
      dispatch(setActivefilterMovie(payloadToSend));
    }
  };
  const submitHandler = () => {
    if (dateRangeStart === '') {
      setError((state) => ({
        dateRangeStart: true,
        dateRangeEnd: state.dateRangeEnd,
      }));
    }
    if (dateRangeEnd === '') {
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

    if (Number(dateRangeStart) < 1900) {
      setError((state) => ({
        dateRangeStart: true,
        dateRangeEnd: state.dateRangeEnd,
      }));
    }
    if (Number(dateRangeEnd) < 1900) {
      setError((state) => ({
        dateRangeStart: state.dateRangeStart,
        dateRangeEnd: true,
      }));
    }
    if (
      dateRangeStart !== '' &&
      dateRangeEnd !== '' &&
      dateRangeStart <= dateRangeEnd &&
      Number(dateRangeStart) >= 1900 &&
      Number(dateRangeEnd) >= 1900
    ) {
      addDateRangeFilter();
      setDateRangeStart('');
      setDateRangeEnd('');
      setError({dateRangeEnd: false, dateRangeStart: false});
      onHide();
    }
  };
  useEffect(() => {
    if (Number(dateRangeStart) >= 1900 && Number(dateRangeEnd) >= 1900) {
      if (error.dateRangeStart && dateRangeStart !== '') {
        setError((state) => ({
          dateRangeStart: false,
          dateRangeEnd: state.dateRangeEnd,
        }));
      }
      if (error.dateRangeEnd && dateRangeEnd !== '') {
        setError((state) => ({
          dateRangeStart: state.dateRangeStart,
          dateRangeEnd: false,
        }));
      }
      if (error.dateRangeEnd && dateRangeEnd > dateRangeStart) {
        setError((state) => ({dateRangeStart: false, dateRangeEnd: false}));
      }
    }
  }, [dateRangeStart, dateRangeEnd]);
  return (
    <div className={styles['date-filter-container']}>
      <div className={styles['date-filter-container__box']}>
        <div className={styles['date-filter-container__box__input-box']}>
          <span
            className={`${
              styles['date-filter-container__box__input-box__input-bg']
            } ${error.dateRangeStart ? styles['error'] : ''}`}
          >
            <input
              type="number"
              min={1900}
              max={2030}
              value={dateRangeStart}
              onChange={(e) => setDateRangeStart(e.target.value)}
              placeholder="1900"
              className={styles['date-filter-container__box__input-box__input']}
            ></input>
          </span>
          <span
            className={`${
              styles['date-filter-container__box__input-box__text']
            } ${error.dateRangeStart ? styles['error'] : ''}`}
          >
            Od roku
          </span>
        </div>
        <span className={styles['date-filter-container__box__text']}>-</span>
        <div className={styles['date-filter-container__box__input-box']}>
          <span
            className={`${
              styles['date-filter-container__box__input-box__input-bg']
            } ${error.dateRangeStart ? styles['error'] : ''}`}
          >
            <input
              type="number"
              min={1900}
              max={2030}
              value={dateRangeEnd}
              onChange={(e) => setDateRangeEnd(e.target.value)}
              placeholder="2025"
              className={styles['date-filter-container__box__input-box__input']}
            ></input>
          </span>
          <span
            className={`${
              styles['date-filter-container__box__input-box__text']
            } ${error.dateRangeStart ? styles['error'] : ''}`}
          >
            Do roku
          </span>
        </div>
      </div>
      <div className={styles['date-filter-container__commit-box']}>
        <span className={styles['date-filter-container__commit-box__text']}>
          {dateRangeStart}-{dateRangeEnd}
        </span>
        <FilterBtn value="Zatwierdź" onClick={() => submitHandler()} />
      </div>
      <div className={styles['date-filter-container__box']}>
        <div className={styles['date-filter-container__box__input-box']}>
          <span
            className={`${
              styles['date-filter-container__box__input-box__input-bg']
            } ${error.dateRangeStart ? styles['error'] : ''}`}
          >
            <input
              type="number"
              placeholder="2005"
              min={1900}
              max={2030}
              value={dateRangeEnd && dateRangeStart}
              onChange={(e) => {
                setDateRangeStart(e.target.value);
                setDateRangeEnd(e.target.value);
              }}
              className={styles['date-filter-container__box__input-box__input']}
            ></input>
          </span>
          <span
            className={`${
              styles['date-filter-container__box__input-box__text']
            } ${error.dateRangeStart ? styles['error'] : ''}`}
          >
            Podaj rok
          </span>
        </div>
      </div>
    </div>
  );
};

export default DateReleaseFilter;
