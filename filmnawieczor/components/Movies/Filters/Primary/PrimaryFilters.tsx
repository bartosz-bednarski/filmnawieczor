'use client'
import React from 'react';
import styles from '../filters.module.scss';
import FilterBtn from '../../../ui/buttons/FilterBtn';
import {useAppDispatch, useAppSelector} from '../../../../redux/hooks';
import {setSecondaryCatsToDisplayMovie} from '../../../../redux/movies-slice';
const PrimaryFilters: React.FC<{onHide: () => void}> = ({onHide}) => {
  const dispatch = useAppDispatch();
  const primaryCategoriesStore = useAppSelector(
    (state) => state.movies.categories
  );
  const onClickHandler = (catName: string) => {
    onHide();
    dispatch(setSecondaryCatsToDisplayMovie(catName));
  };
  return (
    <>
      <div className={styles['filters-container']}>
        <div className={styles['filters-container__side-boxes']}></div>
        <div
          className={styles['filters-container__primary-filters-container']}
        >
          <h1>Baza filmów</h1>
          <div
            className={
              styles['filters-container__primary-filters-container__box']
            }
          >
            {primaryCategoriesStore.map((primaryCategory) => {
              return (
                <FilterBtn
                  value={primaryCategory.catDisplayName}
                  key={primaryCategory.id}
                  onClick={() => onClickHandler(primaryCategory.catName)}
                />
              );
            })}
          </div>
        </div>
        <div className={styles['filters-container__side-boxes']}></div>
      </div>
      {/* <div className={styles["filters-container__primary-filters-container"]}>
      <h1>Baza filmów</h1>
      <div
        className={styles["filters-container__primary-filters-container__box"]}
      >
        {primaryCategoriesStore.map((primaryCategory) => {
          return (
            <FilterBtn
              value={primaryCategory.catDisplayName}
              key={primaryCategory.id}
              onClick={() => onClickHandler(primaryCategory.catName)}
            />
          );
        })}
      </div>
    </div> */}
    </>
  );
};
export default PrimaryFilters;
