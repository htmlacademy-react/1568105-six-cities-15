import { BrowserRouter, Route, Routes} from 'react-router-dom'; //, useParams
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';
import Layout from '../layout';
import MainPage from '../../pages/main-page';
import Login from '../../pages/login';
import Favorites from '../../pages/favorites';
import OfferPage from '../../pages/offer-page';
import PageNotFound from '../../pages/page-not-found';
import PrivateRoute from '../private-route';
import { FullOffer, PreviewOffer } from '../../types/offer-types';

type AppProps = {
  previewOffers: PreviewOffer[];
  fullOffers: FullOffer[];
  favoritesVolume: number;
  stayPlaces: number;
}

export default function App({previewOffers, fullOffers, favoritesVolume, stayPlaces}: AppProps): JSX.Element {
  // const { offerId } = useParams();

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
            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
