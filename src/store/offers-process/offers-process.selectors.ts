import { TFullOffer, TPreviewOffer, TState } from '../../types/types';
import { Status, NameSpace } from '../../const';

export const getOffersData = (state: TState): TPreviewOffer[] => state[NameSpace.Offers].offers;

export const getOffersLoadingStatus = (state: TState): Status => state[NameSpace.Offers].offersLoadingStatus;

export const getFullOffer = (state: TState): TFullOffer | null => state[NameSpace.Offers].fullOffer;

export const getFullOfferLoadingStatus = (state: TState): Status => state[NameSpace.Offers].fullOfferLoadingStatus;

export const getCurrentOfferId = (state: TState): TPreviewOffer['id'] | null => state[NameSpace.Offers].currentOfferId;

export const getNearByOffers = (state: TState): TPreviewOffer[] => state[NameSpace.Offers].nearByOffers;

export const getNearByOffersLoadingStatus = (state: TState): Status => state[NameSpace.Offers].nearByOffersLoadingStatus;