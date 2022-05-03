import { ReactNode, useState } from "react";

import AuthContext from "./AuthContext";

interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("SWLogin") === "true"
  );

  function signIn(username: string, password: string) {
    if (username === "admin" && password === "Admin123!") {
      setIsLogged(true);

      localStorage.setItem("SWLogin", JSON.stringify(true));

      return true;
    } else {
      alert("Wrong user and/or password");
      return false;
    }
  }

  function signOut() {
    setIsLogged(false);

    localStorage.setItem("SWLogin", JSON.stringify(false));
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, isLogged }}>
      {children}
    </AuthContext.Provider>
  );
}
