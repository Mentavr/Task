import React from 'react';
import { Provider as ProviderReduce } from 'react-redux';
import AuthProvider from '../commons/AuthProvider.js';
import Login from '../pages/FormAutorization.js';
import ShopPage from '../pages/Shop.js';
import routesPages from '../routes/routesPages.js';
import MainPage from '../pages/Main.js';
import PrivateRoute from '../commons/PrivateRoute.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from '../slice/index.js';

const App = () => {
  const { autorithationRoute, mainPageRoute, marketPageRoute } = routesPages;

  return (
    <ProviderReduce store={store}>
      <AuthProvider>
        <Router>
          <Routes>
          <Route path={autorithationRoute} element={<Login />} />
            <Route path={mainPageRoute} element={<PrivateRoute />}>
                  <Route index element={<MainPage />} />
              <Route path={marketPageRoute} element={<ShopPage />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </ProviderReduce>
  );
};

export default App;
