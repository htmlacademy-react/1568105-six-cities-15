import { useAppSelector } from '../../hooks';
import { TPreviewOffer } from '../../types/types';
import Card from '../card';

const getOffersByCity = (offers: TPreviewOffer[]) => offers.reduce<{[key: string]: TPreviewOffer[]}>((acc, item) => {
  const cityName: string = item.city.name;

  if (!(cityName in acc)) {
    acc[cityName] = [];
  }
  acc[cityName].push(item);
  return acc;
}, {});

export default function FavoritesList() {
  const favoritesOffers = useAppSelector((state) => state.favorites);

  const offersByCities = getOffersByCity(favoritesOffers);
  // console.log(offersByCities);
  return (
    <ul className="favorites__list">
      {Object.keys(offersByCities).map((city) => (
        <li className="favorites__locations-items" key={city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
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
