import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../Auth/AuthContext";
import { Container } from "./styles";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogin() {
    if (username && password) {
      const isLogged = signIn(username, password);
      if (isLogged) {
        navigate("/films");
      }
    }
  }

  return (
    <Container>
      <h1>Star Wars</h1>
      <h2>The Complete Portal</h2>

      <form action="#" onSubmit={handleLogin}>
        <h3>Login</h3>
        <label htmlFor="user">Username</label>
        <input
          type="text"
          name="user"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit" onClick={handleLogin}>
          Sign in
        </button>
      </form>
    </Container>
  );
}
