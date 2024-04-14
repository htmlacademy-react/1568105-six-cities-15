import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, Status } from '../../const';
import { FavoriteProcess } from '../../types/types';
import {
  fetchFavoriteAction,
  logoutAction,
  updateFavoriteStatusAction
} from '../api-action';

const initialState: FavoriteProcess = {
  favoriteOffers: [],
  favoriteOffersLoadingStatus: Status.Idle,
  favoriteUpdateOffersLoadingStatus: Status.Idle,
};

export const favoritesData = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteAction.pending, (state) => {
        state.favoriteOffersLoadingStatus = Status.Loading;
      })
      .addCase(fetchFavoriteAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
        state.favoriteOffersLoadingStatus = Status.Success;
      })
      .addCase(fetchFavoriteAction.rejected, (state) => {
        state.favoriteOffersLoadingStatus = Status.Failed;
      })
      .addCase(updateFavoriteStatusAction.pending, (state) => {
        state.favoriteUpdateOffersLoadingStatus = Status.Loading;
      })
      .addCase(updateFavoriteStatusAction.fulfilled, (state, action) => {
        const index = state.favoriteOffers.findIndex((offer) => offer.id === action.payload.id);

        if (index === -1) {
          state.favoriteOffers.push(action.payload);
        } else {
          state.favoriteOffers = state.favoriteOffers.filter((offer) => offer.id !== action.payload.id);
        }

        state.favoriteUpdateOffersLoadingStatus = Status.Success;
      })
      .addCase(updateFavoriteStatusAction.rejected, (state) => {
        state.favoriteUpdateOffersLoadingStatus = Status.Failed;
      })
      .addCase(logoutAction.rejected, (state) => {
        state.favoriteOffers = [];
      });
  },
});
