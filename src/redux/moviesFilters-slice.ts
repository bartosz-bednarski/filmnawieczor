import { createSlice } from "@reduxjs/toolkit";
import { ActiveFilter } from "filters";
import {
  ActivefilterAction,
  MoviesFiltersInitialState,
  RemoveActiveFilterAction,
  SecondaryCatsToDisplayAction,
} from "redux/moviesFilters";

const moviesFiltersInitialState: MoviesFiltersInitialState = {
  categories: [
    {
      id: "M0",
      catDisplayName: "Gatunek",
      catName: "gatunek",
      queryName: "mc.movie_category",
      secondaryCats: [
        { id: "S0", catName: "Akcja", active: true },
        { id: "S1", catName: "Biograficzny", active: true },
        { id: "S2", catName: "Dramat", active: true },
        { id: "S3", catName: "Komedia", active: true },
        { id: "S4", catName: "Przygodowy", active: true },
        { id: "S5", catName: "Sci-Fi", active: true },
        { id: "S6", catName: "Wojenny", active: true },
      ],
    },
    {
      id: "M1",
      catDisplayName: "Miejsce akcji",
      catName: "miejsce_akcji",
      queryName: "ap.action_place",
      secondaryCats: [
        { id: "S0", catName: "Afganistan", active: true },
        { id: "S1", catName: "Anglia", active: true },
        { id: "S2", catName: "Arabia Saudyjska", active: true },
        { id: "S3", catName: "Atlantyk", active: true },
        { id: "S4", catName: "Austria", active: true },
        { id: "S5", catName: "Belgia", active: true },
        { id: "S6", catName: "Birma", active: true },
        { id: "S7", catName: "Brazylia", active: true },
        { id: "S8", catName: "Chiny", active: true },
        { id: "S9", catName: "Egipt", active: true },
        { id: "S10", catName: "Francja", active: true },
        { id: "S11", catName: "Grecja", active: true },
        { id: "S12", catName: "Holandia", active: true },
        { id: "S13", catName: "Irak", active: true },
        { id: "S14", catName: "Japonia", active: true },
        { id: "S15", catName: "Jugosławia", active: true },
        { id: "S16", catName: "Kambodża", active: true },
        { id: "S17", catName: "Kanada", active: true },
        { id: "S18", catName: "Kolumbia", active: true },
        { id: "S19", catName: "Korea Południowa", active: true },
        { id: "S20", catName: "Kosmos", active: true },
        { id: "S21", catName: "Monako", active: true },
        { id: "S22", catName: "Nepal", active: true },
        { id: "S23", catName: "Niemcy", active: true },
        { id: "S24", catName: "Norwegia", active: true },
        { id: "S25", catName: "Pacyfik", active: true },
        { id: "S26", catName: "Polska", active: true },
        { id: "S27", catName: "Rosja", active: true },
        { id: "S28", catName: "Szkocja", active: true },
        { id: "S29", catName: "Tajlandia", active: true },
        { id: "S30", catName: "Ukraina", active: true },
        { id: "S31", catName: "USA", active: true },
        { id: "S32", catName: "Węgry", active: true },
        { id: "S33", catName: "Wietnam", active: true },
        { id: "S34", catName: "Włochy", active: true },
      ],
    },
    {
      id: "M2",
      catDisplayName: "Czas akcji",
      catName: "czas_akcji",
      queryName: "at.action_time",
    },
    {
      id: "M3",
      catDisplayName: "Rok produkcji",
      catName: "rok_produkcji",
      queryName: "py.production_year",
    },
  ],
  secondaryCatsToDisplay: "",
  sorting: [
    {
      name: "production_year",
      buttonName: "Rok produkcji",
      order: "DESC",
      active: true,
    },
    {
      name: "production_year",
      buttonName: "Rok produkcji",
      order: "ASC",
      active: false,
    },
    { name: "rating", buttonName: "Ocena", order: "DESC", active: false },
    { name: "rating", buttonName: "Ocena", order: "ASC", active: false },
    {
      name: "action_time",
      buttonName: "Czas akcji",
      order: "DESC",
      active: false,
    },
    {
      name: "action_time",
      buttonName: "Czas akcji",
      order: "ASC",
      active: false,
    },
  ],
  activeFilters: [],
};

const moviesFiltersSlice = createSlice({
  name: "MoviesFilter",
  initialState: moviesFiltersInitialState,
  reducers: {
    setSecondaryCatsToDisplay: (
      state,
      action: SecondaryCatsToDisplayAction
    ) => {
      state.secondaryCatsToDisplay = action.payload;
    },
    setActivefilter: (state, action: ActivefilterAction) => {
      state.activeFilters = [
        ...state.activeFilters,
        {
          queryName: action.payload.queryName,
          queryValue: action.payload.queryValue,
        },
      ];
      if (
        action.payload.queryName === "mc.movie_category" ||
        action.payload.queryName === "ap.action_place"
      ) {
        const indexOfPrimaryCategory = state.categories.findIndex(
          (item) => item.catName === action.payload.catName
        );
        const indexOfSecondaryCategory = state.categories[
          indexOfPrimaryCategory
        ].secondaryCats.findIndex(
          (item) => item.catName === action.payload.queryValue
        );
        state.categories[indexOfPrimaryCategory].secondaryCats[
          indexOfSecondaryCategory
        ].active = false;
      }
    },
    removeActiveFilter: (state, action: RemoveActiveFilterAction) => {
      if (
        action.payload.queryName === "mc.movie_category" ||
        action.payload.queryName === "ap.action_place"
      ) {
        const indexOfPrimaryCategory = state.categories.findIndex(
          (primCat) => primCat.queryName === action.payload.queryName
        );
        const indexOfSecondaryCategory = state.categories[
          indexOfPrimaryCategory
        ].secondaryCats.findIndex(
          (secCat) => secCat.catName === action.payload.queryValue
        );
        state.categories[indexOfPrimaryCategory].secondaryCats[
          indexOfSecondaryCategory
        ].active = true;
      }
      state.activeFilters = state.activeFilters.filter(
        (item) => item.queryValue !== action.payload.queryValue
      );
    },
  },
});

export default moviesFiltersSlice.reducer;
export const setSecondaryCatsToDisplayMovie =
  moviesFiltersSlice.actions.setSecondaryCatsToDisplay;
export const setActivefilterMovie = moviesFiltersSlice.actions.setActivefilter;
export const removeActiveFilterMovie =
  moviesFiltersSlice.actions.removeActiveFilter;
