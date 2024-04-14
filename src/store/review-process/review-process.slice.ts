import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, Status } from '../../const';
import { fetchOfferReviewsAction, addReviewAction } from '../api-action';
import { TReviewProcess } from '../../types/types';

const initialState: TReviewProcess = {
  reviews: [],
  reviewsLoadingStatus: Status.Idle,
  addReviewsLoadingStatus: Status.Idle
};

export const reviewsData = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferReviewsAction.pending, (state) => {
        state.reviewsLoadingStatus = Status.Loading;
      })
      .addCase(fetchOfferReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.reviewsLoadingStatus = Status.Success;
      })
      .addCase(fetchOfferReviewsAction.rejected, (state) => {
        state.reviewsLoadingStatus = Status.Failed;
      })
      .addCase(addReviewAction.pending, (state) => {
        state.addReviewsLoadingStatus = Status.Loading;
      })
      .addCase(addReviewAction.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
        state.addReviewsLoadingStatus = Status.Success;
      })
      .addCase(addReviewAction.rejected, (state) => {
        state.addReviewsLoadingStatus = Status.Failed;
      });
  },
});
