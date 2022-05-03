import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "./AuthContext";

export default function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useContext(AuthContext);

  if (!auth.isLogged) {
    return <Navigate replace to="/login" />;
  }

  return children;
}
