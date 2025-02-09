import Universes from '@/components/Universes/Universes';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Uniwersa filmowe',
  description:
    'Sprawdź zestawienia filmów z najpopularniejszych uniwersów, odkryj ukryte powiązania między historiami i dowiedz się, jak różne filmy tworzą wspólne, epickie narracje.',
  metadataBase: new URL('https://filmnawieczor.pl/uniwersa'),
  alternates: {
    canonical: 'https://filmnawieczor.pl/uniwersa',
    languages: {
      'pl-PL': '/pl-PL',
      'en-US': '/en-US',
    },
  },
};

export default function UniversesPage() {
  return <Universes />;
}
