import { AuthStatus, NameSpace } from '../../const';
import { TState, TUser } from '../../types/types';

export const getAuthorizationStatus = (state: TState): AuthStatus => state[NameSpace.User].authorizationStatus;

export const getUserData = (state: TState): TUser | null => state[NameSpace.User].userData;
