import { Container } from "./styles";

export default function Login() {
  return (
    <Container>
      <h1>Star Wars</h1>
      <h2>The Complete Portal</h2>

      <form action="#">
        <h3>Login</h3>
        <label htmlFor="user">Username</label>
        <input type="text" name="user" />
        <label htmlFor="password">Password</label>
        <input type="password" />
        <button type="submit">Sign in</button>
      </form>
    </Container>
  );
}
