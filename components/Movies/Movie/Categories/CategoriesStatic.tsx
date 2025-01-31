'use client';
import React from 'react';
import styles from './categories.module.scss';
import universesStyles from '../universes.module.scss';
import {setActivefilterMovie} from '@/redux/movies-slice';
import Link from 'next/link';
import {useAppDispatch} from '@/redux/hooks';
const CategoriesStatic: React.FC<{
  title: string;
  text: string;
  type: 'button' | 'static';
  universe: string;
  queryName?: string;
  queryValue?: string;
  catName?: string;
}> = ({title, text, type, universe, queryName, catName}) => {
  const dispatch = useAppDispatch();
  return (
    <div
      className={`${styles['category-box']} ${
        universesStyles[`${universe}-category-box`]
      }`}
    >
      <span
        className={`${styles['category-box__category']} ${
          universesStyles[`${universe}-category-box__category`]
        }`}
      >
        {title}
      </span>

      <span
        className={`${styles['category-box__category-item-bg']} ${
          universesStyles[`${universe}-category-box__category-item-bg`]
        }`}
      >
        <Link
          href="/filmy"
          className={`${
            styles[
              `category-box__category-item${type === 'button' ? '-button' : ''}`
            ]
          } ${
            universesStyles[
              `${universe}-category-box__category-item${
                type === 'button' ? '-button' : ''
              }`
            ]
          }`}
          onClick={() => {
            dispatch(
              setActivefilterMovie({
                queryName: queryName,
                queryValue: text.trim(),
                catName: catName,
              })
            );
          }}
        >
          {text}
        </Link>
      </span>
    </div>
  );
};

export default CategoriesStatic;
