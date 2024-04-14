import { TPreviewOffer } from '../../types/types';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { getPercents } from '../../utils';
import { doFirstCap } from '../../utils';

import FavoriteButton from '../favorite-button/favorite-button';

type CardProps = {
  previewOffer: TPreviewOffer;
  isFavoritePage?: boolean;
  setSelectedPointId?: (id: string) => void;
  className?: string;
}

export default function Card({ previewOffer, setSelectedPointId, isFavoritePage = false, className }: CardProps) {
  const { id, title, type, price, previewImage, isPremium, isFavorite, rating } = previewOffer;
  return (
    <article
      className={`${className} place-card`}
      onMouseEnter={setSelectedPointId && (() => setSelectedPointId(id))}
      onMouseLeave={setSelectedPointId && (() => setSelectedPointId(''))}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}

      <div className={`
        ${isFavoritePage ? 'favorites__image-wrapper' : 'cities__image-wrapper '}
        place-card__image-wrapper`}
      >
        <Link to={AppRoute.OfferPage.replace(':id', id)}>
          <img
            className="place-card__image"
            src={previewImage}
            width={isFavoritePage ? 150 : 260}
            height={isFavoritePage ? 110 : 200}
            alt="Place image"
          />
        </Link>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton id={id} className='place-card' iconWidth='18' iconHeight='19' isFavorite={isFavorite}/>
        </div>

        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: getPercents(rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <h2 className="place-card__name">
          <Link to={AppRoute.OfferPage.replace(':id', id)}>{title}</Link>
        </h2>
        <p className="place-card__type">{doFirstCap(type)}</p>
      </div>
    </article>
  );
}
