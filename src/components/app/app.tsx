import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants';
import Layout from '../layout/layout';
import PageMain from '../../pages/page-main';
import Login from '../../pages/login';
import Favorites from '../../pages/favorites';
import Offer from '../../pages/offer';
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
            element={<PageMain stayPlaces={stayPlaces} />}
          />
          <Route
            path={AppRoute.Login}
            element={(<Login />)}
          />
          {/* element={(
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth} isReverse>
                <Login />
              </PrivateRoute>
            )} */}
          <Route
            path={AppRoute.Favorites}
            element={(
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <Favorites />
              </PrivateRoute>
            )}
          />

          <Route
            path={AppRoute.Offer}
            element={(
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <Offer />
              </PrivateRoute>
            )}
          />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
