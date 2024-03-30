import { createReducer } from '@reduxjs/toolkit';
import { TPreviewOffer } from '../types/types'; // , TReview
import { ACTIVE_CITY_NAME, DEFAULT_SORTING } from '../const'; //  CITIES,
import { fetchFavorites, fetchOffers, setFavouriteStatus, setActiveCity, setActiveSort } from './action';
import { previewOffers } from '../mocks/preview-offers';
// import { reviews } from '../mocks/reviews';

const initialState: {
  offers: TPreviewOffer[];
  favorites: TPreviewOffer[];
  activeCity: string;
  activeSorting: string;
} = {
  offers: previewOffers,
  favorites: [],
  activeCity: ACTIVE_CITY_NAME,
  activeSorting: DEFAULT_SORTING
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers, (state) => {
      state.offers = previewOffers;
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
    });
});
