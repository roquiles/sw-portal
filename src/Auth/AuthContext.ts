import { createContext } from "react";
import { UserType } from "../types/types";

interface AuthContextData {
  user: UserType | null;
  signIn: (user: string, password: string) => boolean;
  signOut: () => void;
  isLogged: boolean;
}

const AuthContext = createContext({} as AuthContextData);

export default AuthContext;
