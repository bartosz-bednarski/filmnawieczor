'use client';
import React from 'react';
import styles from './h1SideBoxes.module.scss';
const H1SideBoxes: React.FC<{title: string}> = ({title}) => {
  return (
    <div className={styles.container}>
      <div className={styles.sideBox}></div>
      <div className={styles.textBox}>
        <h1>{title}</h1>
      </div>
      <div className={styles.sideBox}></div>
    </div>
  );
};
export default H1SideBoxes;
