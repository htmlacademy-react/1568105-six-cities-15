import ReviewsItem from '../reviews-item';
import { Review } from '../../types/types';

type ReviewsListProps = {
  reviews: Review[];
}

export default function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {/* <ReviewsItem key={reviews.id} reviews={reviews}/> */}
      {reviews.map((review) => (
        <ReviewsItem key={review.id} review={review} />
      ))}
    </ul>
  );
}
