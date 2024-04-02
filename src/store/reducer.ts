import { createReducer } from '@reduxjs/toolkit';
import { TPreviewOffer } from '../types/types'; // , TReview
import { ACTIVE_CITY_NAME, DEFAULT_SORTING, AuthStatus, SortType } from '../const'; //  CITIES,
import {
  fetchFavorites,
  fetchOffers,
  setFavouriteStatus,
  setActiveCity,
  setActiveSort,
  requireAuthorization,
  setLoadingMode
} from './action';
// import { previewOffers } from '../mocks/preview-offers';
// import { reviews } from '../mocks/reviews';

const initialState: {
  offers: TPreviewOffer[];
  favorites: TPreviewOffer[];
  activeCity: string;
  activeSorting: SortType;
  authorizationStatus: AuthStatus;
  isLoadingMode: boolean;
} = {
  offers: [],
  favorites: [],
  activeCity: ACTIVE_CITY_NAME,
  activeSorting: DEFAULT_SORTING,
  authorizationStatus: AuthStatus.Unknown,
  isLoadingMode: false
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(fetchFavorites, (state) => {
      state.favorites = state.offers.filter((offer) => offer.isFavorite);
    })
    .addCase(setFavouriteStatus, (state, action) => {
      const element = state.offers.find((item) => item.id === action.payload);
      if (element) {
        element.isFavorite = !element.isFavorite;
        state.favorites = state.offers.filter((offer) => offer.isFavorite);
      }
    })
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(setActiveSort, (state, action) => {
      state.activeSorting = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setLoadingMode, (state, action) => {
      state.isLoadingMode = action.payload;
    });
});
