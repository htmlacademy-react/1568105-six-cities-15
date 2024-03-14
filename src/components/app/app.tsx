import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route';
import Layout from '../layout';
import MainPage from '../../pages/main-page';
import OfferPage from '../../pages/offer-page';
import LoginPage from '../../pages/login-page';
import FavoritesPage from '../../pages/favorites-page';
import PageNotFound from '../../pages/page-not-found';
import { FullOffer, PreviewOffer, Review } from '../../types/types';

type AppProps = {
  previewOffers: PreviewOffer[];
  fullOffers: FullOffer[];
  reviews: Review[];
  favoritesVolume: number;
  stayPlaces: number;
}

export default function App({reviews, previewOffers, fullOffers, favoritesVolume, stayPlaces}: AppProps): JSX.Element {

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
              element={(<OfferPage fullOffers={fullOffers} previewOffers={previewOffers} reviews={reviews}/>)}
            />
            <Route
              path={AppRoute.Login} element={(
                <PrivateRoute authorizationStatus={AuthorizationStatus.Auth} isReverse>
                  <LoginPage />
                </PrivateRoute>
              )}
            />
            <Route
              path={AppRoute.FavoritesPage}
              element={(
                <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                  <FavoritesPage />
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
