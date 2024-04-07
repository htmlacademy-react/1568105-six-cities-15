import { createAction } from '@reduxjs/toolkit';
import { NameSpace, AuthStatus, SortType } from '../const'; // CITIES,
import { TCity, TPreviewOffer, TFullOffer, TReview } from '../types/types';
import { AppRoute } from '../const';

export const setLoadingMode = createAction<TPreviewOffer[]>(`${NameSpace.Mode}/loading`);
export const fetchOffers = createAction(`${NameSpace.Offers}/fetch`);
export const fetchFavorites = createAction(`${NameSpace.Favorites}/fetch`);
export const setFavouriteStatus = createAction(`${NameSpace.Offers}/bookmark`);
export const setActiveCity = createAction<TCity['name']>(`${NameSpace.Offers}/setActiveCity`);
export const setActiveSort = createAction<SortType>(`${NameSpace.Offers}/setActiveSort`);

export const setCurrentOffer = createAction<TFullOffer>(`${NameSpace.Offer}/set`);
export const setDataLoadedStatus = createAction<TPreviewOffer[]>(`${NameSpace.Data}/status`);
export const setReviews = createAction<TReview[]>(`${NameSpace.Reviews}/set`);
export const setNearbyOffers = createAction<TPreviewOffer[]>(`${NameSpace.NearPlaces}/set`);

export const requireAuthorization = createAction<AuthStatus>(`${NameSpace.User}/required`);
export const setUserData = createAction<AuthStatus>(`${NameSpace.User}/set`);
export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
