'use client';
import React from 'react';
import styles from './buttons.module.scss';
const ButtonYellow: React.FC<{
  value: string | number;
  onClick: any;
}> = ({value, onClick}) => {
  return (
    <div className={styles['button-yellow']} onClick={() => onClick()}>
      {value}
    </div>
  );
};
export default ButtonYellow;
