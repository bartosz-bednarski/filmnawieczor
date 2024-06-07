export type CategoriesType = {
  id: string;
  catDisplayName: string;
  catName: string;
  queryName: string;
  secondaryCats?: { id: string; catName: string; active: boolean }[];
}[];
export const CATEGORIES: CategoriesType = [
  {
    id: "M0",
    catDisplayName: "Gatunek",
    catName: "gatunek",
    queryName: "mc.movie_category",
    secondaryCats: [
      { id: "S0", catName: "Akcja", active: true },
      { id: "S1", catName: "Dokumentalny", active: true },
      { id: "S2", catName: "Gangsterski", active: true },
      { id: "S3", catName: "Historyczny", active: true },
      { id: "S4", catName: "Komedia", active: true },
      { id: "S5", catName: "Przygodowy", active: true },
      { id: "S6", catName: "Psychologiczny", active: true },
      { id: "S7", catName: "Sci-Fi", active: true },
      { id: "S8", catName: "Sportowy", active: true },
      { id: "S9", catName: "Sztuki walki", active: true },
      { id: "S10", catName: "Western", active: true },
      { id: "S11", catName: "Wojenny", active: true },
    ],
  },
  {
    id: "M1",
    catDisplayName: "Miejsce akcji",
    catName: "miejsce_akcji",
    queryName: "ap.action_place",
    secondaryCats: [
      { id: "S0", catName: "Francja", active: true },
      { id: "S1", catName: "USA", active: true },
      { id: "S2", catName: "Włochy", active: true },
      { id: "S3", catName: "Japonia", active: true },
      { id: "S4", catName: "Niemcy", active: true },
      { id: "S5", catName: "Rosja", active: true },
      { id: "S6", catName: "Polska", active: true },
      { id: "S7", catName: "Anglia", active: true },
      { id: "S8", catName: "Szwecja", active: true },
      { id: "S9", catName: "Belgia", active: true },
      { id: "S10", catName: "Holandia", active: true },
      { id: "S11", catName: "Chiny", active: true },
    ],
  },
  {
    id: "M2",
    catDisplayName: "Czas akcji",
    catName: "czas_akcji",
    queryName: "at.action_time",
    // secondaryCats: [
    //   { id: "S0", catName: "0-500r" },
    //   { id: "S1", catName: "500-1000r" },
    //   { id: "S2", catName: "1000-1200r" },
    //   { id: "S3", catName: "1200-1400r" },
    //   { id: "S4", catName: "1400-1500r" },
    //   { id: "S6", catName: "1500-1700r" },
    //   { id: "S7", catName: "1700-1900r" },
    //   { id: "S8", catName: "1900-1918r" },
    //   { id: "S9", catName: "1918-1939r" },
    //   { id: "S10", catName: "1939-1945r" },
    //   { id: "S11", catName: "1945-2000r" },
    // ],
  },
  {
    id: "M3",
    catDisplayName: "Rok produkcji",
    catName: "rok_produkcji",
    queryName: "py.production_year",
    // secondaryCats: [
    //   { id: "S0", catName: "1950-1955" },
    //   { id: "S1", catName: "1955-1960" },
    //   { id: "S2", catName: "1960-1965" },
    //   { id: "S4", catName: "1965-1970" },
    //   { id: "S5", catName: "1970-1975" },
    //   { id: "S6", catName: "1975-1980" },
    //   { id: "S7", catName: "1980-1985" },
    //   { id: "S8", catName: "1985-1990" },
    //   { id: "S9", catName: "1990-1995" },
    //   { id: "S10", catName: "1995-2000" },
    //   { id: "S11", catName: "2000-2005" },
    // ],
  },
];
