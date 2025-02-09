'use client';
import React from 'react';
import styles from './activeFilterButton.module.scss';

export interface ActiveFilterButtonPropsType {
  value: string | number;
  onClick: () => void;
}

const ActiveFilterButton = ({value, onClick}: ActiveFilterButtonPropsType) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {value}
    </button>
  );
};

export default ActiveFilterButton;
