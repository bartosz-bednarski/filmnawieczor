'use client';
import styles from './secondaryFiltersCloseButton.module.scss';

export interface SecondaryFiltersCloseButton{
  onClick: any;
  text: string;
}

const SecondaryFiltersCloseButton = ({onClick,text}:SecondaryFiltersCloseButton) => {

  return (
    <button className={styles.button} onClick={() => onClick()}>
      <span className={styles.text}>{text}</span>
    </button>
  );
};

export default SecondaryFiltersCloseButton;
