'use client';
import React from 'react';
import styles from './primaryFilters.module.scss';
import {useAppDispatch, useAppSelector} from '../../../../redux/hooks';
import {setSecondaryCatsToDisplayMovie} from '../../../../redux/movies-slice';
import FilterButton from '@/components/Ui/Buttons/FilterButton/FilterButton';

export interface PrimaryFiltersMoviesPropsType{
  onHide:()=>void
}

const PrimaryFilters= ({onHide}:PrimaryFiltersMoviesPropsType) => {

  const dispatch = useAppDispatch();
  const primaryCategoriesStore = useAppSelector(
    (state) => state.movies.categories
  );

  const onClickHandler = (catName: string) => {
    onHide();
    dispatch(setSecondaryCatsToDisplayMovie(catName));
  };

  return (
   
      <div className={styles.container}>
        <div className={styles.sideBox}></div>
        <div className={styles.contentBox}>
          <h1>Baza filmów</h1>
          <div
            className={
              styles.rowBox
            }
          >
            {primaryCategoriesStore.map((primaryCategory) => {
              return (
                <FilterButton
                  value={primaryCategory.catDisplayName}
                  key={primaryCategory.id}
                  onClick={() => onClickHandler(primaryCategory.catName)}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.sideBox}></div>
      </div>
   
  );
};

export default PrimaryFilters;
