import { Link } from 'react-router-dom';
import { Outlet, useLocation } from 'react-router-dom';
import { AppRoute, AuthStatus, ACTIVE_CITY_NAME, SortType } from '../../const';
import { getLayoutState } from '../../utils';
// import { getUserAuth } from '../../get-user-auth';
import ScrollToTop from '../../utils';
import { useAppSelector, useAppDispatch } from '../../hooks';
import Loader from '../loader';
import { useCallback } from 'react';
import { logoutAction } from '../../store/api-action';
import {setActiveCity, setActiveSort} from '../../store/action';

// import Footer from '../footer';

export default function Layout() {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const { rootClassName, linkClassName } = getLayoutState(pathname as AppRoute); /* , renderFooter */ /* , renderUser  */
  // const userAuth = getUserAuth();
  const favoritesOffers = useAppSelector((state) => state.favorites);
  const isLoadingData = useAppSelector((state) => state.isLoadingMode);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isAuth = authorizationStatus === AuthStatus.Auth;
  const userData = useAppSelector((state) => state.userData);

  const handleClickLogout = useCallback((evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  }, [dispatch]);

  const clickLogoHandler = () => {
    dispatch(setActiveCity(ACTIVE_CITY_NAME));
    dispatch(setActiveSort(SortType.Popular));
  };
  return (
    <div className={`page${rootClassName}`}>
      <ScrollToTop />
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className={`header__logo-link${linkClassName}`} to="/" onClick={clickLogoHandler }>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
              </Link>
            </div>

            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={isAuth ? AppRoute.FavoritesPage : AppRoute.Login}>
                    <div className="header__avatar-wrapper user__avatar-wrapper"
                      style={{
                        backgroundImage: `url(${userData?.avatarUrl ?? '../img/avatar.svg'})`,
                        borderRadius: '50%'
                      }}
                    >
                    </div>
                    {isAuth
                      ? (
                        <>
                          <span className="header__user-name user__name">{userData?.email}</span>
                          <span className="header__favorite-count">{favoritesOffers.length}</span>
                        </>
                      )
                      : <span className="header__login">Sign in</span>}
                  </Link>
                </li>
                {isAuth &&
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="#" onClick={handleClickLogout}>
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>}
              </ul>
            </nav>

          </div>
        </div>
      </header >
      <Outlet />
      {/* {renderFooter ? (
        <Footer />
      ) : null} */}
      {isLoadingData && <Loader />}
    </div >
  );
}
