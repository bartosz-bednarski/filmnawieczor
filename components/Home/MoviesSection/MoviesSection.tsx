'use client';
import React from 'react';
import H2Banner from '../../Ui/Headers/H2Banner/H2Banner';
import styles from './moviesSection.module.scss';
import {useState, useEffect} from 'react';
import backgroundImage from '../../../public/assets/home/bg-red.webp';
import {useRouter} from '@/node_modules/next/navigation';
import {getLatestMovies} from '@/api/movies/getLatestMovies';
import MovieLink, {MovieLinkHomePropsType} from './MovieLink/MovieLink';
import SingleMovieAbout from './SingleMovieAbout/SingleMovieAbout';

const MoviesSection = () => {
  const router = useRouter();
  const [latestMovies, setLatestMovies] = useState<
    [] | MovieLinkHomePropsType[]
  >([]);

  const getLatestMoviesHandler = async () => {
    const latestMoviesResponse = await getLatestMovies();
    if (latestMoviesResponse.status === 'OK') {
      setLatestMovies(latestMoviesResponse.data);
    } else {
      router.push('/error');
    }
  };

  useEffect(() => {
    getLatestMoviesHandler();
  }, []);

  return (
    <section className={styles.container}>
      <H2Banner header="NOWE FILMY" />
      {latestMovies.length > 0 && (
        <SingleMovieAbout
          description={latestMovies[0].description}
          title={latestMovies[0].name}
          image_cover={latestMovies[0].image_cover}
          url={latestMovies[0].url}
        />
      )}
      <div className={styles.moviesBox}>
        {latestMovies.map((movie: MovieLinkHomePropsType) => (
          <MovieLink
            name={movie.name}
            image_cover={movie.image_cover}
            description={movie.description}
            key={movie.id}
            id={movie.id}
            url={movie.url}
          />
        ))}
      </div>
      {/* <span className={styles.textBox}>
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
      </span> */}
    </section>
  );
};

export default MoviesSection;
