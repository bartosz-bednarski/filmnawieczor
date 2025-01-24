'use client'
import React from 'react';
import styles from './mainHeader.module.scss';
const MainHeader: React.FC<{title: string}> = ({title}) => {
  return (
    <div className={styles['header-container']}>
      <div className={styles['header-container__side-boxes']}></div>
      <div className={styles['header-container__text-box']}>
        <h1>{title}</h1>
      </div>
      <div className={styles['header-container__side-boxes']}></div>
    </div>
  );
};
export default MainHeader;
