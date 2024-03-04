import { City } from './city';
import { Location } from './location';
import { Host } from './host';

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[] | null;
  maxAdults: number;

  previewImage?: string | null;
}
