import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  TState,
  TAppDispatch,
  TPreviewOffer,
  TFullOffer,
  TReview,
  TFavoriteStatus,
  TAuthData,
  TUser,
  TNewReview
} from '../types/types';

import { saveToken, dropToken } from '../services/token';
import { NameSpace, ApiRoute } from '../const';

export const fetchOffersAction = createAsyncThunk<TPreviewOffer[], undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.Offers}/load`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TPreviewOffer[]>(ApiRoute.Offers);
    return data;
  },
);

export const fetchOfferByIdAction = createAsyncThunk<TFullOffer, TFullOffer['id'], {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.Offer}/load`,
  async (id: TFullOffer['id'], { extra: api }) => {
    const { data } = await api.get<TFullOffer>(`${ApiRoute.Offers}/${id}`);
    return data;
  },
);

export const fetchOfferReviewsAction = createAsyncThunk<TReview[], TFullOffer['id'], {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.Reviews}/fetch`,
  async (id: TFullOffer['id'], { extra: api }) => {
    const { data } = await api.get<TReview[]>(`${ApiRoute.Reviews}/${id}`);
    return data;
  },
);

export const fetchNearByOffersAction = createAsyncThunk<TPreviewOffer[], TPreviewOffer['id'], {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.NearPlaces}/fetch`,
  async (id: TFullOffer['id'], { extra: api }) => {
    const { data } = await api.get<TPreviewOffer[]>(`${ApiRoute.Offers}/${id}/${ApiRoute.Nearby}`);
    return data;
  },
);

export const updateFavoriteStatusAction = createAsyncThunk<TPreviewOffer, TFavoriteStatus, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.Favorites}/update`,
  async ({ id, status }, { extra: api }) => {
    const { data } = await api.post<TPreviewOffer>(`${ApiRoute.Favorite}/${id}/${status}`);
    return data;
  },
);

export const fetchFavoriteAction = createAsyncThunk<TPreviewOffer[], undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.Favorites}/fetch`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TPreviewOffer[]>(ApiRoute.Favorite);
    return data;
  },
);

export const loginAction = createAsyncThunk<TUser, TAuthData, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/login`,
  async ({ email, password }, { extra: api }) => {
    const { data } = await api.post<TUser>(ApiRoute.Login, { email, password });
    saveToken(data.token);
    return data;
  },
);

export const logoutAction = createAsyncThunk<TUser, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/logout`,
  async (_arg, { extra: api }) => {
    await api.delete(ApiRoute.Logout);
    dropToken();
  }
);

export const checkAuthAction = createAsyncThunk<TUser, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/fetchCheckAuth`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TUser>(ApiRoute.Login);
    return data;
  },
);

export const addReviewAction = createAsyncThunk<TReview, TNewReview, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.Reviews}/post`,
  async ({ id, comment, rating }, { extra: api }) => {
    const { data } = await api.post<TReview>(`${ApiRoute.Reviews}/${id}`, { comment, rating });
    return data;
  },
);


