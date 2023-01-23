import React, { createContext, useContext } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
});

export { AuthContext };