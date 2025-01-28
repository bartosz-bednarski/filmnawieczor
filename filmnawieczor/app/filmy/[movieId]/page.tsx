import { getMovieDetails } from '@/api/movies/getMovieDetails';
import {getNewsDetails} from '@/api/news';
import Movie from '@/components/Movies/Movie/Movie';
import Article from '@/components/News/Article/Article';
import {Metadata} from '@/node_modules/next/types';

export const metadata: Metadata = {
  title: 'Artykuł',
  description:
    'W naszej sekcji aktualności znajdziesz artykuły związane z tematyką kinową.',
  metadataBase: new URL('https://filmnawieczor.pl/aktualnosci'),
  alternates: {
    canonical: 'https://filmnawieczor.pl/aktualnosci',
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

export default async function MovieIdPage({
  params,
}: {
  params: {movieId: string};
}) {
  const {movieId} = await params;
  const id = movieId.slice(movieId.indexOf('-') + 1)
  const movieResp = await getMovieDetails(id);
  if(movieResp.status==='OK'){
    return <Movie movieData={movieResp.data}/>
  }
  
}
