import React, { useMemo, useState } from 'react';
import AuthContext from '../context/loggerContext';

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(null);
  const logIn = (values) => {
        localStorage.setItem('userEmail', JSON.stringify(values.email));
        localStorage.setItem('userPassword', JSON.stringify(values.password));
        setLoggedIn(true);                
  };
  const logOut = () => {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPassword');
    setLoggedIn(null);
  };
  const value = useMemo(() => ({ loggedIn, logIn, logOut }), [loggedIn]);
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;