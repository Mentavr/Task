import React, { useMemo, useState } from 'react';
import AuthContext from '../context/loggerContext';

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(null);
  const logIn = (values) => {
    console.log(values)
        localStorage.setItem('userEmail', JSON.stringify(values.email));
        setLoggedIn(true);                 
  };
  const logOut = () => {
    localStorage.removeItem('userEmail');
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