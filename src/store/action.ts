import { createAction } from '@reduxjs/toolkit';
import { CITIES, NameSpace } from '../const';

export const fetchOffers = createAction(`${NameSpace.Offers}/fetch`);
export const fetchFavorites = createAction(`${NameSpace.Favorites}/fetch`);
