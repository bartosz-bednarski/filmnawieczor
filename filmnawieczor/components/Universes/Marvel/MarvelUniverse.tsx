'use client'
import React from 'react';
import styles from './marvelUniverse.module.scss';
import stylesGlobal from '../../Ui/Styles/mainContainerWithAdverts500ad.module.scss';
import MarvelLogo from '../../../public/assets/universes/Marvel-main-logo.webp'
import About from './About/About';
import Title from './Title/Title';
import Timeline from './Timeline/Timeline';
const MarvelUniverse: React.FC = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['marvel-logo']}>
        <img
          src={MarvelLogo.src}
          height={120}
          width={300}
          alt="Marvel"
          title="Marvel"
          loading="eager"
        />
        <span className={styles['marvel-logo__text']}>UNIVERSE</span>
      </div>
      <h1 style={{visibility: 'hidden'}}>Uniwersum Marvela</h1>
      <div className={stylesGlobal['main-container']}>
        <div className={stylesGlobal['main-container__advert-box']}> </div>
        <div className={stylesGlobal['main-container__content-container']}>
          {' '}
          <div className={styles['marvel-container']}>
            <About />
            <Title title="Oś czasu" />
            <Timeline />
          </div>
        </div>

        <div className={stylesGlobal['main-container__advert-box']}> </div>
      </div>
    </div>
  );
};
export default MarvelUniverse;
