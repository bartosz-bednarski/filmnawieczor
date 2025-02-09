'use client';
import React from 'react';
import {UNIVERSES_STYLES} from '@/styles/Universes/universesStyles';

export interface CategoryHoverPropsType {
  title: string;
  text: string | string[];
  type: 'listItem' | 'static';
  universe: 'Marvel' | 'None';
}

const CategoryHover = ({
  title,
  text,
  type,
  universe,
}: CategoryHoverPropsType) => {
  const styles = UNIVERSES_STYLES[universe];

  if (type === 'static') {
    return (
      <div className={styles.categoryHoverBox}>
        <span className={styles.categoryTitle}>{title}</span>
        <span className={styles.categoryBg}>
          <span className={styles.category}>{text}</span>
        </span>
      </div>
    );
  }
  if (type === 'listItem' && typeof text !== 'string') {
    return (
      <div className={styles.categoryHoverBox}>
        <span className={styles.categoryTitle}>{title}</span>

        <div className={styles.categoriesBox}>
          {text.map((catItem: string) => (
            <span key={catItem} className={styles.categoryBg}>
              <span className={styles.category}>{catItem}</span>
            </span>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export default CategoryHover;
