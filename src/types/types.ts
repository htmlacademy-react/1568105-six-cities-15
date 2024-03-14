export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  name: string;
  location: Location;
};

export type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type OfferBase = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

//* FullOffer *
export type FullOffer = OfferBase & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
}

//* PreviewOffer *
export type PreviewOffer = OfferBase & {
  previewImage: string;
}

//* User *
export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
}

// * Review *
export type Review = {
  id: string;
  date: string;
  user: Omit<User, 'email' | 'token'>;
  comment: string;
  rating: number;
}
