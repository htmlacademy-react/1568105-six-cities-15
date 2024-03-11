import { PreviewOffer } from '../types/offer-types';

export const previewOffers: PreviewOffer[] = [
  {
    id: 'ba3bf035-7a38-4f59-bf40-ff07122f5456',
    title: 'Canal View Prinsengracht',
    type: 'house',
    price: 543,
    previewImage: 'https://url-to-image/image.png',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }},
    location: {
      latitude: 51.225402,
      longitude: 6.784314,
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
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.558341000000006,
      longitude: 9.999654000000001,
      zoom: 16
    },
    isPremium: true,
    isFavorite: false,
    rating: 3.1,
  },
  {
    id: '8b5a7be7-8cf0-4ead-af45-790242856c4a',
    title: 'Canal View Prinsengracht',
    type: 'hotel',
    price: 149,
    previewImage: 'https://url-to-image/image.png',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.385540000000006,
      longitude: 4.886976,
      zoom: 16
    },
    isPremium: true,
    isFavorite: false,
    rating: 3.3,
  },
  {
    id: '55232be2-36d1-4ea6-99d6-5c0a33ffa1ce',
    title: 'The house among olive ',
    type: 'hotel',
    price: 223,
    previewImage: 'https://url-to-image/image.png',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.842557,
      longitude: 4.363696999999999,
      zoom: 16
    },
    isPremium: true,
    isFavorite: false,
    rating: 3.8,
  }
];
