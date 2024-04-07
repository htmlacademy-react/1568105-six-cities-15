import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  AppRoute,
  SortType,
  EMAIL_REG_EXP,
  PASSWORD_REG_EXP,
  LoginFields
} from './const';
import { TPreviewOffer } from './types/types';

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

export const sortingType = {
  [SortType.Popular]: (offers: TPreviewOffer[]) => [...offers],
  [SortType.HightPrice]: (offers: TPreviewOffer[]) => offers.slice().sort((offerFirst, offerSecond) => offerSecond.price - offerFirst.price),
  [SortType.LowPrice]: (offers: TPreviewOffer[]) => offers.slice().sort((offerFirst, offerSecond) => offerFirst.price - offerSecond.price),
  [SortType.Rating]: (offers: TPreviewOffer[]) => offers.slice().sort((offerFirst, offerSecond) => offerSecond.rating - offerFirst.rating)
};

export const validateLoginFields = (authData: FormData) => {
  const isValidEmail = EMAIL_REG_EXP.test(authData.get(LoginFields.Email) as string);
  const isValidPassword = PASSWORD_REG_EXP.test(authData.get(LoginFields.Password) as string);

  return isValidEmail && isValidPassword;
};
