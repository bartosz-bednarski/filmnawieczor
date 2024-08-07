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
    },
    {
      id: "M3",
      catDisplayName: "Rok produkcji",
      catName: "rok_produkcji",
      queryName: "py.production_year",
    },
  ],
  secondaryCatsToDisplay: "",
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
