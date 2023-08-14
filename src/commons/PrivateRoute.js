import React from 'react';
import {
  Navigate,
  Outlet,
} from 'react-router-dom';
import useAuth from '../hooks/useAuth.js';
import routes from '../routes/routesPages.js'

const PrivateRoute = () => {
  const { atorithationRoute } = routes;
  const autContext = useAuth();
  return autContext.loggedIn ? <Outlet /> : <Navigate to={ atorithationRoute } />;
};

export default PrivateRoute;
