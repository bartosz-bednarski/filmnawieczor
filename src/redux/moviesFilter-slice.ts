import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type MoviesFilterInitialState = {
  primaryFilters: any;
  secondaryFilters: any;
};
const moviesFilterInitialState: MoviesFilterInitialState = {
  primaryFilters: [],
  secondaryFilters: [],
};

const moviesFilterSlice = createSlice({
  name: "MoviesFilter",
  initialState: moviesFilterInitialState,
  reducers: {
    setSecondaryFilter: (state, action) => {
      const secondaryFilters = state.secondaryFilters;
      state.secondaryFilters = [...state.secondaryFilters, action.payload];
    },
    setSecondaryFilterActionTimeRange: (state, action) => {
      const itemIndex = state.secondaryFilters.findIndex(
        (item) => item.mainCatName === "Czas akcji"
      );
      if (itemIndex !== -1) {
        state.secondaryFilters[itemIndex] = action.payload;
      } else if (itemIndex === -1) {
        state.secondaryFilters = [...state.secondaryFilters, action.payload];
      }
    },
    setSecondaryFilterReleaseDateRange: (state, action) => {
      const itemIndex = state.secondaryFilters.findIndex(
        (item) => item.mainCatName === "Rok produkcji"
      );
      if (itemIndex !== -1) {
        state.secondaryFilters[itemIndex] = action.payload;
      } else if (itemIndex === -1) {
        state.secondaryFilters = [...state.secondaryFilters, action.payload];
      }
    },
    removeSecondaryFilter: (state, action) => {
      state.secondaryFilters = state.secondaryFilters.filter(
        (item) => item.displayName !== action.payload
      );
    },
  },
});

export default moviesFilterSlice.reducer;
export const setSecondaryFilter = moviesFilterSlice.actions.setSecondaryFilter;
export const setSecondaryFilterActionTimeRange =
  moviesFilterSlice.actions.setSecondaryFilterActionTimeRange;
export const removeSecondaryFilter =
  moviesFilterSlice.actions.removeSecondaryFilter;
export const setSecondaryFilterReleaseDateRange =
  moviesFilterSlice.actions.setSecondaryFilterReleaseDateRange;
