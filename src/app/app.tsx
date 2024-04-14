import {useEffect} from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthStatus, Status } from '../const';
import PrivateRoute from '../components/private-route';
import Layout from '../components/layout';
import MainPage from '../pages/main-page';
import OfferPage from '../pages/offer-page';
import LoginPage from '../pages/login-page';
import FavoritesPage from '../pages/favorites-page';
import PageNotFound from '../pages/page-not-found';
import { useAppSelector, useAppDispatch } from '../hooks';
import { getAuthorizationStatus } from '../store/user-process/user-process.selectors';
import { getOffersLoadingStatus } from '../store/offers-process/offers-process.selectors';
import { fetchFavoriteAction } from '../store/api-action';
import Loader from '../components/loader';

export default function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const isAuthChecked = useAppSelector(getAuthorizationStatus);
  const isDataLoading = useAppSelector(getOffersLoadingStatus);

  useEffect(() => {
    if (isAuthChecked === AuthStatus.Auth) {
      dispatch(fetchFavoriteAction());
    }
  }, [dispatch, isAuthChecked]);

  if (isAuthChecked === AuthStatus.Unknown || isDataLoading === Status.Loading) {
    return (
      <Loader />
    );
  }
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<Layout />}
          >
            <Route
              index
              element={<MainPage />}
            />
            <Route
              path={AppRoute.OfferPage}
              element={(<OfferPage />)}
            />
            <Route
              path={AppRoute.Login} element={(
                <PrivateRoute authorisedUser={isAuthChecked} isReverse>
                  <LoginPage />
                </PrivateRoute>
              )}
            />
            <Route
              path={AppRoute.FavoritesPage}
              element={(
                <PrivateRoute authorisedUser={isAuthChecked}>
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
