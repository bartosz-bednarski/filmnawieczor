import { getLast10News, getNewsDetails } from '@/api/news';
import News from '@/components/News/News';
import Article from '@/components/News/Article/Article';
import { useRouter } from '@/node_modules/next/router';
import { Metadata } from '@/node_modules/next/types';

export const metadata: Metadata= {
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
  
  export default async function ArticleIdPage({ params }: { params: { articleId: string } }) {
    const {articleId} = await params
    const articleResp = await getNewsDetails(articleId);
    return (
        <>
      <Article article={articleResp}/></>
    );
  }