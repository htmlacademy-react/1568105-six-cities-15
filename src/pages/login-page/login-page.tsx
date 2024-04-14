import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useRef, useState, FormEvent } from 'react';
import { validateLoginFields, getRandomArrayItem } from '../../utils';
import { useAppDispatch } from '../../hooks';
import { CITIES, AppRoute, CITY, SORT_TYPE, DEFAULT_SORTING } from '../../const';
import { loginAction, fetchFavoriteAction } from '../../store/api-action';

export default function LoginPage() {
  const formLoginRef = useRef(null);
  const dispatch = useAppDispatch();
  const [randomCity,] = useState(getRandomArrayItem(CITIES));

  const formSubmitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (formLoginRef.current !== null) {
      const formData = new FormData(formLoginRef.current);

      if (validateLoginFields(formData)) {
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        dispatch(loginAction({email, password})).then(() => dispatch(fetchFavoriteAction()));
      }
    }
  };

  return (
    <main className="page__main page__main--login">
      <Helmet>
        <title>Login page</title>
      </Helmet>
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" method="post" ref={formLoginRef} onSubmit={formSubmitHandler}>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input className="login__input form__input" type="email" name="email" placeholder="Email" required />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input className="login__input form__input" type="password" name="password" placeholder="Password" required />
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to={`${AppRoute.Root}?${CITY}=${randomCity}&${SORT_TYPE}=${DEFAULT_SORTING}`}>
              <span>{randomCity}</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
