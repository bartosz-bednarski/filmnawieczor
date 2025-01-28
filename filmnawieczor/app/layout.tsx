import {Provider} from '@/../node_modules/react-redux/dist/react-redux';
import Footer from '@/components/Footer/Footer';
import Navigation from '@/components/Navigation/Navigation';
import {Metadata} from '@/node_modules/next/types';
import './layout.scss';
import StoreProvider from './StoreProvider';
export const metadata: Metadata = {
  title: 'Film na wieczór',
  description:
    'Film na wieczór to serwis, który posiada własną bazę danych filmów i seriali umożliwiającą korzystanie z nietypowych filtrów miejsca i czasu akcji.',
  metadataBase: new URL('https://nemosportowaprzygoda.pl/'),
  alternates: {
    canonical: 'https://nemosportowaprzygoda.pl/',
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
