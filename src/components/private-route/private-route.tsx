import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus} from '../../const';

type PrivateRouteProps = {
  authorisedUser: AuthStatus;
  isReverse?: boolean;
  children: JSX.Element;
}

export default function PrivateRoute({authorisedUser, isReverse, children}: PrivateRouteProps) {
  return (
    authorisedUser === (isReverse ? AuthStatus.NoAuth : AuthStatus.Auth) ?
      children :
      <Navigate to={isReverse ? AppRoute.Root : AppRoute.Login} replace/>
  );
}
