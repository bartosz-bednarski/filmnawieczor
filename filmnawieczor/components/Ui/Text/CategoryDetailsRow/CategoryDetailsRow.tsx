'use client'
import React from 'react';
import styles from './categoryDetailsRow.module.scss';
import universesStyles from '../../Styles/universes.module.scss';

export interface CategoryDetailsRowPropsType {
  title: string;
  text: any;
  type: 'listItem' | 'static';
  universe: string;
}

const CategoryDetailsRow = ({title, text, type, universe}:CategoryDetailsRowPropsType) => {
  return (
    <div className={styles['category-box']}>
      <span
        className={`${styles['category-box__category']} ${
          universesStyles[`${universe}-category-box__category`]
        }`}
      >
        {title}
      </span>
      {type === 'static' && (
        <span
          className={`${styles['category-box__category-item-bg']} ${
            universesStyles[`${universe}-category-box__category-item-bg`]
          }`}
        >
          <span
            className={`${styles['category-box__category-item']} ${
              universesStyles[`${universe}-category-box__category-item`]
            }`}
          >
            {text}
          </span>
        </span>
      )}
      <div className={styles['category-box__category-items-box']}>
        {type === 'listItem' &&
          text.map((item: string) => (
            <span key={item}
              className={`${styles['category-box__category-item-bg']} ${
                universesStyles[`${universe}-category-box__category-item-bg`]
              }`}
            >
              <span
                className={`${styles['category-box__category-item']} ${
                  universesStyles[`${universe}-category-box__category-item`]
                }`}
              >
                {item}
              </span>
            </span>
          ))}
      </div>
    </div>
  );
};

export default CategoryDetailsRow;
