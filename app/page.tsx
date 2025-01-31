import AnimationLayout from '@/components/Home/AnimationLayout/AnimationLayout';
import MoviesSection from '@/components/Home/MoviesSection/MoviesSection';
import NewsSection from '@/components/Home/NewsSection/NewsSection';
import {Metadata} from '@/node_modules/next/types';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Film na wieczór',
  description:
    'Film na wieczór to serwis, który posiada własną bazę danych filmów i seriali umożliwiającą korzystanie z nietypowych filtrów miejsca i czasu akcji.',
  metadataBase: new URL('https://filmnawieczor.pl/'),
  alternates: {
    canonical: 'https://filmnawieczor.pl/',
    languages: {
      'pl-PL': '/pl-PL',
      'en-US': '/en-US',
    },
  },
  openGraph: {
    url: 'https://filmnawieczor.pl',
    type: 'website',
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
