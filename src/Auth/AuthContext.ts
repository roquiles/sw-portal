import { createContext } from "react";

interface AuthContextData {
  signIn: (user: string, password: string) => boolean;
  signOut: () => void;
  isLogged: boolean;
}

const AuthContext = createContext({} as AuthContextData);

export default AuthContext;
