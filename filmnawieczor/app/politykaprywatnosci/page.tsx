import PrivacyPolicy from '@/components/PrivacyPolicy/PrivacyPolicy';
import { Metadata } from 'next';

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

export default  function PrivacyPolicyPage() {
return <PrivacyPolicy/>
}