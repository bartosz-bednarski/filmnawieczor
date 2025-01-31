import {getLast10Movies} from '@/api/movies/getLast10Movies';
import Movies from '@/components/Movies/Movies';
import {Metadata} from '@/node_modules/next/types';

export const metadata: Metadata = {
  title: 'Baza filmów',
  description:
    'Znajdź swój film na wieczór korzystając z naszej bazy danych i nietypowych filtrów czasu lub miejsca akcji.',
  metadataBase: new URL('https://filmnawieczor.pl/filmy'),
  alternates: {
    canonical: 'https://filmnawieczor.pl/filmy',
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

export default async function MoviesPage() {
  const movies = await getLast10Movies('py.production_year', 'DESC');
console.log(movies.status)
  if (movies.status === 'error')return null;
  return <Movies moviesData={movies.data} />;
  
}
