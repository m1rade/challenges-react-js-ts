import React, { createContext, useReducer } from 'react';
import { useCustomContext } from '../hooks/useCustomContext';
import { authReducer } from './authReducer';

const AuthContext = createContext<AuthContextType | null>(null);

export const initState = {
  user: {} as AuthUserType,
  isAuth: false,
};

const FAKE_USER = {
  name: 'Jack',
  email: 'jack@example.com',
  password: 'qwerty',
  avatar: 'https://i.pravatar.cc/100?u=zz',
};

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [{ user, isAuth }, dispatch] = useReducer(authReducer, initState);

  /* FAKE AUTH API */
  const login = (email: string, password: string) =>
    email === FAKE_USER.email &&
    password === FAKE_USER.password &&
    dispatch({ type: 'auth/login', payload: FAKE_USER });

  const logout = () => dispatch({ type: 'auth/logout' });
  /* -------- */

  return <AuthContext.Provider value={{ user, isAuth, login, logout }}>{children}</AuthContext.Provider>;
}

const useAuthContext = () => useCustomContext(AuthContext);

export { AuthProvider, useAuthContext };

export type AuthUserType = typeof FAKE_USER;
export type InitStateType = typeof initState;
interface AuthContextType extends InitStateType {
  login: (email: string, password: string) => void;
  logout: () => void;
}
