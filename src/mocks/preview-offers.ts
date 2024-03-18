import { PreviewOffer } from '../types/types';

export const previewOffers: PreviewOffer[] = [
  {
    id: 'ba3bf035-7a38-4f59-bf40-ff07122f5456',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 543,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 13
      }},
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    isPremium: true,
    isFavorite: false,
    rating: 3.4,
  },
  {
    id: 'd06007ba-52d1-4f3f-91de-7dcd4dc2220e',
    title: 'Waterfront with extraordinary view',
    type: 'hotel',
    price: 195,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    isPremium: false,
    isFavorite: true,
    rating: 3.1,
  },
  {
    id: '8b5a7be7-8cf0-4ead-af45-790242856c4a',
    title: 'The Joshua Tree House',
    type: 'room',
    price: 149,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16
    },
    isPremium: false,
    isFavorite: false,
    rating: 3.3,
  },
  {
    id: '55232be2-36d1-4ea6-99d6-5c0a33ffa1ce',
    title: 'The house among olive ',
    type: 'house',
    price: 223,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16
    },
    isPremium: true,
    isFavorite: true,
    rating: 3.8,
  }
];
