import HeaderLeftLogo from '../../components/header-left-logo';
import UserLogged from '../../components/user-logged';

type HeaderProps = {
  favoritesVolume: number;
}

export default function Header({ favoritesVolume }: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <HeaderLeftLogo />
          </div>
          <nav className="header__nav">
            <UserLogged favoritesVolume={favoritesVolume} />
          </nav>
        </div>
      </div>
    </header>
  );
}
