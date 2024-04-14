import { store } from '../store';
import { Status, AuthStatus } from '../const';

//* TLocation *
export type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

//* TCity *
export type TCity = {
  name: string;
  location: TLocation;
};

//* THost *
export type THost = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type TOfferBase = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

//* TFullOffer *
export type TFullOffer = TOfferBase & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: THost;
  images: string[];
  maxAdults: number;
}

//* TPreviewOffer *
export type TPreviewOffer = TOfferBase & {
  previewImage: string;
}

//* TUser *
export type TUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
}

// * TReview *
export type TReview = {
  id: string;
  date: string;
  user: Omit<TUser, 'email' | 'token'>;
  comment: string;
  rating: number;
}

export type TNewReview = Omit<TReview, 'user' | 'date'>;

export type TState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;

export type TFavoriteStatus = {
  id: TPreviewOffer['id'];
  status: number;
}

export type TAuthData = {
  email: string;
  password: string;
};

export type TOffersProcess = {
  offers: TPreviewOffer[];
  offersLoadingStatus: Status;
  fullOffer: TFullOffer | null;
  fullOfferLoadingStatus: Status;
  currentOfferId: TFullOffer['id'] | null;
  nearByOffers: TPreviewOffer[];
  nearByOffersLoadingStatus: Status;
};

export type TReviewProcess = {
  reviews: TReview[];
  reviewsLoadingStatus: Status;
  addReviewsLoadingStatus: Status;
}

export type UserProcess = {
  authorizationStatus: AuthStatus;
  userData: TUser | null;
}

export type FavoriteProcess = {
  favoriteOffers: TPreviewOffer[];
  favoriteOffersLoadingStatus: Status;
  favoriteUpdateOffersLoadingStatus: Status;
}
