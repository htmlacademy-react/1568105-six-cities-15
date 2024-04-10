import { ChangeEvent, ReactEventHandler, useCallback, useState, useEffect, FormEvent, memo } from 'react';
import MemoizedReviewStars from '../review-stars/review-stars';
import { STARS_NAME, MIN_REVIEW_LENGHT, MAX_REVIEW_LENGHT } from '../../const';
import { TFullOffer } from '../../types/types';
import { useAppDispatch } from '../../hooks';
import { addReviewAction, fetchOfferReviewsAction } from '../../store/api-action';

// const form = document.querySelector('.reviews__form');

type ChangeHandler = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>

type ReviewsFormProps = {
  id: TFullOffer['id'];
}

function ReviewForm({ id }: ReviewsFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [review, setReview] = useState('');
  const [isChecked, setIsChecked] = useState('0');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const changeReviewHandler: ChangeHandler = useCallback(({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(target.value);
  }, []);

  const changeStarHandle = useCallback(({ target }: ChangeEvent<HTMLInputElement>) => {
    if (target.name === STARS_NAME) {
      setIsChecked(target.value);
    }
  }, []);

  useEffect(() => {
    setIsSubmitDisabled(isChecked === '0' || review.length < MIN_REVIEW_LENGHT || review.length > MAX_REVIEW_LENGHT);
  }, [isChecked, review.length]);

  const formSubmitHandler = (evt: FormEvent) => {
    evt.preventDefault();
    if (review && isChecked) {
      dispatch(addReviewAction({
        id: id,
        comment: review,
        rating: Number(isChecked)
      })).then(() => {
        dispatch(fetchOfferReviewsAction(id));
        setIsChecked('0');
        setReview('');
      });
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={formSubmitHandler}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <MemoizedReviewStars isChecked={isChecked} setStarsHandle={changeStarHandle} />
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={changeReviewHandler}
        value={review}
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>

        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitDisabled}
        >Submit
        </button>
      </div>
    </form>
  );
}

const MemoizedReviewForm = memo(ReviewForm);

export default MemoizedReviewForm;
