import PageMain from '../../pages/page-main';
// import Favorites from '../../pages/favorites';
// import FavoritesEmpty from '../../pages/favorites-empty';
// import Login from '../../pages/login';
// import Offer from '../../pages/offer';
// import OfferNotLogged from '../../pages/offer-not-logged';
// import PageMainEmpty from '../../pages/page-main-empty';

type AppProps = {
  favoritesVolume: number;
  stayPlaces: number;
}

export default function App({favoritesVolume, stayPlaces}: AppProps): JSX.Element {
  return (
    // <PageMainEmpty
    // <Favorites
    // <FavoritesEmpty
    // <Login
    // <Offer
    // <OfferNotLogged
    <PageMain
      favoritesVolume={favoritesVolume}
      stayPlaces={stayPlaces}
    />
  );
}
