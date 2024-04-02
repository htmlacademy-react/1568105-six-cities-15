import { createAction } from '@reduxjs/toolkit';
import { NameSpace, AuthStatus, SortType } from '../const'; // CITIES,
import { TCity, TPreviewOffer } from '../types/types';

export const setLoadingMode = createAction<TPreviewOffer[]>(`${NameSpace.Mode}/loading`);
export const fetchOffers = createAction(`${NameSpace.Offers}/fetch`);
export const fetchFavorites = createAction(`${NameSpace.Favorites}/fetch`);
export const setFavouriteStatus = createAction(`${NameSpace.Offers}/bookmark`);
export const setActiveCity = createAction<TCity['name']>(`${NameSpace.Offers}/setActiveCity`);
export const setActiveSort = createAction<SortType>(`${NameSpace.Offers}/setActiveSort`);
export const requireAuthorization = createAction<AuthStatus>('user/requireAuthorization');
