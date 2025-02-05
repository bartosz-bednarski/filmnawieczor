'use client';
import React from 'react';
import styles from './sortingButton.module.scss';

export interface SortingButtonPropsType{
  active: boolean;
  order: 'ASC' | 'DESC';
  listActive?: boolean;
  name: string;
  onClick: () => void; 
}

const SortingButton= ({active, order, listActive, name, onClick}:SortingButtonPropsType) => {

  const sortingDirectionImage = require(
    `../../../../public/assets/ui/buttons/arrow-${order}-circle-${
      active ? 'active' : 'passive'
    }.webp`
  ).default;

  if(!active){
    return(  <button
      className={styles.button}
      onClick={onClick}
    >
      <span>{name}</span>
      <img
        width={24}
        height={24}
        loading="eager"
        alt="sorting-direction"
        src={sortingDirectionImage.src}
      /></button>)
  }

  return (
    <button
      className={styles.buttonActive}
      onClick={onClick}
    >
      <span>{name}</span>
      <img
        width={24}
        height={24}
        loading="eager"
        alt="sorting-direction"
        src={sortingDirectionImage.src}
      />
      
        <img
          className={listActive?styles.imageActive:styles.image
          }
          width={24}
          height={24}
          loading="eager"
          alt="dropdown-menu-status"
          src={
            require('../../../../public/assets/ui/buttons/chevron-down.webp')
              .default.src
          }
        />
      
    </button>
  );
};

export default SortingButton;
