'use client'
import React from 'react';
import styles from './buttons.module.scss';
import arrowup from '../../../../assets/chevron-up.png';
const ArrowUpBtn: React.FC<{
  onClick: any;
  text: string;
}> = ({onClick, text}) => {
  return (
    <span className={styles['arrow-up-button-box']} onClick={() => onClick()}>
    
      <span className={styles['arrow-up-button-box__text']}>Zamknij</span>
    </span>
  );
};
export default ArrowUpBtn;
