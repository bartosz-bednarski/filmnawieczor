'use client';
import React from 'react';
import styles from '../marvelUniverse.module.scss';
const TitleMarvel: React.FC<{title: string}> = ({title}) => {
  return (
    <div className={styles['section-title-container']}>
      <h2 className={styles['section-title-container__title']}>{title}</h2>
    </div>
  );
};
export default TitleMarvel;
