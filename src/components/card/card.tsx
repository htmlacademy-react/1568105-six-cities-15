import { PreviewOffer } from '../../types/types';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { getPercents } from '../../utils';
import { doFirstCap } from '../../utils';

type CardProps = {
  previewOffer: PreviewOffer;
  setSelectedPointId?: (id: string) => void;
}

export default function Card({ previewOffer, setSelectedPointId }: CardProps) {

  const {id, title, type, price, previewImage, isPremium, isFavorite, rating } = previewOffer;

  return (
    <article
      className="cities__card place-card"
      onMouseEnter={setSelectedPointId && (() => setSelectedPointId(id))}
      onMouseLeave={() => setSelectedPointId('')}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.OfferPage.replace(':id', id)}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <button className={`place-card__bookmark-button button ${isFavorite && 'place-card__bookmark-button--active'}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>

        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getPercents(rating)}}></span>
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
