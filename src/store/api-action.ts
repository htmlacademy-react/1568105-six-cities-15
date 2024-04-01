import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { 
    TState, 
    TAppDispatch, 
    TPreviewOffer,
} from '../types/types';
import {fetchOffers, requireAuthorization} from './action';
import {saveToken} from '../services/token';
import {AppRoute, AuthStatus, NameSpace } from '../const';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }>(
    `${NameSpace.Offers}/load`,
    async (_arg, {dispatch, extra: api}) => {
      const {data} = await api.get<TPreviewOffer>(AppRoute.Offers);
      dispatch(fetchOffers(data));
    },
  );