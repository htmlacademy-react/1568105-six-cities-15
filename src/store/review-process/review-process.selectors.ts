import { NameSpace, Status } from '../../const';
import { TState, TReview } from '../../types/types';

export const getReviewsData = (state: TState): TReview[] => state[NameSpace.Reviews].reviews;
export const getReviewsLoadingStatus = (state: TState): Status => state[NameSpace.Reviews].reviewsLoadingStatus;
export const getAddReviewsLoadingStatus = (state: TState): Status => state[NameSpace.Reviews].addReviewsLoadingStatus;
