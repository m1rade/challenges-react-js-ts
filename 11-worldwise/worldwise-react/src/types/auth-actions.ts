import { AuthUserType } from '../contexts/AuthContext';

const AUTH_LOGIN = 'auth/login' as const;
const AUTH_LOGOUT = 'auth/logout' as const;

interface LoginAction {
  type: typeof AUTH_LOGIN;
  payload: AuthUserType;
}

interface LogoutAction {
  type: typeof AUTH_LOGOUT;
}

export type AuthActionsType = LoginAction | LogoutAction;
