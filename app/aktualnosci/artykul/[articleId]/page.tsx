import { getNewsDetails } from '@/api/news/getNewsDetails';
import Article from '@/components/News/Article/Article';
import { Metadata } from 'next'; // 🚀 poprawka: usunięcie błędnej ścieżki

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
export const dynamic = 'force-static'
export async function generateStaticParams() {
  const news: {id:number,url:string}[] = await fetch('https://filmnawieczor.online/api/news/allIds')
    .then((res) => res.json());
  return news.map((item) => ({
    articleId: item.url,
  }));
}

export default async function ArticleIdPage({
  params,
}: {
  params: Promise<{ articleId: string }>;
}) {
  const { articleId } = await params;

  const articleResp = await getNewsDetails(articleId);
  console.log(articleResp)
  if (articleResp.status === 'OK') {
    return <Article {...articleResp.data} />;
  }
  return null;
}
