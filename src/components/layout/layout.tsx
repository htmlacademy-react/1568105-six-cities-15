import { Link } from 'react-router-dom';
import { Outlet, useLocation } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { getLayoutState } from '../../utils';
import { getUserAuth } from '../../get-user-auth';
import ScrollToTop from '../../utils';
import {useAppSelector} from '../../hooks';
// import Footer from '../footer';

export default function Layout() {
  const {pathname} = useLocation();
  const {rootClassName, linkClassName, renderUser} = getLayoutState(pathname as AppRoute); /* , renderFooter */
  const userAuth = getUserAuth();
  const favoritesOffers = useAppSelector((state) => state.favorites);

  return (
    <div className={`page${rootClassName}`}>
      <ScrollToTop />
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
                      <Link className="header__nav-link header__nav-link--profile" to="/favorites">
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        {userAuth === AuthStatus.Auth ? (
                          <>
                            <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                            <span className="header__favorite-count">{favoritesOffers.length}</span>
                          </>
                        ) : <span className="header__login">Sign in</span>}
                      </Link>
                    </li>
                    {userAuth === AuthStatus.Auth ? (
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
