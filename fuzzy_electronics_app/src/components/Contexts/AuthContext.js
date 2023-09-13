import { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';


const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user') || sessionStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const getUser = () => {
    return user;
  }


  return (
    <AuthContext.Provider value={{ user, setUser, getUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
