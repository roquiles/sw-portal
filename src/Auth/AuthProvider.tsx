import { ReactNode, useState } from "react";
import { UserType } from "../types/types";
import AuthContext from "./AuthContext";

interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserType>(null);
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("SWLogin") === "true"
  );

  function signIn(username: string, password: string) {
    if (username === "admin" && password === "Admin123!") {
      setUser(username);
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
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, isLogged }}>
      {children}
    </AuthContext.Provider>
  );
}
