'use client';
import React from 'react';
import styles from './buttons.module.scss';
const FilterButton: React.FC<{
  value: string | number;
  onClick: () => void;
}> = ({value, onClick}) => {
  return (
    <div className={styles['box']} onClick={() => onClick()}>
      <div className={styles['box__content']}>{value}</div>
    </div>
  );
};
export default FilterButton;
