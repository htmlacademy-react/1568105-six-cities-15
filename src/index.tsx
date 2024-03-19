import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { Data } from './const';
import { previewOffers } from './mocks/preview-offers';
import { fullOffers } from './mocks/full-offers';
import { reviews } from './mocks/reviews';
import { cityData } from './mocks/city-data';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      previewOffers={previewOffers}
      favoritesVolume = {Data.FavoritesVolume}
      fullOffers={fullOffers}
      reviews={reviews}
      cityData={cityData}
    />
  </React.StrictMode>
);
