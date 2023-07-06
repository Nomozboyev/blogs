import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthUserContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const AuthUser = () => {
  return useContext(AuthContext);
};
