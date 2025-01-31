export type CategoryType = {
  id: string;
  catDisplayName: string;
  catName: string;
  queryName: string;
  secondaryCats?: SecondaryCategoryType[];
};
export type SecondaryCategoryType = {
  id: string;
  catName: string;
  active: boolean;
};
export type MoviesCategoriesType = CategoryType[];
export const MOVIES_CATEGORIES: MoviesCategoriesType = [
  {
    id: 'M0',
    catDisplayName: 'Gatunek',
    catName: 'gatunek',
    queryName: 'mc.movie_category',
    secondaryCats: [
      {id: 'S0', catName: 'Akcja', active: true},
      {id: 'S1', catName: 'Biograficzny', active: true},
      {id: 'S2', catName: 'Dramat', active: true},
      {id: 'S3', catName: 'Komedia', active: true},
      {id: 'S4', catName: 'Przygodowy', active: true},
      {id: 'S5', catName: 'Sci-Fi', active: true},
      {id: 'S6', catName: 'Wojenny', active: true},
    ],
  },
  {
    id: 'M1',
    catDisplayName: 'Miejsce akcji',
    catName: 'miejsce_akcji',
    queryName: 'ap.action_place',
    secondaryCats: [
      {id: 'S0', catName: 'Afganistan', active: true},
      {id: 'S1', catName: 'Anglia', active: true},
      {id: 'S2', catName: 'Arabia Saudyjska', active: true},
      {id: 'S3', catName: 'Atlantyk', active: true},
      {id: 'S4', catName: 'Austria', active: true},
      {id: 'S5', catName: 'Belgia', active: true},
      {id: 'S6', catName: 'Birma', active: true},
      {id: 'S7', catName: 'Brazylia', active: true},
      {id: 'S8', catName: 'Chiny', active: true},
      {id: 'S9', catName: 'Egipt', active: true},
      {id: 'S10', catName: 'Francja', active: true},
      {id: 'S11', catName: 'Grecja', active: true},
      {id: 'S12', catName: 'Holandia', active: true},
      {id: 'S13', catName: 'Irak', active: true},
      {id: 'S14', catName: 'Japonia', active: true},
      {id: 'S15', catName: 'Jugosławia', active: true},
      {id: 'S16', catName: 'Kambodża', active: true},
      {id: 'S17', catName: 'Kanada', active: true},
      {id: 'S18', catName: 'Kolumbia', active: true},
      {id: 'S19', catName: 'Korea Południowa', active: true},
      {id: 'S20', catName: 'Kosmos', active: true},
      {id: 'S21', catName: 'Monako', active: true},
      {id: 'S22', catName: 'Nepal', active: true},
      {id: 'S23', catName: 'Niemcy', active: true},
      {id: 'S24', catName: 'Norwegia', active: true},
      {id: 'S25', catName: 'Pacyfik', active: true},
      {id: 'S26', catName: 'Polska', active: true},
      {id: 'S27', catName: 'Rosja', active: true},
      {id: 'S28', catName: 'Szkocja', active: true},
      {id: 'S29', catName: 'Tajlandia', active: true},
      {id: 'S30', catName: 'Ukraina', active: true},
      {id: 'S31', catName: 'USA', active: true},
      {id: 'S32', catName: 'Węgry', active: true},
      {id: 'S33', catName: 'Wietnam', active: true},
      {id: 'S34', catName: 'Włochy', active: true},
    ],
  },
  {
    id: 'M2',
    catDisplayName: 'Czas akcji',
    catName: 'czas_akcji',
    queryName: 'at.action_time',
  },
  {
    id: 'M3',
    catDisplayName: 'Rok produkcji',
    catName: 'rok_produkcji',
    queryName: 'py.production_year',
  },
];
