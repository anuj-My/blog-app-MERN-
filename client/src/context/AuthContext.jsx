import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const clientCookie = document?.cookie
      ?.split("; ")
      ?.find((row) => row.startsWith("clientCookie="));

    if (clientCookie) {
      // Extract and set user data in your application state

      setAuth(clientCookie?.split("=")[1]);
    }
  }, []);
  const value = { auth, setAuth };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
