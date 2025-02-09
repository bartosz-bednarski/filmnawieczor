'use client';
import React from 'react';
import styles from './secondaryFilters.module.scss';
import ActionTimeFilter from '../ActionTime/ActionTimeFilter';
import DateReleaseFilter from '../DateRelease/DateReleaseFilter';
import {useAppDispatch, useAppSelector} from '../../../../redux/hooks';
import {useEffect, useState} from 'react';
import {setActivefilterMovie} from '../../../../redux/movies-slice';
import FilterButton from '@/components/Ui/Buttons/FilterButton/FilterButton';
import SecondaryFiltersCloseButton from '@/components/Ui/Buttons/SecondaryFiltersCloseButton/SecondaryFiltersCloseButton';
import { CategoryType } from '@/redux/utils/moviesCategories';

export interface SecondaryFiltersMoviesPropsType {
  onHide: () => void;
}

const SecondaryFilters = ({onHide}: SecondaryFiltersMoviesPropsType) => {
  const dispatch = useAppDispatch();
  const secondaryCatsToDisplayStore = useAppSelector(
    (state) => state.movies.secondaryCatsToDisplay
  );
  const categoriesStore = useAppSelector((state) => state.movies.categories);
  const [secondaryCategoriesToDisplay, setSecondaryCategoriestoDisplay] =
    useState<CategoryType | null>(null);

  const onClickHandler = (catName: string) => {
    if (secondaryCategoriesToDisplay) {
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

  if (secondaryCatsToDisplayStore === 'czas_akcji') {
    return (
      <div className={styles.container}>
        <SecondaryFiltersCloseButton
          onClick={() => onHide()}
          text="Kategorie główne"
        />
        <div className={styles.rowBox}>
          <ActionTimeFilter onHide={onHide} />
        </div>
      </div>
    );
  }

  if (secondaryCatsToDisplayStore === 'rok_produkcji') {
    return (
      <div className={styles.container}>
        <SecondaryFiltersCloseButton
          onClick={() => onHide()}
          text="Kategorie główne"
        />
        <div className={styles.rowBox}>
          <DateReleaseFilter onHide={onHide} />
        </div>
      </div>
    );
  }

  if (secondaryCategoriesToDisplay !== null) {
    if (!secondaryCategoriesToDisplay.secondaryCats) return;

    const secondaryCats = secondaryCategoriesToDisplay.secondaryCats.filter(
      (item) => item.active
    );
    return (
      <div className={styles.container}>
        <SecondaryFiltersCloseButton
          onClick={() => onHide()}
          text="Kategorie główne"
        />
        <div className={styles.rowBox}>
          {secondaryCats.map((secCat) => (
            <FilterButton
              value={secCat.catName}
              key={secCat.id}
              onClick={() => {
                onClickHandler(secCat.catName);
                onHide();
              }}
            />
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export default SecondaryFilters;
