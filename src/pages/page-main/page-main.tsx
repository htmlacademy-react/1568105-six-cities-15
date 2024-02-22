import Header from '../../components/header';
import Tabs from '../../components/tabs';
import Cities from '../../components/cities';

type PageMainProps = {
  favoritesVolume: number;
  stayPlaces: number;
}

export default function PageMain({favoritesVolume, stayPlaces}: PageMainProps): JSX.Element {
  return (
    <div className="page page--gray page--main">

      <Header favoritesVolume={favoritesVolume} />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <Tabs />
        <Cities stayPlaces={stayPlaces} />
      </main>
    </div>
  );
}
