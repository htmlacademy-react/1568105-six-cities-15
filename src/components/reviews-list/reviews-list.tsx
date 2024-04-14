
import ReviewsItem from '../reviews-item';
import { TReview } from '../../types/types';


type ReviewsListProps = {
  reviews: TReview[];
}

export default function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {


  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewsItem key={review.id} review={review} />
      ))}
    </ul>
  );
}
