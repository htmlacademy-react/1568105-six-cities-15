import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AppRoute } from './const';

//* getLayoutState() *
export const getLayoutState = (pathName: AppRoute) => {
  let rootClassName = '';
  let linkClassName = '';
  let renderUser = true;
  // let renderFooter = false;

  if (pathName === AppRoute.Root) {
    rootClassName = ' page--gray page--main';
    linkClassName = ' header__logo-link--active';
  } else if (pathName === AppRoute.Login) {
    rootClassName = ' page--gray page--login';
    renderUser = false;
  } /* else if (pathName === AppRoute.FavoritesPage) {
    renderFooter = true;
  }*/

  return { rootClassName, linkClassName, renderUser }; /* , renderFooter */
};

//* ScrollToTop() *
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

//* doFirstCap *
export const doFirstCap = (str: string) => str[0].toUpperCase() + str.slice(1);

//* getPercents *
export const getPercents = (item: number) => `${String(Math.round(item) * 20)}%`;
