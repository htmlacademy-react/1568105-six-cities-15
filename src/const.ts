export const Data = {
  FavoritesVolume: 3,
  StayPlaces: 312
} as const;

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  OfferPage = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth='Auth',
  NoAuth='NoAuth',
  Unknown='Unknown'
}

export const CITIES: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const PLACE_OPTIONS: string[] = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];
