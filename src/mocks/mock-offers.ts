import { Offer } from '../types/offer';

export const mockOffers: Offer[] = [
  {
    id: 'ba3bf035-7a38-4f59-bf40-ff07122f5456',
    title: 'Canal View Prinsengracht',
    type: 'house',
    price: 543,
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
    previewImage: 'https://url-to-image/image.png',
    description: 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    bedrooms: 4,
    goods: [
      'Coffee machine',
      'Breakfast',
      'Washing machine',
      'Kitchen',
      'Fridge',
      'Towels',
      'Baby seat',
      'Wi-Fi',
      'Air conditioning',
      'Washer',
      'Cable TV',
      'Dishwasher'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/17.jpg'
    ],
    maxAdults: 1
  },
  {
    id: 'd06007ba-52d1-4f3f-91de-7dcd4dc2220e',
    title: 'Waterfront with extraordinary view',
    type: 'hotel',
    price: 195,
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
    previewImage: 'https://url-to-image/image.png',
    description: 'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
    bedrooms: 2,
    goods: [
      'Wi-Fi',
      'Air conditioning',
      'Fridge',
      'Washer'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/16.jpg'
    ],
    maxAdults: 2
  },
  {
    id: '8b5a7be7-8cf0-4ead-af45-790242856c4a',
    title: 'Canal View Prinsengracht',
    type: 'hotel',
    price: 149,
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
    previewImage: 'https://url-to-image/image.png',
    description: 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    bedrooms: 4,
    goods: [
      'Kitchen',
      'Washing machine',
      'Laptop friendly workspace',
      'Baby seat',
      'Cable TV'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/16.jpg'
    ],
    maxAdults: 2
  },
  {
    id: '55232be2-36d1-4ea6-99d6-5c0a33ffa1ce',
    title: 'The house among olive ',
    type: 'hotel',
    price: 223,
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
    previewImage: 'https://url-to-image/image.png',
    description: 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    bedrooms: 3,
    goods: [
      'Dishwasher',
      'Heating',
      'Wi-Fi',
      'Air conditioning'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/16.jpg'
    ],
    maxAdults: 7
  }
];