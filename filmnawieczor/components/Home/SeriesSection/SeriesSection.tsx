'use client'
import React from 'react';
import H2Banner from '../../Ui/Headers/H2Banner/H2Banner';
import styles from './seriesSection.module.scss';
import SingleSerie from './SingleSerie/SingleSerie';
import {useState, useEffect} from 'react';
import {getLatestSeries} from '../../../api/home';
import {LatestSerie} from '../../../types/api/home';
import backgroundImage from '../../../public/assets/home/bg-white.webp';
import { useRouter } from '@/node_modules/next/navigation';
const SeriesSection: React.FC = () => {
  const router = useRouter()
  const [latestSeries, setLatestSeries] = useState<[] | LatestSerie[]>([]);
  const getLatestSeriesHandler = async () => {
    const latestSeriesFetched = await getLatestSeries();
    if ('status' in latestSeriesFetched) {
      router.push("/error")
    } else {
      setLatestSeries(latestSeriesFetched);
    }
  };
  useEffect(() => {
    getLatestSeriesHandler();
  }, []);
  return (
    <section className={styles['home-container__series-section-container']}>
      <picture
        className={styles['home-container__series-section-container__picture']}
      >
        <img
          src={backgroundImage.src}
          alt="series background"
          width={1920}
          height={1920}
          loading="eager"
        />
      </picture>
      <H2Banner
        header="Nowe seriale"
        secondaryHeader="w bazie danych"
        h2Styles={{color: '#e01821'}}
        h3Styles={{
          backgroundColor: 'black',
          color: '#FFE500',
          border: '1px solid #ffe500',
        }}
      />
      <div
        className={
          styles['home-container__series-section-container__series-box']
        }
      >
        {latestSeries.map((serie: LatestSerie) => (
          <SingleSerie
            title={serie.name}
            image={serie.image_cover}
            description={serie.description}
            key={serie.id}
          />
        ))}
      </div>
      <span
        className={
          styles['home-container__series-section-container__text-box']
        }
      >
        <h4>To nie ten dzień na film? Wolisz obejrzeć coś krótszego?</h4>
        <h3> Wybierz serial!</h3>
        Mamy nadzieję, że nasze filtry dobrze się sprawdzają i będzie to jeden z
        tych przypadków, gdzie siadasz obejrzeć na szybko jeden odcinek, a
        kończysz o 2 rano bo pasowałoby jednak trochę pospać. Zestaw filtrów
        jest taki sam jak w bazie filmów z dodatkiem wyboru ilości sezonów, żeby
        mieć chociaż jakiś minimalny wpływ na zarządzanie swoim czasem.
        <h4>
          Obecnie skupiamy się na aktualizowaniu bazy filmów i na pracach
          technicznych. Jak tylko to ogarniemy zabieramy się za seriale. W
          przyszłości dostępne będą szczegółowe opisy seriali, zwiastuny itp.
          Aktualnie informacje jak i ilość seriali są mocno okrojone. Wpadajcie
          co jakiś czas żeby zobaczyć jak idą postępy.
        </h4>
      </span>
    </section>
  );
};
export default SeriesSection;
