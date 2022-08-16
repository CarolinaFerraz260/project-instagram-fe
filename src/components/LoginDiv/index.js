import { Container, LinkHome, IconHome } from "./styles";
import Icon from "../../assets/icon.svg";

const LoginDiv = () => {
  return (
    <>
      <Container>
        <LinkHome title="Home Page" to="/">
          <IconHome alt="Icon" src={Icon} />
          Fakestagram
        </LinkHome>
      </Container>
    </>
  );
};

export default LoginDiv;
