import { getLast10News } from '@/api/news';
import News from '@/components/News/News';
import { Metadata } from '@/node_modules/next/types';

export const metadata: Metadata= {
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
  
  export default async function Home() {
    const news = await getLast10News();
    return (
      <News last10News={news}/>
    );
  }