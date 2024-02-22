import Header from '../../components/header';
import FavoritesList from '../../components/favorites-list';
import Footer from '../../components/footer';

type HeaderProps = {
  favoritesVolume: number;
}

export default function Favorites({ favoritesVolume }: HeaderProps): JSX.Element {
  return (
    <div className="page">
      <Header favoritesVolume={favoritesVolume} />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>

            <FavoritesList />
          </section>
        </div>
      </main>

      <Footer />
    </div>

  );
}
