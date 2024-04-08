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
import {
  fetchOffers,
  requireAuthorization,
  setLoadingMode,
  setCurrentOffer,
  setDataLoadedStatus,
  setReviews,
  setNearbyOffers,
  fetchFavorites,
  setUserData,
  redirectToRoute
} from './action';
import { saveToken, dropToken } from '../services/token';
import { AppRoute, AuthStatus, NameSpace, ApiRoute } from '../const';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.Offers}/load`,
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setDataLoadedStatus(false));
    dispatch(setLoadingMode(true));
    const { data } = await api.get<TPreviewOffer>(AppRoute.Offers);
    dispatch(fetchOffers(data));
    dispatch(setLoadingMode(false));
    dispatch(setDataLoadedStatus(true));
  },
);

export const fetchOfferByIdAction = createAsyncThunk<void, TPreviewOffer['id'], {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.Offer}/load`,
  async (id: TFullOffer['id'], { dispatch, extra: api }) => {
    dispatch(setLoadingMode(true));
    const { data } = await api.get<TFullOffer>(`${AppRoute.Offers}/${id}`);
    dispatch(setCurrentOffer(data));
    dispatch(setLoadingMode(false));
  },
);

export const fetchOfferReviewsAction = createAsyncThunk<void, TPreviewOffer['id'], {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.Reviews}/fetch`,
  async (id: TFullOffer['id'], { dispatch, extra: api }) => {
    const { data } = await api.get<TReview>(`${ApiRoute.Reviews}/${id}`);
    dispatch(setReviews(data));
  },
);

export const fetchNearbyOffersAction = createAsyncThunk<void, TPreviewOffer['id'], {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.NearPlaces}/fetch`,
  async (id: TFullOffer['id'], { dispatch, extra: api }) => {
    const { data } = await api.get<TPreviewOffer[]>(`${ApiRoute.Offers}/${id}/${ApiRoute.Nearby}`);
    dispatch(setNearbyOffers(data));
  },
);

export const updateFavoriteStatusAction = createAsyncThunk<TPreviewOffer[], TFavoriteStatus, {
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

export const fetchFavoriteAction = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.Favorites}/fetch`,
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<TPreviewOffer[]>(ApiRoute.Favorite);
    dispatch(fetchFavorites(data));
  },
);

export const loginAction = createAsyncThunk<void, TAuthData, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/login`,
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<TUser>(ApiRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(requireAuthorization(AuthStatus.Auth));
    dispatch(setUserData(data));
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/logout`,
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(ApiRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthStatus.NoAuth));
    dispatch(setUserData(null));
  }
);

export const addReviewAction = createAsyncThunk<TReview, TNewReview, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.Reviews}/post`,
  async ({id, comment, rating}, {extra: api}) => {
    const {data} = await api.post<TReview>(`${ApiRoute.Reviews}/${id}`, {comment, rating});
    return data;
  },
);
