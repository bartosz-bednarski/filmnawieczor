'use client'
import React from 'react';
import styles from './h2Banner.module.scss';
const H2Banner: React.FC<{
  header: string;
  secondaryHeader: string;
  h2Styles?: any;
  h3Styles?: any;
}> = ({header, secondaryHeader, h2Styles, h3Styles}) => {
  return (
    <div className={styles['header-container']}>
      <h2 className={styles['header-container__header']} style={h2Styles}>
        {header}
      </h2>
      {secondaryHeader !== '' && (
        <h3
          className={styles['header-container__secondary-header']}
          style={h3Styles}
        >
          {secondaryHeader}
        </h3>
      )}
    </div>
  );
};
export default H2Banner;
