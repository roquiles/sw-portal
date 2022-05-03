import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../Auth/AuthContext";

export default function Home() {
  const auth = useContext(AuthContext);

  if (!auth.isLogged) {
    return <Navigate replace to="/login" />;
  }

  return <Navigate replace to="/films" />;
}
