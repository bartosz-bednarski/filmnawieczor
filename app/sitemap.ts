import {getAllUrlsMovies} from '@/api/movies/getAllUrlsMovies';
import {MetadataRoute} from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const moviesRespData = await getAllUrlsMovies();
  let moviesLinks = [];
  if (moviesRespData.status === 'OK') {
    moviesLinks = moviesRespData.data.map((item) => ({
      url: `https://filmnawieczor.pl/filmy/${item.url}`,
    }));
    return [
      {
        url: 'https://filmnawieczor.pl/',
      },
      {
        url: 'https://filmnawieczor.pl/aktualnosci',
      },
      {
        url: 'https://filmnawieczor.pl/aktualnosci/artykul/5-starych-filmow-wojennych-1',
      },
      {
        url: 'https://filmnawieczor.pl/filmy',
      },
      ...moviesLinks,
      {
        url: 'https://filmnawieczor.pl/uniwersa',
      },
      {
        url: 'https://filmnawieczor.pl/uniwersa/marvel',
      },
      {
        url: 'https://filmnawieczor.pl/politykaprywatnosci',
      },
    ];
  }
  return [
    {
      url: 'https://filmnawieczor.pl/',
    },
    {
      url: 'https://filmnawieczor.pl/aktualnosci',
    },
    {
      url: 'https://filmnawieczor.pl/aktualnosci/artykul/5-starych-filmow-wojennych-1',
    },
    {
      url: 'https://filmnawieczor.pl/filmy',
    },
    {
      url: 'https://filmnawieczor.pl/uniwersa',
    },
    {
      url: 'https://filmnawieczor.pl/uniwersa/marvel',
    },
    {
      url: 'https://filmnawieczor.pl/politykaprywatnosci',
    },
  ];
}
