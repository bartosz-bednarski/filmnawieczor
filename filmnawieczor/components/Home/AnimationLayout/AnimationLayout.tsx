'use client'
import React, {useEffect, useState} from 'react';
import styles from './animationLayout.module.scss';
import logo from '../../../public/assets/logo/logo-footer.webp';
import fs0 from  '../../../public/assets/home/home-fs-0.webp';
import fs1 from '../../../public/assets/home/home-fs-1.webp';
import fs2 from '../../../public/assets/home/home-fs-2.webp';
import fs3 from '../../../public/assets/home/home-fs-3.webp';
import fs4 from '../../../public/assets/home/home-fs-4.webp';
import fs1cover from '../../../public/assets/home/home-fs-1-cover.webp';
import fs2cover from '../../../public/assets/home/home-fs-2-cover.webp';
import fs3cover from '../../../public/assets/movies/iron-man-3.webp';
import fs4cover from '../../../public/assets/movies/1917.webp';
const AnimationLayout: React.FC = () => {
  const [restartScreen, setRestartScreen] = useState(false);
  useEffect(() => {
    setInterval(() => {
      const fs4Id = document.getElementById('fs-4');
      const style = fs4Id !== null ? window.getComputedStyle(fs4Id) : 0;
      const opacity = style !== 0 ? style.getPropertyValue('opacity') : 0;
      if (Number(opacity) < 0.8) {
        setRestartScreen(false);
      }
      if (Number(opacity) > 0.9) {
        console.log('123');
        setRestartScreen(true);
      }
    }, 1000);
  }, [restartScreen]);
  return (
    <div className={styles['animation-container']}>
      <div className={styles['shelf']}>
        <span className={styles['shelf-item']}></span>
        <span className={styles['shelf-item-2']}></span>
        {!restartScreen && (
          <>
            <section
              className={`${styles['movie-box']} ${styles['movie-box__fs-1-cover']}`}
              style={{zIndex: 6, left: 0, bottom: 70, position: 'absolute'}}
            >
              <img
                src={fs1cover.src}
                className={styles['movie-box__image']}
                alt="aktualnosci"
                width={135}
                height={196}
                loading="eager"
              />
              <span className={styles['movie-box__logo-box']}>
                <img
                  src={logo.src}
                  className={styles['movie-box__logo-box__logo']}
                  alt="logo"
                  width={75}
                  height={15}
                  loading="eager"
                />
              </span>

              <span className={styles['movie-box__text-absolute']}>
                AKTUALNOŚCI
              </span>
            </section>{' '}
            <section
              className={`${styles['movie-box']} ${styles['movie-box__fs-2-cover']}`}
              style={{zIndex: 5, left: 17, bottom: 93, position: 'absolute'}}
            >
              <img
                src={fs2cover.src}
                className={styles['movie-box__image']}
                alt="nasze filtry"
                width={135}
                height={196}
                loading="eager"
              />
              <span className={styles['movie-box__logo-box']}>
                <img
                  src={logo.src}
                  className={styles['movie-box__logo-box__logo']}
                  alt="logo"
                  width={75}
                  height={15}
                  loading="eager"
                />
              </span>

              <span className={styles['movie-box__text-absolute']}>
                NASZE FILTRY
              </span>
            </section>
            <section
              className={`${styles['movie-box']} ${styles['movie-box__fs-3-cover']}`}
              style={{zIndex: 4, left: 34, bottom: 116, position: 'absolute'}}
            >
              <img
                src={fs3cover.src}
                className={styles['movie-box__image']}
                alt="iron man 3"
                width={135}
                height={196}
                loading="eager"
              />
              <span className={styles['movie-box__logo-box']}>
                <img
                  src={logo.src}
                  className={styles['movie-box__logo-box__logo']}
                  alt="logo"
                  width={75}
                  height={15}
                  loading="eager"
                />
              </span>

              <span className={styles['movie-box__text-absolute']}>
                IRON MAN 3
              </span>
            </section>
            <section
              className={`${styles['movie-box']} ${styles['movie-box__fs-4-cover']}`}
              style={{zIndex: 3, left: 51, bottom: 139, position: 'absolute'}}
            >
              <img
                src={fs4cover.src}
                className={styles['movie-box__image']}
                alt="1917"
                width={135}
                height={196}
                loading="eager"
              />
              <span className={styles['movie-box__logo-box']}>
                <img
                  src={logo.src}
                  className={styles['movie-box__logo-box__logo']}
                  alt="logo"
                  width={75}
                  height={15}
                  loading="eager"
                />
              </span>

              <span className={styles['movie-box__text-absolute']}>1917</span>
            </section>
          </>
        )}
      </div>
      <section className={styles['screen-frame']}>
        <section className={styles['screen-frame__screen']}>
          <span className={styles['screen-frame__screen__static']}></span>
          <img
            src={fs0.src}
            className={styles['screen-frame__screen__fs-0']}
            alt="logo"
            width={1140}
            height={600}
            loading="eager"
          />
          {!restartScreen && (
            <>
              <img
                src={fs1.src}
                className={styles['screen-frame__screen__fs-1']}
                alt="aktualności"
                width={1140}
                height={600}
                loading="eager"
              />
              <img
                src={fs2.src}
                className={styles['screen-frame__screen__fs-2']}
                alt="nasze filtry"
                width={1140}
                height={600}
                loading="eager"
              />
              <img
                src={fs3.src}
                className={styles['screen-frame__screen__fs-3']}
                alt="iron man 3"
                width={1140}
                height={600}
                loading="eager"
              />
              <img
                src={fs4.src}
                className={styles['screen-frame__screen__fs-4']}
                alt="1917"
                width={1140}
                height={600}
                loading="eager"
                id="fs-4"
              />
            </>
          )}
        </section>
      </section>
      {/* second shelf */}
      <div className={styles['shelf-2']}>
        <span className={styles['projector-eye']}></span>
        <section className={styles['projector']}>
          {!restartScreen && (
            <span className={styles['projector__loading']}></span>
          )}
          <div className={styles['projector__buttons']}>
            {!restartScreen && (
              <>
                {' '}
                <span className={styles['projector__buttons__play']}></span>
                <span className={styles['projector__buttons__pause']}></span>
              </>
            )}
          </div>
        </section>
        <span className={styles['shelf-2-item']}></span>
        <span className={styles['shelf-2-item-2']}></span>
      </div>
    </div>
  );
};

export default AnimationLayout;
