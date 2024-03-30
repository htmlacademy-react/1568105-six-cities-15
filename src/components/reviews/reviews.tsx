import ReviewsList from '../reviews-list';
import ReviewForm from '../review-form';
import { AuthStatus } from '../../const';
import { getUserAuth } from '../../get-user-auth';

import { TReview } from '../../types/types';

type ReviewsProps = {
  reviews: TReview[];
}

export default function Reviews({ reviews }: ReviewsProps): JSX.Element {
  const userAuth = getUserAuth();

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{ReviewsList.length}</span>
      </h2>
      <ReviewsList reviews={reviews}/>
      {userAuth === AuthStatus.Auth && <ReviewForm />}
      {userAuth === AuthStatus.NoAuth && <p className="reviews__title offer__price-text">Only authorized users can make a review.</p> }
    </section>
  );
}
