import { TPreviewOffer } from '../../types/types';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AuthStatus, AppRoute } from '../../const';
import { useNavigate } from 'react-router-dom';
import {
  updateFavoriteStatusAction,
  fetchFavoriteAction
} from '../../store/api-action';

type FavoritButtonProps = {
  id: TPreviewOffer['id'];
  className: string;
  iconWidth: string;
  iconHeight: string;
  isFavorite: boolean;
}

export default function FavoriteButton({ id, className, iconWidth, iconHeight, isFavorite }: FavoritButtonProps) {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isAuthorized = authorizationStatus === AuthStatus.Auth;
  const [favoriteStatus, setFavoriteStatus] = useState(isFavorite);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const status = favoriteStatus ? 0 : 1;

  const handleFavoritButtonClick = () => {
    if (!isAuthorized) {
      return navigate(AppRoute.Login, {replace: true});
    }
    setFavoriteStatus((prevState) => !prevState);

    dispatch(updateFavoriteStatusAction({id, status}))
      .then(() => dispatch(fetchFavoriteAction()));
  };

  return (
    <button
      className={`${className}__bookmark-button button ${favoriteStatus && `${className}__bookmark-button--active`}`}
      type="button"
      onClick={handleFavoritButtonClick}
    >
      <svg
        className={`${className}__bookmark-icon`}
        width={iconWidth}
        height={iconHeight}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{favoriteStatus ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}
