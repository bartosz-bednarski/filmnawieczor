type MoviesCategories =
  | "Wojenny"
  | "Dokumentalny"
  | "Gangsterski"
  | "Historyczny"
  | "Komedia"
  | "Przygodowy"
  | "Psychologiczny"
  | "Sci-Fi"
  | "Sportowy"
  | "Sztuki walki"
  | "Western"
  | "Wojenny";
export interface MovieDescription {
  opis: { title: string; value: string };
  miejsce_akcji: { title: string; value: string };
  czas_akcji: { title: string; value: string };
  gatunek: { title: string; value: MoviesCategories };
  rok_produkcji: { title: string; value: string };
  dlugosc_filmu: { title: string; value: string };
  ocena: number;
}
export interface MovieType {
  id: number;
  name: string;
  description: MovieDescription;
  gatunek: MoviesCategories;
  image_cover: string;
  czas_akcji: string[];
  miejsce_akcji: string[];
  rok_produkcji: string[];
}
export type Movies = MovieType[];
export const MOVIES: Movies = [
  {
    id: 0,
    name: "Szeregowiec Ryan",
    description: {
      opis: {
        title: "Opis:",
        value:
          "Normandia rok 1944 - lądowanie na plaży Omaha. Oddział amerykańskich Rangersów dostaje misję odnalezienia szeregowca ze 101 dywizji powietrzno-desantowej.",
      },
      miejsce_akcji: { title: "Miejsce akcji:", value: "Normandia, Francja" },
      czas_akcji: { title: "Czas akcji:", value: "II wojna światowa 1944" },
      gatunek: { title: "Gatunek:", value: "Wojenny" },
      rok_produkcji: { title: "Rok produkcji:", value: "1998" },
      dlugosc_filmu: { title: "Długość filmu:", value: "2h 49m" },
      ocena: 9.0,
    },

    gatunek: "Wojenny",
    image_cover: "szeregowiec-ryan.webp",
    miejsce_akcji: ["Francja"],
    czas_akcji: ["1944"],
    rok_produkcji: ["1998"],
  },
  {
    id: 1,
    name: "Wielka Ucieczka",
    description: {
      opis: {
        title: "Opis:",
        value:
          "Obóz Stalag Luft III - Zachodnia Polska. Grupa alianckich więźniów organizuje ucieczkę z Niemieckiego obozu dla jeńców wojennych ",
      },
      miejsce_akcji: { title: "Miejsce akcji:", value: "Polska" },
      czas_akcji: { title: "Czas akcji:", value: "1944" },
      gatunek: { title: "Gatunek:", value: "Wojenny" },
      rok_produkcji: { title: "Rok produkcji:", value: "1963" },
      dlugosc_filmu: { title: "Długość filmu:", value: "2h 52m" },
      ocena: 9.5,
    },
    gatunek: "Wojenny",
    image_cover: "wielka-ucieczka.webp",
    miejsce_akcji: ["Polska"],
    czas_akcji: ["1944"],
    rok_produkcji: ["1998"],
  },
  {
    id: 2,
    name: "Bękarty Wojny",
    description: {
      opis: {
        title: "Opis:",
        value:
          "Francja II wojna światowa. Oddział Amerykańskich żołnierzy żydowskiego pochodzenia planuje zamach na Hitlera.",
      },
      miejsce_akcji: { title: "Miejsce akcji:", value: "Francja" },
      czas_akcji: { title: "Czas akcji:", value: "1943" },
      gatunek: { title: "Gatunek:", value: "Wojenny" },
      rok_produkcji: { title: "Rok produkcji:", value: "2009" },
      dlugosc_filmu: { title: "Długość filmu:", value: "2h 33m" },
      ocena: 9.3,
    },
    gatunek: "Wojenny",
    image_cover: "bekarty-wojny.webp",
    miejsce_akcji: ["Francja"],
    czas_akcji: ["1943"],
    rok_produkcji: ["2009"],
  },
  {
    id: 3,
    name: "Helikopter w Ogniu",
    description: {
      opis: {
        title: "Opis:",
        value:
          "Somalia rok 1993. Oddziały amerykańskich Rangersów i Delta Force otrzymują zadanie pojmania Somalijskiego dyktatora.",
      },
      miejsce_akcji: { title: "Miejsce akcji:", value: "Somalia" },
      czas_akcji: { title: "Czas akcji:", value: "1993" },
      gatunek: { title: "Gatunek:", value: "Wojenny" },
      rok_produkcji: { title: "Rok produkcji:", value: "2001" },
      dlugosc_filmu: { title: "Długość filmu:", value: "2h 24m" },
      ocena: 8.7,
    },
    gatunek: "Wojenny",
    image_cover: "helikopter-w-ogniu.webp",
    miejsce_akcji: ["Somalia"],
    czas_akcji: ["1993"],
    rok_produkcji: ["2001"],
  },
  {
    id: 4,
    name: "Snajper",
    description: {
      opis: {
        title: "Opis:",
        value:
          "Historia Chrisa Kyle'a - jednego z najlepszych snajperów w historii, który służył w Navy Seals.",
      },
      miejsce_akcji: { title: "Miejsce akcji:", value: "Irak, USA" },
      czas_akcji: {
        title: "Czas akcji:",
        value: "2003-2013",
      },
      gatunek: { title: "Gatunek:", value: "Wojenny" },
      rok_produkcji: { title: "Rok produkcji:", value: "2014" },
      dlugosc_filmu: { title: "Długość filmu:", value: "2h 14m" },
      ocena: 8.7,
    },
    gatunek: "Wojenny",
    image_cover: "snajper.webp",
    miejsce_akcji: ["Irak", "USA"],
    czas_akcji: [
      "2003",
      "2004",
      "2005",
      "2006",
      "2007",
      "2008",
      "2009",
      "2010",
      "2011",
      "2012",
      "2013",
    ],
    rok_produkcji: ["2014"],
  },
  {
    id: 5,
    name: "Pearl Harbor",
    description: {
      opis: {
        title: "Opis:",
        value:
          "Historia ataku Cesarstwa Japonii na USA w zatoce Pereł. Główny wątek akcji opiera się na relacji dwóch przyjaciół, którzy służą jako piloci w armii amerykańskiej.",
      },
      miejsce_akcji: {
        title: "Miejsce akcji:",
        value: "USA, Wielka Brytania, Japonia, Chiny",
      },
      czas_akcji: {
        title: "Czas akcji:",
        value: "1941",
      },
      gatunek: { title: "Gatunek:", value: "Wojenny" },
      rok_produkcji: { title: "Rok produkcji:", value: "2001" },
      dlugosc_filmu: { title: "Długość filmu:", value: "3h 03m" },
      ocena: 8.0,
    },
    gatunek: "Wojenny",
    image_cover: "pearl-harbor.webp",
    miejsce_akcji: ["USA", "Wielka Brytania", "Japonia", "Chiny"],
    czas_akcji: ["1941"],
    rok_produkcji: ["2001"],
  },
  {
    id: 6,
    name: "Jeniec: Tak daleko jak nogi poniosą",
    description: {
      opis: {
        title: "Opis:",
        value:
          "Historia ucieczki niemieckiego żołnierza, który trafił do sowieckiego obozu na Syberii.",
      },
      miejsce_akcji: {
        title: "Miejsce akcji:",
        value: "Rosja, Polska, Niemcy",
      },
      czas_akcji: {
        title: "Czas akcji:",
        value: "1945-1952",
      },
      gatunek: { title: "Gatunek:", value: "Wojenny" },
      rok_produkcji: { title: "Rok produkcji:", value: "2001" },
      dlugosc_filmu: { title: "Długość filmu:", value: "2h 38m" },
      ocena: 8.0,
    },
    gatunek: "Wojenny",
    image_cover: "jeniec.webp",
    miejsce_akcji: ["Rosja", "Polska", "Niemcy"],
    czas_akcji: [
      "1945",
      "1946",
      "1947",
      "1948",
      "1949",
      "1950",
      "1951",
      "1952",
    ],
    rok_produkcji: ["2001"],
  },
  {
    id: 7,
    name: "Patton",
    description: {
      opis: {
        title: "Opis:",
        value:
          "Historia generała Georga Pattona - jednego z najlepszych generałów armii USA. Akcja rozgrywa się na frontach II wojny światowej (Afryka, Francja, Włochy, Wielka Brytania).",
      },
      miejsce_akcji: {
        title: "Miejsce akcji:",
        value: "Afryka, Francja, Włochy, Anglia, Niemcy",
      },
      czas_akcji: {
        title: "Czas akcji:",
        value: "1942-1945",
      },
      gatunek: { title: "Gatunek:", value: "Wojenny" },
      rok_produkcji: { title: "Rok produkcji:", value: "1970" },
      dlugosc_filmu: { title: "Długość filmu:", value: "2h 52m" },
      ocena: 9.0,
    },
    gatunek: "Wojenny",
    image_cover: "patton.webp",
    miejsce_akcji: ["Afryka", "Francja", "Włochy", "Anglia", "Niemcy"],
    czas_akcji: ["1942", "1943", "1944", "1945"],
    rok_produkcji: ["1970"],
  },
  {
    id: 8,
    name: "Bitwa o Anglię",
    description: {
      opis: {
        title: "Opis:",
        value:
          "Anglia rok 1940. Brytyjski RAF z pomocą pilotów z krajów alianckich walczą z niemieckim Luftwaffe o dominację powietrzną nad Anglią. ",
      },
      miejsce_akcji: {
        title: "Miejsce akcji:",
        value: "Anglia, Francja, Niemcy",
      },
      czas_akcji: {
        title: "Czas akcji:",
        value: "1940",
      },
      gatunek: { title: "Gatunek:", value: "Wojenny" },
      rok_produkcji: { title: "Rok produkcji:", value: "1969" },
      dlugosc_filmu: { title: "Długość filmu:", value: "2h 13m" },
      ocena: 9.1,
    },
    gatunek: "Wojenny",
    image_cover: "bitwa-o-anglie.webp",
    miejsce_akcji: ["Anglia", "Francja", "Niemcy"],
    czas_akcji: ["1940"],
    rok_produkcji: ["1969"],
  },
  {
    id: 9,
    name: "Byliśmy żołnierzami",
    description: {
      opis: {
        title: "Opis:",
        value:
          'Wietnam rok 1965. Historia 7 Pułku Kawalerii Powietrznej USA, który wziął udział w pierwszej dużej bitwie stoczonej w wojnie wietnamsko-amerykańskiej. Film powstał na podstawie książki "We Were Soldiers Once… And Young" autorstwa Hala Moorea i Josepha Lee Gallowaya.          ',
      },
      miejsce_akcji: {
        title: "Miejsce akcji:",
        value: "USA, Wietnam",
      },
      czas_akcji: {
        title: "Czas akcji:",
        value: "1965",
      },
      gatunek: { title: "Gatunek:", value: "Wojenny" },
      rok_produkcji: { title: "Rok produkcji:", value: "2002" },
      dlugosc_filmu: { title: "Długość filmu:", value: "2h 15m" },
      ocena: 7.8,
    },
    gatunek: "Wojenny",
    image_cover: "bylismy-zolnierzami.webp",
    miejsce_akcji: ["USA", "Wietnam"],
    czas_akcji: ["1965"],
    rok_produkcji: ["2002"],
  },
  {
    id: 10,
    name: "Przełecz ocalonych",
    description: {
      opis: {
        title: "Opis:",
        value:
          "Historia Desmonda Dossa - amerykańskiego medyka, który brał udział w bitwie o japońską wyspę Okinawa w roku 1945. Była to ostatnia duża bitwa pomiędzy USA a Japonią na Pacyfiku.",
      },
      miejsce_akcji: {
        title: "Miejsce akcji:",
        value: "USA, Japonia",
      },
      czas_akcji: {
        title: "Czas akcji:",
        value: "1965",
      },
      gatunek: { title: "Gatunek:", value: "Wojenny" },
      rok_produkcji: { title: "Rok produkcji:", value: "2002" },
      dlugosc_filmu: { title: "Długość filmu:", value: "2h 15m" },
      ocena: 8.2,
    },
    gatunek: "Wojenny",
    image_cover: "przelecz-ocalonych.webp",
    miejsce_akcji: ["USA", "Japonia"],
    czas_akcji: ["1945"],
    rok_produkcji: ["2016"],
  },
  {
    id: 11,
    name: "Eskadra czerwone ogony",
    description: {
      opis: {
        title: "Opis:",
        value:
          "Włochy, rok 1944 - historia 332 Grupy Myśliwskiej Sił Powietrznych USA. Była to jedna z pierwszych grup myśliwskich sformowana z afroamerykańskich obywateli USA w czasie II wojny światowej. ",
      },
      miejsce_akcji: {
        title: "Miejsce akcji:",
        value: "Włochy",
      },
      czas_akcji: {
        title: "Czas akcji:",
        value: "1944",
      },
      gatunek: { title: "Gatunek:", value: "Wojenny" },
      rok_produkcji: { title: "Rok produkcji:", value: "2012" },
      dlugosc_filmu: { title: "Długość filmu:", value: "2h 05m" },
      ocena: 7.5,
    },
    gatunek: "Wojenny",
    image_cover: "eskadra-czerwone-ogony.webp",
    miejsce_akcji: ["Włochy"],
    czas_akcji: ["1944"],
    rok_produkcji: ["2012"],
  },
  {
    id: 12,
    name: "Złoto dla zuchwałych",
    description: {
      opis: {
        title: "Opis:",
        value:
          "Francja rok 1944 - grupa amerykańskich żołnierzy pod dowództwem szeregowca Kelly'ego przebija się przez linię wroga w celu zdobycia wywożonego przez Niemców złota.",
      },
      miejsce_akcji: {
        title: "Miejsce akcji:",
        value: "Francja",
      },
      czas_akcji: {
        title: "Czas akcji:",
        value: "1944",
      },
      gatunek: { title: "Gatunek:", value: "Wojenny" },
      rok_produkcji: { title: "Rok produkcji:", value: "1970" },
      dlugosc_filmu: { title: "Długość filmu:", value: "2h 23m" },
      ocena: 8.3,
    },
    gatunek: "Wojenny",
    image_cover: "zloto-dla-zuchwalych.webp",
    miejsce_akcji: ["Francja"],
    czas_akcji: ["1944"],
    rok_produkcji: ["1970"],
  },
  {
    id: 13,
    name: "Lista Schindlera",
    description: {
      opis: {
        title: "Opis:",
        value:
          "Polska, II wojna światowa - historia niemieckiego przedsiębiorcy Oskara Schindlera, który podczas II wojny światowej uratował tysiące żydów przed pobytem w obozach koncentracyjnych",
      },
      miejsce_akcji: {
        title: "Miejsce akcji:",
        value: "Polska",
      },
      czas_akcji: {
        title: "Czas akcji:",
        value: "1939-1945",
      },
      gatunek: { title: "Gatunek:", value: "Wojenny" },
      rok_produkcji: { title: "Rok produkcji:", value: "1993" },
      dlugosc_filmu: { title: "Długość filmu:", value: "3h 15m" },
      ocena: 9.5,
    },
    gatunek: "Wojenny",
    image_cover: "lista-schindlera.webp",
    miejsce_akcji: ["Polska"],
    czas_akcji: ["1939", "1940", "1941", "1942", "1943", "1944", "1945"],
    rok_produkcji: ["1993"],
  },
  {
    id: 14,
    name: "Wróg u bram",
    description: {
      opis: {
        title: "Opis:",
        value:
          "Rosja, II wojna światowa - historia sowieckiego snajpera Wasilija Zajcewa, który bierze udział w bitwie o Stalingrad.",
      },
      miejsce_akcji: {
        title: "Miejsce akcji:",
        value: "Rosja",
      },
      czas_akcji: {
        title: "Czas akcji:",
        value: "1942-1943",
      },
      gatunek: { title: "Gatunek:", value: "Wojenny" },
      rok_produkcji: { title: "Rok produkcji:", value: "2001" },
      dlugosc_filmu: { title: "Długość filmu:", value: "2h 11m" },
      ocena: 8.5,
    },
    gatunek: "Wojenny",
    image_cover: "wrog-u-bram.webp",
    miejsce_akcji: ["Rosja"],
    czas_akcji: ["1942", "1943"],
    rok_produkcji: ["2001"],
  },
];

// export type movie = {
//   id: number;
//   name: string;
//   description: {
//     opis: { title: string; value: string };
//     miejsce_akcji: { title: string; value: string };
//     czas_akcji: { title: string; value: string };
//     gatunek: { title: string; value: MoviesCategories };
//     rok_produkcji: { title: string; value: string };
//     dlugosc_filmu: { title: string; value: string };
//     ocena: number;
//   };
//   gatunek: MoviesCategories;
//   image_cover: string;
//   czas_akcji: string[];
//   miejsce_akcji: string[];
//   rok_produkcji: string[];
// };
