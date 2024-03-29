import { createAction } from '@reduxjs/toolkit';
import { NameSpace } from '../const'; // CITIES,

export const fetchOffers = createAction(`${NameSpace.Offers}/fetch`);
export const fetchFavorites = createAction(`${NameSpace.Favorites}/fetch`);
