

import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from './movies-slice';
import seriesFilterSlice from './seriesFilter-slice';
export const makeStore = () =>{
  return configureStore({
    reducer: {
      seriesFilters: seriesFilterSlice,
      movies: moviesSlice,
    },
  });
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
