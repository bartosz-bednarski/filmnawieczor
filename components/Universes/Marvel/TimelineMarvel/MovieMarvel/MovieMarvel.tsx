'use client';
import Link from 'next/link';
import styles from './movieMarvel.module.scss';

export interface MovieMarvelPropsType {
  view: 'left' | 'right';
  title: string;
  actionTime: string;
  description: string;
  image: string;
  link: string;
}

const MovieMarvel = ({
  view,
  title,
  actionTime,
  description,
  image,
  link,
}: MovieMarvelPropsType) => {
  if (view === 'left') {
    return (
      <Link href={link}>
        <div className={styles.linkContainer}>
          <img
            src={
              require(`../../../../../public/assets/movies/details/${image}`)
                .default.src
            }
            width={580}
            height={200}
            alt={title}
            loading="eager"
            title={title}
            style={{left: '50%'}}
          />
          <div className={styles.contentBox} style={{flexDirection: 'row'}}>
            <div className={styles.titleBox} style={{alignItems: 'flex-end'}}>
              <h3 className={styles.title} style={{textAlign: 'right'}}>
                {title}
              </h3>
              <div className={styles.date}>{actionTime}</div>
            </div>
            <div className={styles.dotBox}>
              <div className={styles.dot}></div>
            </div>
            <div
              className={styles.description}
              style={{
                justifyContent: 'flex-start',
              }}
            >
              {description}
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (view === 'right') {
    return (
      <Link href={link}>
        <div className={styles.linkContainer}>
          <img
            src={
              require(`../../../../../public/assets/movies/details/${image}`)
                .default.src
            }
            width={580}
            height={200}
            alt={title}
            loading="eager"
            title={title}
            style={{left: 0}}
          />
          <div
            className={styles.contentBox}
            style={{flexDirection: 'row-reverse'}}
          >
            <div className={styles.titleBox} style={{alignItems: 'flex-start'}}>
              <h3 className={styles.title} style={{textAlign: 'left'}}>
                {title}
              </h3>
              <div className={styles.date}>{actionTime}</div>
            </div>
            <div className={styles.dotBox}>
              <div className={styles.dot}></div>
            </div>
            <div
              className={styles.description}
              style={{
                justifyContent: 'flex-end',
              }}
            >
              {description}
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return null;
};

export default MovieMarvel;
