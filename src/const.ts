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
