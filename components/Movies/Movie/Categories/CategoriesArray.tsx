'use client';
import React from 'react';
// import styles from './categories.module.scss';
// import universesStyles from '../universes.module.scss';
import Link from 'next/link';
import {setActivefilterMovie} from '@/redux/movies-slice';
import {useAppDispatch} from '@/redux/hooks';
import { UNIVERSES_STYLES } from '@/styles/Universes/universesStyles';
const CategoriesArray: React.FC<{
  title: string;
  text: string[];
  type: 'button' | 'static';
  universe: "Marvel"|"None";
  queryName?: string;
  queryValue?: string;
  catName?: string;
}> = ({title, text, type, universe, queryName, catName}) => {
  const styles = UNIVERSES_STYLES[universe]
  const dispatch = useAppDispatch();
  return (
    <div
      className={styles.categoriesBox} 
    >
      <span
        className={styles.title}
      >
        {title}
      </span>
      <div className={styles.linksBox}>
        {text.map((item: string,index) => (
          <span
            className={styles.linkBackground} key={index}
          >
            <Link
              href="/filmy"
              className={
                styles[
                  `${
                    type === 'button' ? 'linkButton' : 'link'
                  }`
                ]
              }
              onClick={() => {
                dispatch(
                  setActivefilterMovie({
                    queryName: queryName,
                    queryValue: String(item).trim(),
                    catName: catName,
                  })
                );
              }}
            >
              {item}
            </Link>
          </span>
        ))}
      </div>
    </div>
  );
};

export default CategoriesArray;
