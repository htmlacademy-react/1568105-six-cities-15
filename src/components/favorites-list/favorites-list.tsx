import { MouseEvent } from 'react';
import { TPreviewOffer } from '../../types/types';
import Card from '../card';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import {setActiveCity, setActiveSort} from '../../store/action';
import { SortType, AppRoute } from '../../const';
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
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const clickTabHandler = (evt: MouseEvent<HTMLAnchorElement>, activeCity: string) => {
    evt.preventDefault();
    dispatch(setActiveCity(activeCity));
    dispatch(setActiveSort(SortType.Popular));
    navigate(AppRoute.Root);

  };

  const offersByCities = getOffersByCity(favoritesOffers);
  return (
    <ul className="favorites__list">
      {Object.keys(offersByCities).map((city) => (
        <li className="favorites__locations-items" key={city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#" onClick={(evt) => clickTabHandler(evt, city)}>
                <span>{city}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">

            {offersByCities[city].map((offer) => (
              <Card key={offer.id} previewOffer={offer} isFavoritePage />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
