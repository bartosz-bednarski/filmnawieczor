import MarvelUniverse from '@/components/Universes/MarvelUniverse';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Uniwersum Marvela | Filmy w kolejności chronologicznej',
  description:
    'Sprawdź co kryje uniwersum Marvela. Poznaj kolejność chronologiczną z jaką powinieneś oglądać filmy. Dowiedz się więcej o superbohaterach uniwersum Marvela.',
  metadataBase: new URL('https://filmnawieczor.pl/uniwersa/marvel'),
  alternates: {
    canonical: 'https://filmnawieczor.pl/uniwersa/marvel',
    languages: {
      'pl-PL': '/pl-PL',
      'en-US': '/en-US',
    },
  },
};

export default function MarvelUniversePage() {
  return <MarvelUniverse />;
}
