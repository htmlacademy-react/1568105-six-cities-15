import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './app';
// import { Data } from './const';
import { previewOffers } from './mocks/preview-offers';
import { fullOffers } from './mocks/full-offers';
import { reviews } from './mocks/reviews';
import { cityData } from './mocks/city-data';
import { store } from './store';
import {fetchOffersAction} from './store/api-action';

store.dispatch(fetchOffersAction());
// store.dispatch(fetchFavoriteAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        previewOffers={previewOffers}
        // favoritesVolume={Data.FavoritesVolume}
        fullOffers={fullOffers}
        reviews={reviews}
        cityData={cityData}
      />
    </Provider>
  </React.StrictMode>
);
