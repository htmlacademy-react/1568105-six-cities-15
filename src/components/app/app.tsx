import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route';
import Layout from '../layout';
import MainPage from '../../pages/main-page';
import OfferPage from '../../pages/offer-page';
import LoginPage from '../../pages/login-page';
import Favorites from '../../pages/favorites';
import PageNotFound from '../../pages/page-not-found';
import { FullOffer, PreviewOffer } from '../../types/offer-types';

type AppProps = {
  previewOffers: PreviewOffer[];
  fullOffers: FullOffer[];
  favoritesVolume: number;
  stayPlaces: number;
}

export default function App({previewOffers, fullOffers, favoritesVolume, stayPlaces}: AppProps): JSX.Element {

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<Layout favoritesVolume={favoritesVolume} />}
          >
            <Route
              index
              element={<MainPage stayPlaces={stayPlaces} previewOffers={previewOffers}/>}
            />
            <Route
              path={AppRoute.OfferPage}
              element={(<OfferPage fullOffers={fullOffers} previewOffers={previewOffers} />)}
            />
            <Route
              path={AppRoute.Login} element={(
                <PrivateRoute authorizationStatus={AuthorizationStatus.Auth} isReverse>
                  <LoginPage />
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
            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
