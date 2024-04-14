import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type LogoLinkProps = {
  pathname: string;
}

export default function LogoLink({ pathname }: LogoLinkProps): JSX.Element {
  const isMain = pathname === AppRoute.Root;

  return (
    isMain ? (
      <a className={'header__logo-link'}>
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
      </a>
    ) : (
      <Link className={'header__logo-link'} to={AppRoute.Root}>
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
      </Link>
    )
  );
}
