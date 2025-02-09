import {getLast10Movies} from '@/api/movies/getLast10Movies';
import Movies from '@/components/Movies/Movies';
import {Metadata} from '@/node_modules/next/types';

export const metadata: Metadata = {
  title: 'Baza filmów',
  description:
    'Baza filmów zawierająca setki dzieł filmowych, ich oceny i opisy. Nasza wyszukiwarka oferuje zastosowanie unikatowych filtrów miejsca i czasu akcji filmu.',
  metadataBase: new URL('https://filmnawieczor.pl/filmy'),
  alternates: {
    canonical: 'https://filmnawieczor.pl/filmy',
    languages: {
      'pl-PL': '/pl-PL',
      'en-US': '/en-US',
    },
  },
};

export default async function MoviesPage() {
  const movies = await getLast10Movies('py.production_year', 'DESC');
  if (movies.status === 'OK') {
    return <Movies moviesData={movies.data} />;
  }
  return null;
}
