'use client';
import React from 'react';
import {setActivefilterMovie} from '@/redux/movies-slice';
import Link from 'next/link';
import {useAppDispatch} from '@/redux/hooks';
import {UNIVERSES_STYLES} from '@/styles/Universes/universesStyles';
const CategoriesStatic: React.FC<{
  title: string;
  text: string;
  type: 'button' | 'static';
  universe: 'Marvel' | 'None';
  queryName?: string;
  queryValue?: string;
  catName?: string;
}> = ({title, text, type, universe, queryName, catName}) => {
  const styles = UNIVERSES_STYLES[universe];
  const dispatch = useAppDispatch();
  return (
    <div className={styles.categoriesBox}>
      <span className={styles.title}>{title}</span>

      <span className={styles.linkBackground}>
        <Link
          href="/filmy"
          className={styles[`${type === 'button' ? 'linkButton' : 'link'}`]}
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
