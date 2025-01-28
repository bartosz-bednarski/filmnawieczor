'use client';
import React from 'react';
import styles from './buttons.module.scss';
const ActiveFilterBtn: React.FC<{
  value: string | number;
  onClick: any;
  key: number | string;
}> = ({value, onClick, key}) => {
  return (
    <div className={styles['active-filter-box']} onClick={() => onClick()}>
      <span className={styles['active-filter-box__content']}>{value}</span>
    </div>
  );
};
export default ActiveFilterBtn;
