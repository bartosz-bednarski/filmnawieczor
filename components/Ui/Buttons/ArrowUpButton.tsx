'use client';
import React from 'react';
import styles from './buttons.module.scss';
const ArrowUpButton: React.FC<{
  onClick: any;
  text: string;
}> = ({onClick}) => {
  return (
    <span className={styles['arrow-up-button-box']} onClick={() => onClick()}>
      <span className={styles['arrow-up-button-box__text']}>Zamknij</span>
    </span>
  );
};
export default ArrowUpButton;
