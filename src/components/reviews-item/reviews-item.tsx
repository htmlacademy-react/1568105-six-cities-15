import { TReview } from '../../types/types';
import { getPercents } from '../../utils';

type ReviewsItemProps = {
  review: TReview;
}

export default function ReviewsItem({ review }: ReviewsItemProps): JSX.Element {

  const { user, comment, rating, date } = review; // id, name, avatarUrl, isPro /// date, – доделать
  const reviewDate = new Date(date);
  const month = reviewDate.toLocaleString('en-EN', { month: 'long' });

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl}
            width={54} height={54} alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: getPercents(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <p className="reviews__text">{comment}</p>

        <time className="reviews__time" dateTime={date}>{month} {reviewDate.getFullYear()}</time>
      </div>
    </li>
  );
}
