export const Data = {
  FavoritesVolume: 3,
  StayPlaces: 312
} as const;

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id'
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

export const PLACES_OPTIONS: string[] = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export const OFFER_INSIDE_ITEMS: string[] = [
  'Wi-Fi',
  'Washing machine',
  'Towels',
  'Heating',
  'Coffee machine',
  'Baby seat',
  'Kitchen',
  'Dishwasher',
  'Cabel TV',
  'Fridge'
];
