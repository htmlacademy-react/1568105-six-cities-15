import { NameSpace, Status } from '../../const';
import { TPreviewOffer, TState } from '../../types/types';

export const getFavoritsData = (state: TState): TPreviewOffer[] => state[NameSpace.Favorites].favoriteOffers;
export const getFavoriteLoadingStatus = (state: TState): Status => state[NameSpace.Favorites].favoriteOffersLoadingStatus;
export const getFavoriteUpdateOffersLoadingStatus = (state: TState): Status => state[NameSpace.Favorites].favoriteUpdateOffersLoadingStatus;
