'use client'
import React from 'react';
import {useEffect} from 'react';
import styles from './navigation.module.scss';
import {useState} from 'react';
import logo from '../../public/assets/logo.webp';
import hamburgerIcon from '../../public/assets/ui/Icons/hamburger-icon.png';
import ArrowUpIcon from '../../public/assets/ui/Icons/chevron-up.png';
import Link from '@/node_modules/next/link';

const Navigation: React.FC = () => {
  const [showMobileList, setShowMobileList] = useState(false);
  useEffect(() => {
    setShowMobileList(false);
  }, []);
  return (
    <div className={styles['navigation']}>
      <img
        src={logo.src}
        alt="logo"
        className={styles['navigation__logo-img']}
        width={194}
        height={37}
        title="Film na wieczór"
        loading="eager"
      />
      <ul className={styles['navigation__list']}>
        <li>
          <Link href="/"
           
          >
            Strona główna
          </Link>
        </li>
        <li>
          <Link
            href='/aktualnosci'
           
          >
            Aktualności
          </Link>
        </li>
        <li>
          <Link
            href='/filmy'
          
          >
            Filmy
          </Link>
        </li>
        <li>
          <Link
           href='/seriale'
           
          >
            Seriale
          </Link>
        </li>
        <li>
          <Link
           href='/uniwersa'
           
          >
            Uniwersa Filmowe
          </Link>
        </li>
      </ul>
      {showMobileList && (
        <ul className={styles['navigation__list-mobile']}>
          <li>
            <Link
             href='/'
             
            >
              Strona główna
            </Link>
          </li>
          <li>
            <Link
             href='/aktualnosci'
             
            >
              Aktualności
            </Link>
          </li>
          <li>
            <Link
             href='/filmy'
             
            >
              Filmy
            </Link>
          </li>
          <li>
            <Link
              href='/seriale'
             
            >
              Seriale
            </Link>
          </li>
          <li>
            <Link
             href='/uniwersa'
             
            >
              Uniwersa Filmowe
            </Link>
          </li>
          <li>
            <span
              className={styles['navigation__list-mobile__arrow-up-button']}
            >
              <img
                src={ArrowUpIcon.src}
                className={styles['navigation__mobile-hamburger-icon']}
                width={100}
                height={50}
                onClick={() => setShowMobileList(false)}
                alt="arrowUp button"
                title="schowaj menu"
                loading="eager"
              />
              <span>Schowaj menu</span>
            </span>
          </li>
        </ul>
      )}
      <img
        src={hamburgerIcon.src}
        className={styles['navigation__mobile-hamburger-icon']}
        width={40}
        height={40}
        onClick={() => setShowMobileList(true)}
        alt="hamburger button"
        title="film na wieczor menu"
        loading="eager"
      />
      <img
        src={logo.src}
        alt="logo"
        className={styles['navigation__img-2']}
        width={194}
        height={37}
        title="film na wieczor"
        loading="eager"
      />
    </div>
  );
};
export default Navigation;
