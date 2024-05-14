import { configureStore } from "@reduxjs/toolkit";
import moviesFilterSlice from "./moviesFilter-slice";
const store = configureStore({
  reducer: {
    moviesFilter: moviesFilterSlice,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
