import PrivacyPolicy from '@/components/PrivacyPolicy/PrivacyPolicy';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Polityka prywatnosci',
  description:
    'Baza filmów zawierająca setki dzieł filmowych, ich oceny i opisy. Nasza wyszukiwarka oferuje zastosowanie unikatowych filtrów miejsca i czasu akcji filmu.',
  metadataBase: new URL('https://filmnawieczor.pl/politykaprywatnosci'),
  alternates: {
    canonical: 'https://filmnawieczor.pl/politykaprywatnosci',
    languages: {
      'pl-PL': '/pl-PL',
      'en-US': '/en-US',
    },
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
