import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = function ({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const saved = localStorage.getItem("adminLoggedIn");
    return saved === "true";
  });

  function login(username, password) {
    if (username === "admin" && password === "1234") {
      setIsAuthenticated(true);
      localStorage.setItem("adminLoggedIn", "true");
      return true;
    }
    return false;
  }

  function logout() {
    setIsAuthenticated(false);
    localStorage.removeItem("adminLoggedIn");
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);