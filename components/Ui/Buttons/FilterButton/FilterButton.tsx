'use client';
import styles from './filterButton.module.scss';

export interface FilterButtonPropsType{
  value: string | number;
  onClick: () => void;
}

const FilterButton= ({value, onClick}:FilterButtonPropsType) => {

  return (
    <button className={styles.button} onClick={() => onClick()}>
     {value}
    </button>
  );
};

export default FilterButton;
