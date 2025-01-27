'use client'
import React from 'react';
import styles from '../filters.module.scss';
import FilterBtn from '../../../ui/buttons/FilterBtn';
import ArrowUpBtn from '../../../ui/buttons/ArrowUpBtn';
import ActionTimeFilter from '../ActionTime/ActionTimeFilter';
import DateReleaseFilter from '../DateRelease/DateReleaseFilter';
import {useAppDispatch, useAppSelector} from '../../../../redux/hooks';
import {useEffect, useState} from 'react';
import {setActivefilterMovie} from '../../../../redux/movies-slice';
import {Category} from '../../../../types/redux/moviesFilters';
const SecondaryFilters: React.FC<{onHide: () => void}> = ({onHide}) => {
  const dispatch = useAppDispatch();
  const secondaryCatsToDisplayStore = useAppSelector(
    (state) => state.movies.secondaryCatsToDisplay
  );
  const categoriesStore = useAppSelector(
    (state) => state.movies.categories
  );
  const [secondaryCategoriesToDisplay, setSecondaryCategoriestoDisplay] =
    useState<Category | null>(null);

  const onClickHandler = (catName: string) => {
    if(secondaryCategoriesToDisplay){
      const payloadToSend = {
        catName: secondaryCategoriesToDisplay.catName,
        queryName: secondaryCategoriesToDisplay.queryName,
        queryValue: catName,
      };
      dispatch(setActivefilterMovie(payloadToSend));
    }
    
  };
  useEffect(() => {
    if (secondaryCatsToDisplayStore === 'gatunek') {
      const catStoreIndex = categoriesStore.findIndex(
        (cat) => cat.catName === 'gatunek'
      );
      setSecondaryCategoriestoDisplay(categoriesStore[catStoreIndex]);
    } else if (secondaryCatsToDisplayStore === 'miejsce_akcji') {
      const catStoreIndex = categoriesStore.findIndex(
        (cat) => cat.catName === 'miejsce_akcji'
      );
      setSecondaryCategoriestoDisplay(categoriesStore[catStoreIndex]);
    }
  }, [categoriesStore, secondaryCatsToDisplayStore]);

  return (
    <div className={styles['filters-container__secondary-filters-container']}>
      <ArrowUpBtn onClick={() => onHide()} text="Kategorie główne" />
      <div
        className={
          styles['filters-container__secondary-filters-container__box']
        }
      >
        {secondaryCatsToDisplayStore === 'czas_akcji' && (
          <ActionTimeFilter onHide={onHide} />
        )}
        {secondaryCatsToDisplayStore === 'rok_produkcji' && (
          <DateReleaseFilter onHide={onHide} />
        )}
        {secondaryCategoriesToDisplay?.secondaryCats &&
          secondaryCategoriesToDisplay.secondaryCats.map((secCat) => {
            if (secCat.active) {
              return (
                <FilterBtn
                  value={secCat.catName}
                  key={secCat.id}
                  onClick={() => {
                    onClickHandler(secCat.catName);
                    onHide();
                  }}
                />
              );
            }
          })}
      </div>
    </div>
  );
};
export default SecondaryFilters;
