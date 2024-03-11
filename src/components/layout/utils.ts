import { AppRoute } from '../../const';

export const getLayoutState = (pathName: AppRoute) => {
  let pageClassName = '';
  let linkClassName = '';
  let renderUser = true;
  // let renderFooter = false;

  if (pathName === AppRoute.Root) {
    pageClassName = ' page--gray page--main';
    linkClassName = ' header__logo-link--active';
  } else if (pathName === AppRoute.Login) {
    pageClassName = ' page--gray page--login';
    renderUser = false;
  } /* else if (pathName === AppRoute.Favorites) {
    renderFooter = true;
  }*/

  return { pageClassName, linkClassName, renderUser }; /* , renderFooter */
};
