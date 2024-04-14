import { Fragment, ChangeEvent, memo } from 'react';

type ReviewStarsProps = {
  isChecked: string;
  setStarsHandle: ({ target }: ChangeEvent<HTMLInputElement>) => void;
  isDisabled: boolean;
}

type RatingAttributes = {
  value: string;
  label: string;
}

const ratingAttributes: RatingAttributes[] = [
  { value: '5', label: 'perfect' },
  { value: '4', label: 'good' },
  { value: '3', label: 'not bad' },
  { value: '2', label: 'badly' },
  { value: '1', label: 'terribly' }
];

function ReviewStars({ isChecked, setStarsHandle, isDisabled}: ReviewStarsProps): JSX.Element {


  return (
    <>
      { ratingAttributes.map(({ value, label }) => (
        <Fragment key={value}>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            id={`${value}-stars`}
            type="radio"
            value={value}
            onChange={setStarsHandle}
            checked={isChecked === value}
            disabled = {isDisabled}
          />
          <label
            htmlFor={`${value}-stars`}
            className="reviews__rating-label form__rating-label"
            title={label}
          >
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
        </Fragment>
      ))}
    </>
  );
}

const MemoizedReviewStars = memo(ReviewStars);

export default MemoizedReviewStars;
