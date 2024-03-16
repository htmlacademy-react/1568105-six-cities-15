import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { Data } from './const';
import { previewOffers } from './mocks/preview-offers';
import { fullOffers } from './mocks/full-offers';
import { reviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      previewOffers={previewOffers}
      favoritesVolume = {Data.FavoritesVolume}
      stayPlaces = {Data.StayPlaces}
      fullOffers={fullOffers}
      reviews={reviews}
    />
  </React.StrictMode>
);
