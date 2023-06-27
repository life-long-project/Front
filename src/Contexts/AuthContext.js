import { useEffect } from "react";
import { createContext, useState } from "react";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      let decoded = jwt_decode(localStorage.getItem("token"));
      setUser(decoded.user);
    }
  }, [setUser]);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
