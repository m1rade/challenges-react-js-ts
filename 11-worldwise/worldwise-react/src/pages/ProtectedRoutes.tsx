import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

export function ProtectedRoutes({ children }: { children: React.ReactNode }) {
  const { isAuth } = useAuthContext();

  if (!isAuth) return <Navigate to="/" />;

  return children;
}
