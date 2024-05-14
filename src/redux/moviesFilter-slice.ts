import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
const moviesFilterInitialState = {
  primaryFilters: [],
  secondaryFilters: [],
};

const moviesFilterSlice = createSlice({
  name: "MoviesFilter",
  initialState: moviesFilterInitialState,
  reducers: {
    setPrimaryFilter: (state, action) => {
      state.primaryFilters = action.payload;
    },
  },
});

export default moviesFilterSlice.reducer;
