'use client';
import React from 'react';
import styles from './buttons.module.scss';
const ActiveFilterButton: React.FC<{
  value: string | number;
  onClick: () => void;
}> = ({value, onClick}) => {
  return (
    <div className={styles['active-filter-box']} onClick={() => onClick()}>
      <span className={styles['active-filter-box__content']}>{value}</span>
    </div>
  );
};
export default ActiveFilterButton;
