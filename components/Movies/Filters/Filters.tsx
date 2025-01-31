'use client';
import React from 'react';
import styles from './filters.module.scss';
import PrimaryFilters from './Primary/PrimaryFilters';
import {useState} from 'react';
import SecondaryFilters from './Secondary/SecondaryFilters';
import ActiveFilters from './Active/ActiveFilters';
import {useAppSelector} from '../../../redux/hooks';
const Filters: React.FC = () => {
  const activeFiltersStore = useAppSelector(
    (state) => state.movies.activeFilters
  );
  const [showPrimaryFilters, setShowPrimaryFilters] = useState(true);
  const [showSecondaryFilters, setShowSecondaryFilters] = useState(false);

  const hidePrimaryFiltersHandler = () => {
    setShowPrimaryFilters(false);
    setShowSecondaryFilters(true);
  };
  const showPrimaryFiltersHandler = () => {
    setShowPrimaryFilters(true);
    setShowSecondaryFilters(false);
  };
  return (
    <div
      className={styles['filters-container']}
      style={{flexDirection: 'column'}}
    >
      {showPrimaryFilters && (
        <PrimaryFilters onHide={hidePrimaryFiltersHandler} />
      )}
      {showSecondaryFilters && (
        <SecondaryFilters onHide={showPrimaryFiltersHandler} />
      )}
      {activeFiltersStore.length > 0 && <ActiveFilters />}
    </div>
  );
};
export default Filters;
