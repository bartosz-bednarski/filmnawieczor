'use client';
import React from 'react';
import styles from './buttons.module.scss';
const SortingButton: React.FC<{
  active: boolean;
  order: 'ASC' | 'DESC';
  listActive?: boolean;
  name: string;
  onClick: () => void;
}> = ({active, order, listActive, name, onClick}) => {
  const sortingDirectionImage = require(
    `../../../public/assets/ui/buttons/arrow-${order}-circle-${
      active ? 'active' : 'passive'
    }.webp`
  ).default;
  return (
    <div
      className={styles[`sortingButton-box${active ? '--active' : ''}`]}
      onClick={() => onClick()}
    >
      <span>{name}</span>
      <img
        width={24}
        height={24}
        loading="eager"
        alt="sorting-direction"
        src={sortingDirectionImage.src}
      />
      {active && (
        <img
          className={
            styles[
              `sortingButton-box__dropdown-btn${listActive ? '--active' : ''}`
            ]
          }
          width={24}
          height={24}
          loading="eager"
          alt="dropdown-menu-status"
          src={
            require('../../../public/assets/ui/buttons/chevron-down.webp')
              .default.src
          }
        />
      )}
    </div>
  );
};
export default SortingButton;
