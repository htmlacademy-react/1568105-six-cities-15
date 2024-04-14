import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Navigate } from 'react-router-dom';
import { AppRoute, Status } from '../../const';
import Loader from '../../components/loader';
import { getPercents } from '../../utils';
import OfferGallery from '../../components/offer-gallery';
import OfferFeatures from '../../components/offer-features';
import OfferPrice from '../../components/offer-price';
import OfferGoods from '../../components/offer-goods';
import OfferHost from '../../components/offer-host';
import Reviews from '../../components/reviews';
import OfferDescription from '../../components/offer-description';
import Map from '../../components/map';
import Card from '../../components/card';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getReviewsData } from '../../store/review-process/review-process.selectors';
import { getNearByOffers, getFullOffer } from '../../store/offers-process/offers-process.selectors';
import {
  fetchOfferByIdAction,
  fetchOfferReviewsAction,
  fetchNearByOffersAction
} from '../../store/api-action';
import {
  getFullOfferLoadingStatus,
  getNearByOffersLoadingStatus,

} from '../../store/offers-process/offers-process.selectors';
import { getReviewsLoadingStatus } from '../../store/review-process/review-process.selectors';
import FavoriteButton from '../../components/favorite-button/favorite-button';

export default function OfferPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const isLoadingFullOffer = useAppSelector(getFullOfferLoadingStatus);
  const isLoadingNearByOffers = useAppSelector(getNearByOffersLoadingStatus);
  const isReviewLoading = useAppSelector(getReviewsLoadingStatus);

  const reviews = useAppSelector(getReviewsData);
  const nearOffers = useAppSelector(getNearByOffers);
  const currentOffer = useAppSelector(getFullOffer);

  useEffect(() => {
    if (!id) {
      return;
    }
    dispatch(fetchOfferByIdAction(id));
    dispatch(fetchOfferReviewsAction(id));
    dispatch(fetchNearByOffersAction(id));

  }, [dispatch, id]);

  if ((isLoadingFullOffer === Status.Idle || isLoadingFullOffer === Status.Loading) ||
    (isReviewLoading === Status.Idle || isReviewLoading === Status.Loading) ||
    (isLoadingNearByOffers === Status.Idle || isLoadingNearByOffers === Status.Loading)) {
    return <Loader />;
  }

  if (!currentOffer) {
    return <Navigate to={AppRoute.PageNotFound} replace />;
  }

  const {
    title, description, type, price, images, goods, host,
    isPremium, isFavorite, rating, bedrooms, maxAdults
  } = currentOffer;
  const dataForMap = [...nearOffers.slice(0, 3), currentOffer];
  return (
    <div className="page">
      <Helmet>
        <title>Offer page</title>
      </Helmet>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <OfferGallery images={images} />
          </div>

          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium &&
                <div className="offer__mark">
                  <span>Premium</span>
                </div>}

              <div className="offer__name-wrapper">
                <h1 className="offer__name">{title}</h1>
                <FavoriteButton id={id} className='offer' iconWidth='31' iconHeight='33' isFavorite={isFavorite} />
              </div>

              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: getPercents(rating) }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>

              <OfferFeatures type={type} bedrooms={bedrooms} maxAdults={maxAdults} />
              <OfferPrice price={price} />
              <OfferGoods goods={goods} />

              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <OfferHost avatarUrl={host.avatarUrl} name={host.name} isPro={host.isPro} />
                <OfferDescription description={description} />
              </div>
              <Reviews reviews={reviews} id={id} />
            </div>
          </div>
          {nearOffers.length && <Map className="offer" selectedPointId={currentOffer.id} previewOffers={dataForMap} />}
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearOffers.length && nearOffers.slice(0, 3).map((offer) =>
                <Card key={`${offer.id}1`} previewOffer={offer} setSelectedPointId={() => { }} className='near-places__card' />
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
