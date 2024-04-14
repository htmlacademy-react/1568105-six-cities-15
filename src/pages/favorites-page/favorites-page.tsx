import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import FavoritesList from '../../components/favorites-list';
import Footer from '../../components/footer';
import FavoritesEmpty from './favorites-empty';
import { getFavoritsData } from '../../store/favorite-process/favorite-process.selectors';

export default function FavoritesPage() {
  const favoritesOffers = useAppSelector(getFavoritsData);
  return (
    <div className="page">
      <Helmet>
        <title>6 cities: {!favoritesOffers.length ? 'favorites empty' : 'favorites'}</title>
      </Helmet>
      <main className={`page__main page__main--favorites ${!favoritesOffers.length && 'page__main--favorites-empty'}`}>
        <div className="page__favorites-container container">
          <section className={`favorites ${!favoritesOffers.length && 'favorites--empty'}`}>
          {favoritesOffers.length && <h1 className="favorites__title">Saved listing</h1>}
            {favoritesOffers.length
              ? <FavoritesList favoritesOffers={favoritesOffers} />
              : <FavoritesEmpty />}

          </section>
        </div>
      </main>

      <Footer />
    </div>

  );
}
