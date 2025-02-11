'use client';
import React from 'react';
import styles from './h2Banner.module.scss';
const H2Banner: React.FC<{
  header: string;
}> = ({header}) => {
  return <h2 className={styles.header}>{header}</h2>;
};
export default H2Banner;
