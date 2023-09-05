import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const storedUserData = localStorage.getItem('userData');
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    // Check for initial authentication status here
    const user = storedUserData ? JSON.parse(storedUserData) : null;
    if (user) {
      login(user);
    }
  }, []);

  const login = (userData) => {
    setAuthUser(userData);
  };

  const logout = () => {
    setAuthUser(null);
    localStorage.removeItem('userData');
  };

  return (
    <AuthContext.Provider value={{ authUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };