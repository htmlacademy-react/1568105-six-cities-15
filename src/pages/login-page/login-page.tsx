import { Helmet } from 'react-helmet-async';
import { useRef } from 'react';
import {validateLoginFields} from '../../utils';
import { useAppDispatch } from '../../hooks';
import {loginAction, fetchFavoriteAction} from '../../store/api-action';
// import { toast } from 'react-toastify';

export default function LoginPage() {
  const formLoginRef = useRef(null);
  const dispatch = useAppDispatch();

  const formSubitHandler = (evt) => {
    evt.preventDefault();

    if (formLoginRef.current !== null) {
      const formData = new FormData(formLoginRef.current);

      if (validateLoginFields(formData)) {
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        dispatch(loginAction({email, password})).then(() => dispatch(fetchFavoriteAction()));
      } else {
        // toast.warn('Пароль должен содержать минимум одну цифру и латинскую букву');
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
          <form className="login__form form" action="#" method="post" ref={formLoginRef} onSubmit={formSubitHandler}>
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
            <a className="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
