'use client';
import React from 'react';
import styles from './titleMarvel.module.scss';

const TitleMarvel: React.FC<{title: string}> = ({title}) => {
  return (
    <div className={styles.titleBox}>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

export default TitleMarvel;
