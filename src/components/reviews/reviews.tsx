import { useMemo } from 'react'
import ReviewsList from '../reviews-list';
import ReviewForm from '../review-form';
import { AuthStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { MAX_REVIEWS_COUNT, DEFAULT_ZERO } from '../../const';

import { TReview, TFullOffer } from '../../types/types';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';

type ReviewsProps = {
  reviews: TReview[];
  id: TFullOffer['id'];
}

export default function Reviews({ reviews, id }: ReviewsProps): JSX.Element {
  const userAuth = useAppSelector(getAuthorizationStatus);
  const sortingReviews = useMemo(() => (
    reviews
      .slice()
      .sort(
        (reviewFirst, reviewSecond) => new Date(reviewFirst.date).getTime() - new Date(reviewSecond.date).getTime()
      )
      .reverse()
      .slice(DEFAULT_ZERO, MAX_REVIEWS_COUNT)
  ), [reviews]);
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ReviewsList reviews={sortingReviews} />
      {userAuth === AuthStatus.Auth && <ReviewForm id={id} />}
      {userAuth === AuthStatus.NoAuth && <p className="reviews__title offer__price-text">Only authorized users can make a review.</p>}
    </section>
  );
}
