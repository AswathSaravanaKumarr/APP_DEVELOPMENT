import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLoginSuccess = ({ username, role }) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, username, handleLoginSuccess, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};
