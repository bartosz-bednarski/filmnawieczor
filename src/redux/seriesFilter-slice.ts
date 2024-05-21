import { createSlice } from "@reduxjs/toolkit";

export type SeriesFilterInitialState = {
  primaryFilters: any;
  secondaryFilters: any;
};
const seriesFilterInitialState: SeriesFilterInitialState = {
  primaryFilters: [],
  secondaryFilters: [],
};

const seriesFilterSlice = createSlice({
  name: "SeriesFilter",
  initialState: seriesFilterInitialState,
  reducers: {
    setSecondaryFilter: (state, action) => {
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

export default seriesFilterSlice.reducer;
export const setSecondaryFilter = seriesFilterSlice.actions.setSecondaryFilter;
export const setSecondaryFilterActionTimeRange =
  seriesFilterSlice.actions.setSecondaryFilterActionTimeRange;
export const removeSecondaryFilter =
  seriesFilterSlice.actions.removeSecondaryFilter;
export const setSecondaryFilterReleaseDateRange =
  seriesFilterSlice.actions.setSecondaryFilterReleaseDateRange;
