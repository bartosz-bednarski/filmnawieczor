'use client';
import Link from 'next/link';
import React from 'react';
import MainHeader from '../Ui/Headers/MainHeader/MainHeader';
import stylesGlobal from '../Ui/Styles/mainContainerWithAdverts.module.scss';
import styles from './universes.module.scss';
const Universes: React.FC = () => {
  return (
    <div className={styles['container']}>
      <MainHeader title="Uniwersa Filmowe" />
      <div className={stylesGlobal['main-container']}>
        <div className={stylesGlobal['main-container__advert-box']}> </div>

        <div className={styles['universes-container']}>
          <span className={styles['universes-container__about']}>
            <h1>Witamy w świecie Filmowych Uniwersów</h1>
            Na naszej stronie odkryjesz fascynujące uniwersa filmowe, które
            przeniosą Cię w niesamowite światy pełne bohaterów, epickich starć i
            niezwykłych przygód. Od potężnych Avengers w Marvel Cinematic
            Universe, przez mroczne zakamarki Wizarding World, aż po pełne grozy
            historie w Conjuring Universe – każda z tych opowieści ma coś
            wyjątkowego do zaoferowania.
          </span>
          <Link
            href="/uniwersa/marvel"
            className={styles['universes-container__universes-box']}
          >
            <img
              width={300}
              height={200}
              alt="Marvel"
              loading="eager"
              src={
                require('../../public/assets/universes/Marvel-main-logo.webp')
                  .default.src
              }
              title="Marvel"
            />
          </Link>
        </div>
        <div className={stylesGlobal['main-container__advert-box']}> </div>
      </div>
    </div>
  );
};
export default Universes;
