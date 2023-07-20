import React, { createContext, useContext, useEffect, useState } from "react";
import getCookie from "../cookieHelper";

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userCookie = getCookie("user");
    if (userCookie) {
      const userProfil = JSON.parse(userCookie.slice(2));
      setUser(userProfil);
    }
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
