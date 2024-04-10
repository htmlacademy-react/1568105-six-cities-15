import ReviewsList from '../reviews-list';
import ReviewForm from '../review-form';
import { AuthStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';

import { TReview, TFullOffer } from '../../types/types';

type ReviewsProps = {
  reviews: TReview[];
  id: TFullOffer['id'];
}

export default function Reviews({ reviews, id }: ReviewsProps): JSX.Element {
  const userAuth = useAppSelector((state) => state.authorizationStatus);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ReviewsList reviews={reviews}/>
      {userAuth === AuthStatus.Auth && <ReviewForm id={id} />}
      {userAuth === AuthStatus.NoAuth && <p className="reviews__title offer__price-text">Only authorized users can make a review.</p> }
    </section>
  );
}
