import React from "react";
import { Provider as ProviderReduce } from 'react-redux';
import AuthProvider from '../commons/AuthProvider.js';
import Login from "./autorizationPage/FormAutorization"
import ShopPage from "./shopPage/Shop";
import routesPages from "../routes/routesPages.js";
import MainPage from "./mainPage/Main";
import PrivateRoute from "../commons/PrivateRoute.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from "../slice/index.js";
import ApiProvider from "../commons/ApiProvider.js";


const App = () => {
  const { atorithationRoute, mainPageRoute, marketPageRoute } = routesPages

  return (
    <ProviderReduce store={store}>
     <AuthProvider>
      <ApiProvider>
          <Router>
            <Routes>
              <Route path={mainPageRoute} element={<PrivateRoute />}>
                <Route index element={<MainPage />} />
                <Route path={marketPageRoute} element={<ShopPage />} />
              </Route>
              <Route path={atorithationRoute} element={<Login />} />
            </Routes>
          </Router>
      </ApiProvider>
      </AuthProvider>
    </ProviderReduce>
  );
};

export default App;
