import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth.js';
import routes from '../routes/routesPages.js';

const PrivateRoute = () => {
  const { autorithationRoute } = routes;
  const autContext = useAuth();
  return autContext.loggedIn ? <Outlet /> : <Navigate to={autorithationRoute} />;
};

export default PrivateRoute;

