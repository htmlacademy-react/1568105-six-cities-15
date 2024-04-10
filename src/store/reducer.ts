import { createReducer } from '@reduxjs/toolkit';
import {
  TPreviewOffer,
  TFullOffer,
  TReview,
  TUser
} from '../types/types';
import { ACTIVE_CITY_NAME, DEFAULT_SORTING, AuthStatus, SortType } from '../const';
import {
  fetchFavorites,
  fetchOffers,
  setFavouriteStatus,
  setActiveCity,
  setActiveSort,
  requireAuthorization,
  setLoadingMode,
  setCurrentOffer,
  setDataLoadedStatus,
  setReviews,
  setNearbyOffers,
  setUserData
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
  currentOffer: TFullOffer | null;
  isDataLoaded: string;
  reviews: TReview[];
  nearbyOffers: TPreviewOffer[];
  userData: TUser | null;
} = {
  offers: [],
  favorites: [],
  activeCity: ACTIVE_CITY_NAME,
  activeSorting: DEFAULT_SORTING,
  authorizationStatus: AuthStatus.NoAuth,
  isLoadingMode: true,
  currentOffer: null,
  isDataLoaded: '',
  reviews: [],
  nearbyOffers: [],
  userData: null
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(fetchFavorites, (state, action) => {
      state.favorites = action.payload;
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
    .addCase(setLoadingMode, (state, action) => {
      state.isLoadingMode = action.payload;
    })
    .addCase(setCurrentOffer, (state, action) => {
      state.currentOffer = action.payload;
      // console.log(state.currentOffer);
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    });
});
