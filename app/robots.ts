export const dynamic = 'force-static';
import {MetadataRoute} from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/politykaprywatnosci'],
      },
    ],
    sitemap: 'https://filmnawieczor.pl/sitemap.xml',
  };
}
