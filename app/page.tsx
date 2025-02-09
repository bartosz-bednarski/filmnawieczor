import AnimationLayout from '@/components/Home/AnimationLayout/AnimationLayout';
import MoviesSection from '@/components/Home/MoviesSection/MoviesSection';
import NewsSection from '@/components/Home/NewsSection/NewsSection';
import {Metadata} from '@/node_modules/next/types';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'FILM NA WIECZÓR',
  description:
    'Baza filmów zawierająca setki dzieł filmowych, ich oceny i opisy. Nasza wyszukiwarka oferuje zastosowanie unikatowych filtrów miejsca i czasu akcji filmu.',
  metadataBase: new URL('https://filmnawieczor.pl/'),
  alternates: {
    canonical: 'https://filmnawieczor.pl/',
    languages: {
      'pl-PL': '/pl-PL',
      'en-US': '/en-US',
    },
  },
};

export default function HomePage() {
  return (
    <div className={styles['home-container']}>
      <div className={styles['home-container__slider-container']}>
        <AnimationLayout />
      </div>
      <NewsSection />
      <MoviesSection />
    </div>
  );
}
