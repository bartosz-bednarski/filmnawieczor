'use client'
import Link from '@/node_modules/next/link';
import React from 'react';
import styles from './buttons.module.scss';
const ButtonSlider: React.FC<{url: string; title: string}> = ({url, title}) => {
  
  return (
    <Link
      role="button"
      className={styles['button-slider']}
      href={url}
    >
      {title}
    </Link>
  );
};

export default ButtonSlider;
