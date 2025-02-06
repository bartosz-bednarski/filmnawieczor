import {getMovieDetails} from '@/api/movies/getMovieDetails';
import Movie from '@/components/Movies/Movie/Movie';
import {Metadata} from '@/node_modules/next/types';

// export const metadata: Metadata = {
//   title: 'Artykuł',
//   description:
//     'W naszej sekcji aktualności znajdziesz artykuły związane z tematyką kinową.',
//   metadataBase: new URL('https://filmnawieczor.pl/aktualnosci'),
//   alternates: {
//     canonical: 'https://filmnawieczor.pl/aktualnosci',
//     languages: {
//       'pl-PL': '/pl-PL',
//       'en-US': '/en-US',
//     },
//   },
//   openGraph: {
//     url: 'https://filmnawieczor.pl',
//     type: 'website',
//   },
// };
export async function generateStaticParams() {
  const movies: {url: string}[] = await fetch(
    'https://filmnawieczor.online/api/movies/allUrls'
  ).then((res) => res.json());

  return movies.map((item) => ({movieId: item.url}));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{movieId: string}>;
}) {
  const {movieId} = await params;
  const id = movieId.slice(movieId.indexOf('-') + 1);
  const movieResp = await getMovieDetails(id);
  if (movieResp.status === 'OK') {
    return {
      title: movieResp.data.name,
      description: movieResp.data.description.slice(
        0,
        movieResp.data.description.indexOf('.') + 1
      ),
      metadataBase: new URL(`https://filmnawieczor.pl/filmy/${movieId}`),
      alternates: {
        canonical: `https://filmnawieczor.pl/filmy/${movieId}`,
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
  }
  return {
    title: 'Szczegóły filmu',
    description:
      'Baza filmów zawierająca setki dzieł filmowych, ich oceny i opisy. Nasza wyszukiwarka oferuje zastosowanie unikatowych filtrów miejsca i czasu akcji filmu.',
    metadataBase: new URL(`https://filmnawieczor.pl/filmy/${movieId}`),
    alternates: {
      canonical: `https://filmnawieczor.pl/filmy/${movieId}`,
      languages: {
        'pl-PL': '/pl-PL',
        'en-US': '/en-US',
      },
    },
  };
}

export default async function MovieIdPage({
  params,
}: {
  params: Promise<{movieId: string}>;
}) {
  const {movieId} = await params;
  const id = movieId.slice(movieId.indexOf('-') + 1);
  const movieResp = await getMovieDetails(id);
  if (movieResp.status === 'OK') {
    return <Movie {...movieResp.data} />;
  }
  return null;
}
