'use client';
import LinkButtonYellow from '@/components/Ui/Links/LinkButtonYellow/LinkButtonYellow';
import styles from './singleMovieAbout.module.scss';

export interface SingleMovieAboutHomePropsType {
  image_cover: string;
  description: string;
  title: string;
  url: string;
}

const SingleMovieAbout = ({
  image_cover,
  description,
  title,
  url,
}: SingleMovieAboutHomePropsType) => {
  const link = '/filmy/' + url;
  const newsCoverImage = require(
    `../../../../public/assets/movies/details/${image_cover.slice(0, image_cover.indexOf('.'))}-details.webp`
  ).default;
  return (
    <div className={styles.container}>
      <div className={styles.textBox}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.about}>{description}</span>
        <LinkButtonYellow title="Przejdź do filmu" url={link} />
      </div>
      <img src={newsCoverImage.src} className={styles.image} />
    </div>
  );
};

export default SingleMovieAbout;
