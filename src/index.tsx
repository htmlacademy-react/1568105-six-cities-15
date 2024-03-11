import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { Data } from './const';
import { previewOffers } from './mocks/preview-offers';
import { fullOffers } from './mocks/full-offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      previewOffers={previewOffers}
      fullOffers={fullOffers}
      favoritesVolume = {Data.FavoritesVolume}
      stayPlaces = {Data.StayPlaces}
    />
  </React.StrictMode>
);
