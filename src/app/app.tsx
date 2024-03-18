import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../const';
import PrivateRoute from '../components/private-route';
import Layout from '../components/layout';
import MainPage from '../pages/main-page';
import OfferPage from '../pages/offer-page';
import LoginPage from '../pages/login-page';
import FavoritesPage from '../pages/favorites-page';
import PageNotFound from '../pages/page-not-found';
import { FullOffer, PreviewOffer, Review, City } from '../types/types';
import { getUserAuth } from '../get-user-auth';

type AppProps = {
  previewOffers: PreviewOffer[];
  fullOffers: FullOffer[];
  reviews: Review[];
  favoritesVolume: number;
  cityData: City;
}

export default function App({ favoritesVolume, reviews, previewOffers, fullOffers, cityData }: AppProps): JSX.Element {
  const auth = getUserAuth();

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
              element={<MainPage cityData={cityData} previewOffers={previewOffers}/>}
            />
            <Route
              path={AppRoute.OfferPage}
              element={(<OfferPage fullOffers={fullOffers} previewOffers={previewOffers} reviews={reviews}/>)}
            />
            <Route
              path={AppRoute.Login} element={(
                <PrivateRoute authorisedUser={auth} isReverse>
                  <LoginPage />
                </PrivateRoute>
              )}
            />
            <Route
              path={AppRoute.FavoritesPage}
              element={(
                <PrivateRoute authorisedUser={auth}>
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
