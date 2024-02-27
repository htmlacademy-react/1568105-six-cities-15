import Header from '../../components/header';
import Tabs from '../../components/tabs';
import CitiesEmpty from '../../components/cities-empty';

type PageMainEmptyProps = {
  favoritesVolume: number;
}

export default function PageMainEmpty({favoritesVolume}: PageMainEmptyProps): JSX.Element {
  return (
    <div className="page page--gray page--main">

      <Header favoritesVolume={favoritesVolume} />

      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>

        <Tabs />
        <CitiesEmpty />
      </main>
    </div>
  );
}
