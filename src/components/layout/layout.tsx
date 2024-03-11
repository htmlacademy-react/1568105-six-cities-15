import { Link } from 'react-router-dom';
import { Outlet, useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getLayoutState } from './utils';
import { getAuthorizationStatus } from '../../authorizationStatus';
// import Footer from '../footer';

type LayoutProps = {
  favoritesVolume: number;
}

export default function Layout({favoritesVolume}: LayoutProps): JSX.Element {
  const {pathname} = useLocation();
  const {pageClassName, linkClassName, renderUser} = getLayoutState(pathname as AppRoute); /* , renderFooter */
  const authorizationStatus = getAuthorizationStatus();

  return (
    <div className={`page${pageClassName}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className={`header__logo-link${linkClassName}`} to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
              </Link>
            </div>
            {
              renderUser ? (
                <nav className="header__nav">
                  <ul className="header__nav-list">
                    <li className="header__nav-item user">
                      <a className="header__nav-link header__nav-link--profile" href="#">
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        {authorizationStatus === AuthorizationStatus.Auth ? (
                          <>
                            <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                            <span className="header__favorite-count">{favoritesVolume}</span>
                          </>
                        ) : <span className="header__login">Sign in</span>}
                      </a>
                    </li>
                    {authorizationStatus === AuthorizationStatus.Auth ? (
                      <li className="header__nav-item">
                        <a className="header__nav-link" href="#">
                          <span className="header__signout">Sign out</span>
                        </a>
                      </li>
                    ) : null}
                  </ul>
                </nav>
              ) : null
            }
          </div>
        </div>
      </header>
      <Outlet />
      {/* {renderFooter ? (
        <Footer />
      ) : null} */}
    </div>
  );
}
