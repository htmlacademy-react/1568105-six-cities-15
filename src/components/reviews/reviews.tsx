import ReviewsList from '../reviews-list';
import ReviewsForm from '../reviews-form';
import { AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../authorizationStatus';

import { Review } from '../../types/types';

type ReviewsProps = {
  reviews: Review[];
}

export default function Reviews({ reviews }: ReviewsProps): JSX.Element {

  const authorizationStatus = getAuthorizationStatus();
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">1</span>
      </h2>
      <ReviewsList reviews={reviews}/>
      {authorizationStatus === AuthorizationStatus.Auth && <ReviewsForm />}
    </section>
  );
}
