import { PreviewOffer } from '../../types/types';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { getPercents } from '../../utils';
import { doFirstCap } from '../../utils';

type NearPlacesCardProps = {
  previewOffer: PreviewOffer;
}

export default function NearPlacesCard({previewOffer}: NearPlacesCardProps) {

  const {id, title, type, price, previewImage, isPremium, isFavorite, rating } = previewOffer;

  return (
    <article className='near-places__card place-card'>
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}

      <div className='near-places__image-wrapper place-card__image-wrapper'>
        <Link to={AppRoute.OfferPage.replace(':id', id)}>
          <img
            className='place-card__image' src={previewImage}
            width={260} height={200} alt='Place image'
          />
        </Link>
      </div>

      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>€{price}</b>
            <span className='place-card__price-text'>/&nbsp;night</span>
          </div>

          <button className={`place-card__bookmark-button button ${isFavorite && 'place-card__bookmark-button--active'}`} type='button'>
            <svg className='place-card__bookmark-icon' width={18} height={19}>
              <use xlinkHref='#icon-bookmark' />
            </svg>
            <span className='visually-hidden'>In bookmarks</span>
          </button>
        </div>

        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{width: getPercents(rating)}}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to={AppRoute.OfferPage.replace(':id', id)}>{title}</Link>
        </h2>
        <p className='place-card__type'>{doFirstCap(type)}</p>
      </div>
    </article>
  );
}
