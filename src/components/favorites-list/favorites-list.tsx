import { MouseEvent } from 'react';
import {Link} from 'react-router-dom';
import { TPreviewOffer } from '../../types/types';
import Card from '../card';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { SortType, AppRoute, CITY, SORT_TYPE, DEFAULT_SORTING } from '../../const';
type FavoritesListProps = {
  favoritesOffers: TPreviewOffer[];
}

const getOffersByCity = (offers: TPreviewOffer[]) => offers.reduce<{[key: string]: TPreviewOffer[]}>((acc, item) => {
  const cityName: string = item.city.name;

  if (!(cityName in acc)) {
    acc[cityName] = [];
  }
  acc[cityName].push(item);
  return acc;
}, {});

export default function FavoritesList({favoritesOffers}:FavoritesListProps): JSX.Element {

  const offersByCities = getOffersByCity(favoritesOffers);
  return (
    <ul className="favorites__list">
      {Object.keys(offersByCities).map((city) => (
        <li className="favorites__locations-items" key={city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={`${AppRoute.Root}?${CITY}=${city}&${SORT_TYPE}=${DEFAULT_SORTING}`} >
                <span>{city}</span>
              </Link>
            </div>
          </div>
          <div className="favorites__places">

            {offersByCities[city].map((offer) => (
              <Card key={offer.id} previewOffer={offer} isFavoritePage className='favorites__card' />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
