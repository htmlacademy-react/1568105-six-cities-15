import { createReducer } from '@reduxjs/toolkit';
import { TPreviewOffer } from '../types/types'; // , TReview
import { fetchFavorites, fetchOffers } from './action';
import { previewOffers } from '../mocks/preview-offers';
// import { reviews } from '../mocks/reviews';

const initialState: {
  offers: TPreviewOffer[];
  favorites: TPreviewOffer[];
} = {
  offers: previewOffers,
  favorites: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers, (state) => {
      state.offers = previewOffers;
    })
    .addCase(fetchFavorites, (state) => {
      state.favorites = state.offers.filter((offer) => offer.isFavorite);
    });
});
