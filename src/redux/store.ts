import { configureStore } from "@reduxjs/toolkit";
import moviesFiltersSlice from "./moviesFilters-slice";
import seriesFilterSlice from "./seriesFilter-slice";
const store = configureStore({
  reducer: {
    seriesFilters: seriesFilterSlice,
    moviesFilters: moviesFiltersSlice,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
