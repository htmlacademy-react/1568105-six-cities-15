import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { Data } from './const';
import { mockOffers } from './mocks/mock-offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      mockOffers={mockOffers}
      favoritesVolume = {Data.FavoritesVolume}
      stayPlaces = {Data.StayPlaces}
    />
  </React.StrictMode>
);
