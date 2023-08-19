import React, { useMemo, useState } from 'react';
import AuthContext from '../context/loggerContext';
import { useDispatch } from 'react-redux';
import { setConnectEvents } from '../slice/eventStoreSlice';

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch()
  const [loggedIn, setLoggedIn] = useState(null);
  const logIn = (values) => {
        localStorage.setItem('userEmail', JSON.stringify(values.email));
        dispatch(setConnectEvents('open'))
        setLoggedIn(true);                
  };
  const logOut = () => {
    localStorage.removeItem('userEmail');
    dispatch(setConnectEvents('close'));
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