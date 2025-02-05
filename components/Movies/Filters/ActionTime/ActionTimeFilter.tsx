'use client';
import React from 'react';
import {useState, useEffect} from 'react';
import {useAppDispatch} from '../../../../redux/hooks';
import styles from './actionTimeFilter.module.scss';
import {setActivefilterMovie} from '../../../../redux/movies-slice';
import FilterButton from '@/components/Ui/Buttons/FilterButton/FilterButton';
import { submitHandler } from './submitHandler';
import FilterInput from '@/components/Ui/Inputs/FilterInput';

export interface ActionTimeFilterMoviesPropsType{
  onHide:()=>void
}

const ActionTimeFilter = ({onHide}:ActionTimeFilterMoviesPropsType) => {

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
        catName: 'czas_akcji',
        queryName: 'at.action_time',
        queryValue: `${dateRangeStart}`,
      };
      dispatch(setActivefilterMovie(payloadToSend));
    } else {
      const payloadToSend = {
        catName: 'czas_akcji',
        queryName: 'at.action_time',
        queryValue: `${dateRangeStart}-${dateRangeEnd}`,
      };
      dispatch(setActivefilterMovie(payloadToSend));
    }
  };

  useEffect(() => {
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
    if (error.dateRangeStart && Number(dateRangeStart) >= 0) {
      setError((state) => ({
        dateRangeStart: false,
        dateRangeEnd: state.dateRangeEnd,
      }));
    }
    if (error.dateRangeEnd && Number(dateRangeEnd) > Number(dateRangeStart)) {
      setError({dateRangeStart: false, dateRangeEnd: false});
    }
  }, [dateRangeStart, dateRangeEnd]);
  
  return (
    <div className={styles.container}>
      <div className={styles.inputBox}>
        <FilterInput 
        type='number' 
        placeholder='0' 
        value={dateRangeStart} 
        onChange={(e)=>setDateRangeStart(e.target.value)} 
        error={error.dateRangeStart} 
        label='Od roku'/>
       -
       <FilterInput 
        type='number' 
        placeholder='2025' 
        value={dateRangeEnd} 
        onChange={(e) => setDateRangeEnd(e.target.value)} 
        error={error.dateRangeStart} 
        label='Do roku'/>
      </div>
      <div className={styles.commitBox}>
        <span className={styles.text}>
          {dateRangeStart}-{dateRangeEnd}
        </span>
        <FilterButton value="Zatwierdź" onClick={() => submitHandler({dateRangeStart,dateRangeEnd,setError,addDateRangeFilter,setDateRangeEnd,setDateRangeStart,onHide})} />
      </div>
      <div className={styles.inputBox}>
      <FilterInput 
        type='number' 
        placeholder='2005' 
        value={dateRangeStart} 
        onChange={(e) => {
          setDateRangeStart(e.target.value);
          setDateRangeEnd(e.target.value);
        }} 
        error={error.dateRangeStart} 
        label='Podaj rok'/>
        
      </div>
    </div>
  );
};

export default ActionTimeFilter;
