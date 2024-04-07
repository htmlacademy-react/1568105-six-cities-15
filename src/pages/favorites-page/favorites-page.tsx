import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import FavoritesList from '../../components/favorites-list';
import Footer from '../../components/footer';
import FavoritesEmpty from './favorites-empty';

export default function FavoritesPage() {
  const favoritesOffers = useAppSelector((state) => state.favorites);
  return (
    <div className="page">
      <Helmet>
        <title>6 cities: {!favoritesOffers.length ? 'favorites empty' : 'favorites'}</title>
      </Helmet>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
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
