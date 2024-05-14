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
    },
    gatunek: "Wojenny",
    miejsce_akcji: "Francja",
    rok_produkcji: 1998,
  },
  {
    id: 1,
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
    },
    gatunek: "Akcja",
    miejsce_akcji: "Francja",
    rok_produkcji: 1998,
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
  };
  gatunek: string;
  miejsce_akcji: string;
  rok_produkcji: number;
};
export type movies = movie[];
