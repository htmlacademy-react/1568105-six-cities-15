import { Icon } from 'leaflet';

export const Data = {
  FavoritesVolume: 3,
  StayPlaces: 312
} as const;

export enum AppRoute {
  Root = '/',
  Login = '/login',
  FavoritesPage = '/favorites',
  OfferPage = '/offer/:id'
}

export enum AuthStatus {
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

export const ACTIVE_CITY_NAME = 'Paris';

export const PLACE_OPTIONS: string[] = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export const TILE_LAYER = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
export const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export const PIN_DEFAULT = '../img/pin.svg';
export const PIN_CURRENT = '../img/pin-active.svg';

export const defaultIcon = new Icon({
  iconUrl: PIN_DEFAULT,
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});

export const currentIcon = new Icon({
  iconUrl: PIN_CURRENT,
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});
