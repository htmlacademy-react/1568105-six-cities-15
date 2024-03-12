import { AppRoute } from './const';

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
  } /* else if (pathName === AppRoute.Favorites) {
    renderFooter = true;
  }*/

  return { rootClassName, linkClassName, renderUser }; /* , renderFooter */
};

export const capitalize = (str: string) => str[0].toUpperCase() + str.slice(1);
