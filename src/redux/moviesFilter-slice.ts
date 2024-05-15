import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type MoviesFilterInitialState = {
  primaryFilters: any;
  secondaryFilters: any;
};
const moviesFilterInitialState: MoviesFilterInitialState = {
  primaryFilters: [],
  secondaryFilters: [
    { mainCategoryName: "Gatunek", active_filters: [] },
    { mainCategoryName: "Miejsce akcji", active_filters: [] },
    { mainCategoryName: "Lata akcji", active_filters: [] },
    { mainCategoryName: "Rok produkcji", active_filters: [] },
  ],
};

const moviesFilterSlice = createSlice({
  name: "MoviesFilter",
  initialState: moviesFilterInitialState,
  reducers: {
    setSecondaryFilter: (state, action) => {
      const secondaryFilters = state.secondaryFilters;
      const categoryIndex = state.secondaryFilters.findIndex(
        (cat) => cat.mainCategoryName === action.payload.mainCategoryName
      );
      // const arrToPush = state.secondaryFilters[categoryIndex].active_filters.push(action.payload.secondaryCategory)
      // secondaryFilters[categoryIndex].active_filters.push(action.payload.data);
      console.log("checking", action.payload.secondaryCategory);
      if (state.secondaryFilters[categoryIndex].active_filters.length === 0) {
        state.secondaryFilters[categoryIndex] = {
          mainCategoryName:
            state.secondaryFilters[categoryIndex].mainCategoryName,
          active_filters: [action.payload.secondaryCategory],
        };
      } else if (
        state.secondaryFilters[categoryIndex].active_filters.length > 0
      ) {
        state.secondaryFilters[categoryIndex] = {
          mainCategoryName:
            state.secondaryFilters[categoryIndex].mainCategoryName,
          active_filters: [
            ...state.secondaryFilters[categoryIndex].active_filters,
            action.payload.secondaryCategory,
          ],
        };
      }
    },
  },
});

export default moviesFilterSlice.reducer;
export const setSecondaryFilter = moviesFilterSlice.actions.setSecondaryFilter;
