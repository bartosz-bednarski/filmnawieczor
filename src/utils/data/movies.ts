export const MOVIES: movies = [
  {
    id: 0,
    name: "Szeregowiec Ryan",
    description: {
      opis: {
        title: "Opis:",
        value:
          "Normandia rok 1944 lądowania na plaży Omaha. Oddział amerykańskich Rangersów dostaje misję odnalezienia szeregowca ze 101 dywizji powietrzno- desantowej.",
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
    rok_produkcji: 1998,
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
    rok_produkcji: 1998,
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
    rok_produkcji: 2009,
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
    rok_produkcji: 2001,
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
    rok_produkcji: 2014,
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
    rok_produkcji: 2001,
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
    rok_produkcji: 2001,
  },
];
export type movie = {
  id: number;
  name: string;
  description: {
    opis: { title: string; value: string };
    miejsce_akcji: { title: string; value: string };
    czas_akcji: { title: string; value: string };
    gatunek: { title: string; value: string };
    rok_produkcji: { title: string; value: string };
    dlugosc_filmu: { title: string; value: string };
    ocena: number;
  };
  gatunek: string;
  image_cover: string;
  czas_akcji: string[];
  miejsce_akcji: string[];
  rok_produkcji: number;
};
export type movies = movie[];
