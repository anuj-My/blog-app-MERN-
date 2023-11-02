import { useState, useEffect, createContext } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    const userEmail = document?.cookie
      ?.split("; ")
      ?.find((row) => row.startsWith("user_email="));

    const userName = document?.cookie
      ?.split("; ")
      ?.find((row) => row.startsWith("user_name="));

    console.log(userEmail, userName);

    if (userEmail && userName) {
      // Extract and set user data in your application state
      const name = userName?.split("=")[1];
      const email = userEmail?.split("=")[1];
      setUser({
        ...user,
        name,
        email,
      });

      console.log(userEmail, userName);
    }
  }, []);

  const value = { user, setUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
