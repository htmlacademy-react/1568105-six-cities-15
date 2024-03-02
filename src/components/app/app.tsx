import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Layout from '../layout';
import MainPage from '../../pages/main-page';
import Login from '../../pages/login';
import Favorites from '../../pages/favorites';
import OfferPage from '../../pages/offer-page';
import PageNotFound from '../../pages/page-not-found';
import PrivateRoute from '../private-route';

type AppProps = {
  favoritesVolume: number;
  stayPlaces: number;
}

export default function App({favoritesVolume, stayPlaces}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Layout favoritesVolume={favoritesVolume} />}
        >
          <Route
            index
            element={<MainPage stayPlaces={stayPlaces} />}
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
            element={(<OfferPage />)}
          />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
