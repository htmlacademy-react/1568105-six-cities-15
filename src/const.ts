import { Icon } from 'leaflet';

export const Data = {
  FavoritesVolume: 3,
  StayPlaces: 312
} as const;

export enum AppRoute {
  Root = '/',
  Login = '/login',
  FavoritesPage = '/favorites',
  OfferPage = '/offer/:id',
  Offers = 'offers'
}

export enum ApiRoute {
  Login = '/login',
  Offers = '/offers',
  Reviews = '/comments',
  Nearby= 'nearby',
  Favorite = '/favorite',
  Logout = '/logout'
}

export enum AuthStatus {
  Auth = 'Auth',
  NoAuth = 'NoAuth',
  Unknown = 'Unknown'
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

export enum SortType {
  Popular = 'Popular',
  LowPrice = 'Price: low to high',
  HightPrice = 'Price: high to low',
  Rating = 'Top rated first'
}

export const PLACE_OPTIONS: SortType[] = [
  SortType.Popular,
  SortType.LowPrice,
  SortType.HightPrice,
  SortType.Rating,
];

export const DEFAULT_SORTING = SortType.Popular;

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

export enum NameSpace {
  Offers = 'OFFERS',
  Offer = 'OFFER',
  NearPlaces = 'NEAR_PLACES',
  Favorites = 'FAVORITES',
  Reviews = 'REVIEWS',
  User = 'USER',
  Mode = 'MODE',
  Data = 'DATA'
}

export const ALLOW_SCROLL = 'city';

export const EMAIL_REG_EXP = /^[a-zA-Zа-яёА-ЯЁ0-9]+([._-][a-zA-Zа-яёА-ЯЁ0-9]+)*@[a-zA-Zа-яёА-ЯЁ0-9]+([.-][a-zA-Zа-яёА-ЯЁ0-9]+)*\.[a-zA-Zа-яёА-ЯЁ]{2,6}$/;
export const PASSWORD_REG_EXP = /^(?=.*[A-Za-zА-Яа-я])(?=.*\d)[A-Za-zА-Яа-я\d]{2,}$/;

export enum LoginFields {
  Email = 'email',
  Password = 'password'
}

export const STARS_NAME = 'rating';

export const MIN_REVIEW_LENGHT = 50;

export const MAX_REVIEW_LENGHT = 300;
