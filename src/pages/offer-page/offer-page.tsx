import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import PageNotFound from '../page-not-found';
import { FullOffer, PreviewOffer, Review } from '../../types/types';
import { getPercents } from '../../utils';
// import { doFirstCap } from '../../utils';
import OfferGallery from '../../components/offer-gallery';
import OfferFeatures from '../../components/offer-features';
import OfferPrice from '../../components/offer-price';
import OfferGoods from '../../components/offer-goods';
import OfferHost from '../../components/offer-host';
import Reviews from '../../components/reviews';
import OfferDescription from '../../components/offer-description';
import Map from '../../components/map';
import Card from '../../components/card';

type OfferPageProps = {
  previewOffers: PreviewOffer[];
  fullOffers: FullOffer[];
  reviews: Review[];
}

export default function OfferPage({fullOffers, previewOffers, reviews}: OfferPageProps): JSX.Element {

  const { id: offerId } = useParams();
  const currentOffer = fullOffers.find((offer) => offer.id === offerId);
  const nearOffers = previewOffers.filter((offer) => offer.id !== offerId).slice(0, 3);

  if (!offerId || !currentOffer) {
    return <PageNotFound />;
  }

  const {
    title, description, type, price, images, goods, host,
    isPremium, isFavorite, rating, bedrooms, maxAdults
  } = currentOffer;

  return (
    <div className="page">
      <Helmet>
        <title>Offer page</title>
      </Helmet>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <OfferGallery images={images}/>
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

              <OfferFeatures type={type} bedrooms={bedrooms} maxAdults={maxAdults} />
              <OfferPrice price={price} />
              <OfferGoods goods={goods} />

              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <OfferHost avatarUrl={host.avatarUrl} name={host.name} isPro={host.isPro}/>
                <OfferDescription description={description}/>
              </div>
              <Reviews reviews={reviews}/>
            </div>
          </div>
          <Map
            className="offer"selectedPointId={offerId}
            cityData={currentOffer.city} previewOffers={nearOffers.concat(currentOffer)}
          />
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearOffers.map((offer) =>
                <Card key={offer.id} previewOffer={offer} />
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
