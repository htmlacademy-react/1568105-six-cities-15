import { createAction } from '@reduxjs/toolkit';
import { NameSpace } from '../const'; // CITIES,
import { TCity } from '../types/types';

export const fetchOffers = createAction(`${NameSpace.Offers}/fetch`);
export const fetchFavorites = createAction(`${NameSpace.Favorites}/fetch`);
export const setFavouriteStatus = createAction(`${NameSpace.Offers}/bookmark`);
export const setActiveCity = createAction<TCity['name']>(`${NameSpace.Offers}/setActiveCity`);
export const setActiveSort = createAction<string>(`${NameSpace.Offers}/setActiveSort`);
