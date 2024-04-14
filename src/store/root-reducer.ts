import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import {offersData} from './offers-process/offers-process.slice';
import {reviewsData} from './review-process/review-process.slice';
import { userProcess } from './user-process/user-process.slice';
import { favoritesData } from './favorite-process/favorite-process.slice';


export const rootReducer = combineReducers({
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.Reviews]: reviewsData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Favorites]: favoritesData.reducer
});
