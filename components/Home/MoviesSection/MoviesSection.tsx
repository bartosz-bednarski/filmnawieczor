'use client';
import React from 'react';
import H2Banner from '../../Ui/Headers/H2Banner/H2Banner';
import styles from './moviesSection.module.scss';
import SingleMovie, { SingleMovieHomePropsType } from './SingleMovie/SingleMovie';
import {useState, useEffect} from 'react';
import {LatestMovie} from '../../../types/api/home';
import backgroundImage from '../../../public/assets/home/bg-red.webp';
import {useRouter} from '@/node_modules/next/navigation';
import { getLatestMovies } from '@/api/movies/getLatestMovies';
const MoviesSection: React.FC = () => {
  const router = useRouter();
  const [latestMovies, setLatestMovies] = useState<[] | SingleMovieHomePropsType[]>([]);
  const getLatestMoviesHandler = async () => {
    const latestMoviesResponse = await getLatestMovies();
    if(latestMoviesResponse.status==='OK'){
      setLatestMovies(latestMoviesResponse.data)
    }
    else {
      router.push('/error');
    }
  };
  useEffect(() => {
    getLatestMoviesHandler();
  }, []);
  return (
    <section className={styles['home-container__movies-section-container']}>
      <picture
        className={styles['home-container__movies-section-container__picture']}
      >
        <img
          src={backgroundImage.src}
          alt="movies background"
          width={1920}
          height={1920}
          loading="eager"
        />
      </picture>
      <H2Banner
        header="Nowe filmy"
        secondaryHeader="w bazie danych"
        h2Styles={{
          zIndex: '1',
          margin: '0.5rem 0',
          color: 'white',
        }}
        h3Styles={{
          background: 'white',
          border: '1px solid black',
          color: '#EC1D23',
        }}
      />
      <div
        className={
          styles['home-container__movies-section-container__movies-box']
        }
      >
        {latestMovies.map((movie: SingleMovieHomePropsType) => (
          <SingleMovie
          name={movie.name}
            image_cover={movie.image_cover}
            description={movie.description}
            key={movie.id}
            id={movie.id}
          />
        ))}
      </div>
      <span
        className={styles['home-container__movies-section-container__text-box']}
      >
        <h3>Dlaczego warto zajrzeć do naszej bazy filmów?</h3> Zacznijmy od
        filtrowania. Gatunek czy rok produkcji to klasyczne filtry używane na
        wielu serwisach internetowych powiązanych z branżą filmową. My mamy do
        zaoferowania coś nowego. Filtry miejsca akcji pozwolą Ci znaleźć filmy,
        które będą toczyć się w wybranych przez Ciebie krajach lub krainach. W
        połączeniu z wybranym czasem akcji i gatunkiem masz możliwość szybkiego
        znalezienia filmu, którego właśnie szukasz.
        <h4>
          Nasze nietypowe rozwiązania zmusiły nas do zbudowania własnej bazy
          danych, dlatego dziękujemy za cierpliwość i ciągle pracujemy dodając
          nowe filmy i seriale do naszego zbioru dzieł filmowych.
        </h4>
      </span>
    </section>
  );
};
export default MoviesSection;
