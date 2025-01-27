'use client'
import React from 'react';
import styles from './buttons.module.scss';
const FilterBtn: React.FC<{
  value: string | number;
  onClick: any;
}> = ({value, onClick}) => {
  return (
    <div className={styles['box']} onClick={() => onClick()}>
      <div className={styles['box__content']}>{value}</div>
    </div>
  );
};
export default FilterBtn;
