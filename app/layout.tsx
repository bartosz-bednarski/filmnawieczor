import Footer from '@/components/Footer/Footer';
import Navigation from '@/components/Navigation/Navigation';
import {Metadata} from '@/node_modules/next/types';
import '../styles/globals.scss';
import StoreProvider from './StoreProvider';

export const metadata: Metadata = {
  title:{
default:'FILM NA WIECZÓR',
template:'%s - FILM NA WIECZÓR'
  }, 
  description:
    'Baza filmów zawierająca setki dzieł filmowych, ich oceny i opisy. Nasza wyszukiwarka oferuje zastosowanie unikatowych filtrów miejsca i czasu akcji filmu.',
  metadataBase: new URL('https://filmnawieczor.pl'),
  authors: [{name: 'Bartosz Bednarski'}],
  publisher: 'Bartosz Bednarski',
  alternates: {
    canonical: '/',
    languages: {
      'pl-PL': '/pl-PL',
      'en-US': '/en-US',
    },
  },
  robots: {index: true, follow: true},
  openGraph: {
    images: '/og-image.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <Navigation />
          {children}
          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
