'use client';
import React from 'react';
import {useState, useEffect} from 'react';
import {useAppDispatch} from '../../../../redux/hooks';
import styles from './dateReleaseFilter.module.scss';
import {setActivefilterMovie} from '../../../../redux/movies-slice';
import FilterButton from '@/components/Ui/Buttons/FilterButton/FilterButton';
import FilterInput from '@/components/Ui/Inputs/FilterInput';
import { submitHandler } from './submitHandler';

export interface DateReleaseFilterMoviesPropsType{
  onHide:()=>void
}

const DateReleaseFilter = ({onHide}:DateReleaseFilterMoviesPropsType) => {
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
        setError({dateRangeStart: false, dateRangeEnd: false});
      }
    }
  }, [dateRangeStart, dateRangeEnd]);

  return (
    <div className={styles.container}>
      <div className={styles.inputBox}>
        
            <FilterInput 
            max={2030} 
            min={1900} 
            value={dateRangeStart} 
            placeholder='1900' 
            onChange={(e) => setDateRangeStart(e.target.value)}
            label='Od roku'
            error={error.dateRangeStart}
            type='number'
            /> - 
            <FilterInput 
            max={2030} 
            min={1900} 
            value={dateRangeEnd} 
            placeholder='2025' 
            onChange={(e) => setDateRangeEnd(e.target.value)}
            label='Do roku'
            error={error.dateRangeEnd}
            type='number'
            />
           
      </div>
      <div className={styles.commitBox}>
        <span className={styles.text}>
          {dateRangeStart}-{dateRangeEnd}
        </span>
        <FilterButton 
        value="Zatwierdź" 
        onClick={() => submitHandler({dateRangeStart,dateRangeEnd,setError,addDateRangeFilter,setDateRangeEnd,setDateRangeStart,onHide})} />
      </div>
      <div className={styles.inputBox}>
       
              <FilterInput 
            max={2030} 
            min={1900} 
            value={dateRangeEnd} 
            placeholder='2005' 
            onChange={(e) => {
              setDateRangeStart(e.target.value);
              setDateRangeEnd(e.target.value);
            }}
            label='Podaj rok'
            error={error.dateRangeStart}
            type='number'
            />
           
      </div>
    </div>
  );
};

export default DateReleaseFilter;
