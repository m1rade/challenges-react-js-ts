import { AuthActionsType } from '../types/auth-actions';
import { InitStateType, initState } from './AuthContext';

export function authReducer(state: InitStateType = initState, action: AuthActionsType): InitStateType {
  switch (action.type) {
    case 'auth/login':
      return { ...state, user: action.payload, isAuth: true };
    case 'auth/logout':
      return initState;
    default:
      return state;
  }
}
