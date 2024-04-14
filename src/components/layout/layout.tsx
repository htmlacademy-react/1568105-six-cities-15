import { useMemo } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { AppRoute, AuthStatus} from '../../const';
import ScrollToTop from '../../utils';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { useCallback } from 'react';
import { logoutAction } from '../../store/api-action';
import { getFavoritsData } from '../../store/favorite-process/favorite-process.selectors';
import { getAuthorizationStatus, getUserData } from '../../store/user-process/user-process.selectors';
import LogoLink from '../logo-link/logo-link';

export default function Layout(): JSX.Element {
  const { pathname } = useLocation();
  const favoritesOffers = useAppSelector(getFavoritsData);

  const classLink = useMemo(() => `page 
  ${pathname === AppRoute.Root ? 'page--gray page--main' : ''} 
  ${pathname === AppRoute.Login ? 'page--gray page--login' : ''} 
  ${pathname === AppRoute.FavoritesPage && !favoritesOffers.length ? 'page--favorites-empty' : ''}`,
    [favoritesOffers.length, pathname]);

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const userData = useAppSelector(getUserData);

  const isAuth = useMemo(() => authorizationStatus === AuthStatus.Auth, [authorizationStatus]);
  const userAvatar = useMemo(() => userData?.avatarUrl ?? '../img/avatar.svg', [userData?.avatarUrl]);
  const userEmail = useMemo(() => userData?.email, [userData?.email]);
  const favoriteCount = useMemo(() => favoritesOffers.length, [favoritesOffers.length]);

  const dispatch = useAppDispatch();

  const handleClickLogout = useCallback((evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  }, [dispatch]);

  return (
    <div className={classLink}>
      <ScrollToTop />
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <LogoLink pathname={pathname} />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={isAuth ? AppRoute.FavoritesPage : AppRoute.Login}>
                    <div className="header__avatar-wrapper user__avatar-wrapper"
                      style={{
                        backgroundImage: `url(${userAvatar})`,
                        borderRadius: '50%'
                      }}
                    >
                    </div>
                    {isAuth
                      ? (
                        <>
                          <span className="header__user-name user__name">{userEmail}</span>
                          <span className="header__favorite-count">{favoriteCount}</span>
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
    </div >
  );
}
