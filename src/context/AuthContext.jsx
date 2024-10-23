import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { decodeToken } from "../utils/jwt";
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setUser(null);
      return;
    }
    const decodedToken = decodeToken(token);

    if (decodedToken.exp < Date.now() / 1000) {
      localStorage.removeItem("token");
      setUser(null);
      return;
    }

    if (!decodedToken) {
      localStorage.removeItem("token");
      setUser(null);
      return;
    }

    setToken(token);
    setUser(decodedToken);
  }, []);

  const login = async (email, password) => {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("token", data.token);
      setUser(decodeToken(data.token));
    }

    return response;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const getUser = () => {
    return user;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
