import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import PageNotFound from '../page-not-found';
import { FullOffer, PreviewOffer, Review } from '../../types/types';
import { getPercents } from '../../utils';
import { doFirstCap } from '../../utils';
import Reviews from '../../components/reviews';
import NearPlacesCard from '../../components/near-places-card';

type OfferPageProps = {
  previewOffers: PreviewOffer[];
  fullOffers: FullOffer[];
  reviews: Review[];
}

export default function OfferPage({fullOffers, previewOffers, reviews}: OfferPageProps): JSX.Element {

  const { id: offerId } = useParams();
  const currentOffer = fullOffers.find((offer) => offer.id === offerId);

  if (!currentOffer) {
    return <PageNotFound />;
  }

  const { title, description, type, price, images, goods, host, isPremium, isFavorite, rating, bedrooms, maxAdults } = currentOffer;

  return (
    <div className="page">
      <Helmet>
        <title>Offer page</title>
      </Helmet>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">

              {images.map((image: string) => (
                <div className="offer__image-wrapper" key={image}>
                  <img className="offer__image"
                    src={image}
                    alt="Photo studio"
                  />
                </div>
              ))}

            </div>
          </div>

          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium &&
                <div className="offer__mark">
                  <span>Premium</span>
                </div>}

              <div className="offer__name-wrapper">
                <h1 className="offer__name">{title}</h1>
                <button
                  className={`offer__bookmark-button button ${isFavorite && 'offer__bookmark-button--active'}`}
                  type="button"
                >
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>

              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: getPercents(rating)}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>

              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {type && doFirstCap(type)}
                </li>

                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms && `${bedrooms} Bedrooms`}
                </li>

                <li className="offer__feature offer__feature--adults">
                  {`Max ${maxAdults && maxAdults} adults`}
                </li>
              </ul>

              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>

              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {goods.map((good) =>
                    <li className="offer__inside-item" key={good}>{good}</li>
                  )}
                </ul>
              </div>

              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src={host.avatarUrl}
                      width={74} height={74} alt="Host avatar"
                    />
                  </div>

                  <span className="offer__user-name">{host.name}</span>

                  {host.isPro &&
                    <span className="offer__user-status">Pro</span>}
                </div>

                <div className="offer__description">
                  {description &&
                    <p className="offer__text">{description}</p>}
                </div>
              </div>

              <Reviews reviews={reviews}/>
            </div>
          </div>
          <section className="offer__map map" />
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {previewOffers.slice(0, 3).map((offer) =>
                <NearPlacesCard key={offer.id} previewOffer={offer} />
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
