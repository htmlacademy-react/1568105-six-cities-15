import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Layout from '../layout';
import MainPage from '../../pages/main-page';
import Login from '../../pages/login';
import Favorites from '../../pages/favorites';
import OfferPage from '../../pages/offer-page';
import PageNotFound from '../../pages/page-not-found';
import PrivateRoute from '../private-route';
import { Offer } from '../../types/offer';

type AppProps = {
  mockOffers: Offer[];
  favoritesVolume: number;
  stayPlaces: number;
}

export default function App({mockOffers, favoritesVolume, stayPlaces}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.MainPage}
          element={<Layout favoritesVolume={favoritesVolume} />}
        >
          <Route
            index
            element={<MainPage stayPlaces={stayPlaces} />} //mockOffers={mockOffers}
          />
          <Route
            path={AppRoute.Login}
            element={(
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth} isReverse>
                <Login />
              </PrivateRoute>
            )}
          />
          <Route
            path={AppRoute.Favorites}
            element={(
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <Favorites />
              </PrivateRoute>
            )}
          />
          <Route
            path={AppRoute.OfferPage}
            element={(<OfferPage mockOffers={mockOffers}/>)}
          />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
