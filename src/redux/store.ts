import { configureStore } from "@reduxjs/toolkit";
import moviesFilterSlice from "./moviesFilter-slice";
import seriesFilterSlice from "./seriesFilter-slice";
const store = configureStore({
  reducer: {
    moviesFilter: moviesFilterSlice,
    seriesFilter: seriesFilterSlice,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
