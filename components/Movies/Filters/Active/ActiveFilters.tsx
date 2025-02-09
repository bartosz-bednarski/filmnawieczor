'use client';
import React from 'react';
import {useAppDispatch, useAppSelector} from '../../../../redux/hooks';
import {removeActiveFilterMovie} from '../../../../redux/movies-slice';
import styles from './activeFilters.module.scss';
import ActiveFilterButton from '@/components/Ui/Buttons/ActiveFilterButton/ActiveFilterButton';

const ActiveFilters = () => {
  const dispatch = useAppDispatch();
  const activeFiltersStore = useAppSelector(
    (state) => state.movies.activeFilters
  );

  return (
    <div className={styles.activeFilters}>
      <h3>Aktywne filtry</h3>
      <div className={styles.box}>
        {activeFiltersStore.map((filter) => {
          return (
            <ActiveFilterButton
              value={filter.queryValue}
              key={filter.queryValue}
              onClick={() => {
                dispatch(
                  removeActiveFilterMovie({
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
