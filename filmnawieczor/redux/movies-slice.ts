import { MovieLinkPropsType } from '@/components/Ui/Links/MovieLink/MovieLink';
import {createSlice} from '@reduxjs/toolkit';

import { MoviesCategoriesType, MOVIES_CATEGORIES } from './utils/moviesCategories';
import { MoviesSortingFilterType, MOVIES_SORTING_FILTER } from './utils/moviesSortingFilter';



const moviesInitialState: MoviesInitialState= {
  moviesToDisplay:null,
  categories: MOVIES_CATEGORIES,
  secondaryCatsToDisplay: '',
  sorting: MOVIES_SORTING_FILTER,
  offset: 5,
  activeFilters: [],
};

const moviesSlice = createSlice({
  name: 'Movies',
  initialState: moviesInitialState,
  reducers: {
    setMoviesToDisplay:(state,action:{payload: MovieLinkPropsType[];})=>{
      state.moviesToDisplay = action.payload
    },

setFilteredMoviesToDisplay:(state,action)=>{
if(state.activeFilters.length===0)return;
const params = state.activeFilters.map((item) => {return {queryName: item.queryName, queryValue: item.queryValue}});
const sorting = state.sorting.filter((item) => item.active === true);
},

    setSecondaryCatsToDisplay: (
      state,
      action
    ) => {
      state.secondaryCatsToDisplay = action.payload;
    },

    setActivefilter: (state, action) => {
      state.offset = 5;
      state.sorting = moviesInitialState.sorting;
      const newActiveFilters = [
        ...state.activeFilters,
        {
          queryName: action.payload.queryName,
          queryValue: action.payload.queryValue,
        },
      ]
      state.activeFilters = newActiveFilters;
      if (
        action.payload.queryName === 'mc.movie_category' ||
        action.payload.queryName === 'ap.action_place'
      ) {
        const indexOfPrimaryCategory = state.categories.findIndex(
          (item) => item.catName === action.payload.catName
        );
        const selectedSecondaryCategories = state.categories[
          indexOfPrimaryCategory
        ].secondaryCats
        if(!selectedSecondaryCategories)return
        const indexOfSecondaryCategory = selectedSecondaryCategories.findIndex(
          (item) => item.catName === action.payload.queryValue
        );
        selectedSecondaryCategories[
          indexOfSecondaryCategory
        ].active = false;
      }
    },

    removeActiveFilter: (state, action) => {
      if (
        action.payload.queryName === 'mc.movie_category' ||
        action.payload.queryName === 'ap.action_place'
      ) {
        const indexOfPrimaryCategory = state.categories.findIndex(
          (primCat) => primCat.queryName === action.payload.queryName
        );
        const selectedSecondaryCategories = state.categories[
          indexOfPrimaryCategory
        ].secondaryCats
        if(!selectedSecondaryCategories)return

        const indexOfSecondaryCategory = selectedSecondaryCategories.findIndex(
          (secCat) => secCat.catName === action.payload.queryValue
        );
                  selectedSecondaryCategories[
            indexOfSecondaryCategory
          ].active = true; 
      }

      state.activeFilters = state.activeFilters.filter(
        (item) => item.queryValue !== action.payload.queryValue
      );
      state.sorting = moviesInitialState.sorting;
      state.offset = 5;
    },

    setActiveSorting: (state, action) => {
      state.offset = 5;
      const updatedFiltersArray = state.sorting.map((item) => {
        return {
          ...item,
          active:
            item.sortingName === action.payload.sortingName ? true : false,
        };
      });
      state.sorting = updatedFiltersArray;
    },
    setIncreaseOffset: (state) => {
      state.offset = state.offset += 5;
    },
  },
});

export default moviesSlice.reducer;
export const setMoviesToDisplay = moviesSlice.actions.setMoviesToDisplay
export const setSecondaryCatsToDisplayMovie =
  moviesSlice.actions.setSecondaryCatsToDisplay;
export const setActivefilterMovie = moviesSlice.actions.setActivefilter;
export const removeActiveFilterMovie =
  moviesSlice.actions.removeActiveFilter;
export const setActiveSorting = moviesSlice.actions.setActiveSorting;
export const setIncreaseOffset = moviesSlice.actions.setIncreaseOffset;

export type ActiveFilterType = {
  queryName: string;
  queryValue: string;
};

export type MoviesInitialState = {
  moviesToDisplay:MovieLinkPropsType[]|null
  categories: MoviesCategoriesType;
  secondaryCatsToDisplay: string;
  sorting: MoviesSortingFilterType;
  offset: number;
  activeFilters: ActiveFilterType[];
};