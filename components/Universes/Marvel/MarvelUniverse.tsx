'use client';
import styles from './marvelUniverse.module.scss';
import stylesGlobal from '../../Ui/Styles/mainContainerWithAdverts500ad.module.scss';
import MarvelLogo from '../../../public/assets/universes/Marvel-main-logo.webp';
import AboutMarvel from './AboutMarvel/AboutMarvel';
import TitleMarvel from './TitleMarvel/TitleMarvel';
import TimelineMarvel from './TimelineMarvel/TimelineMarvel';

const MarvelUniverse = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img
          src={MarvelLogo.src}
          height={120}
          width={300}
          alt="Marvel"
          title="Marvel"
          loading="eager"
        />
        <span className={styles.text}>UNIVERSE</span>
      </div>
      <h1 style={{visibility: 'hidden'}}>Uniwersum Marvela</h1>
      <div className={stylesGlobal['main-container']}>
        <div className={stylesGlobal['main-container__advert-box']}> </div>
        <div className={stylesGlobal['main-container__content-container']}>
          <div className={styles.marvelContainer}>
            <AboutMarvel />
            <TitleMarvel title="Oś czasu" />
            <TimelineMarvel />
          </div>
        </div>

        <div className={stylesGlobal['main-container__advert-box']}> </div>
      </div>
    </div>
  );
};

export default MarvelUniverse;
