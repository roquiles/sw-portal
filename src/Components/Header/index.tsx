import { Container } from "./styles";
import logo from "../../assets/logo.svg";
import signOutIcon from "../../assets/signOutIcon.svg";
import { useContext } from "react";
import AuthContext from "../../Auth/AuthContext";

export default function Header() {
  const { signOut } = useContext(AuthContext);

  return (
    <Container>
      <img src={logo} alt="Star Wars" id="logo" />
      <button onClick={signOut}>
        <img src={signOutIcon} alt="sign out" />
      </button>
    </Container>
  );
}
