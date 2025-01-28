import MarvelUniverse from '@/components/Universes/marvel/MarvelUniverse';
import { Metadata } from 'next';


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
    openGraph: {
      url: 'https://filmnawieczor.pl/uniwersa/marvel',
      type: 'website',
    },
  };
  
  export default function MarvelUniversePage() {
    return (
     <MarvelUniverse/>
    );
  }