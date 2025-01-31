import { getLast10News } from '@/api/news/getLast10News';
import News from '@/components/News/News';
import {Metadata} from '@/node_modules/next/types';

export const metadata: Metadata = {
  title: 'Aktualności',
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

export default async function NewsPage() {
  const news = await getLast10News();
  if(news.status==='OK'){
    console.log(news.data)
    return <News last10News={news.data} />;
  }
 return null
}
