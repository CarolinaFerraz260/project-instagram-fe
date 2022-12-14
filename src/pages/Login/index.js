import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginDiv from "../../components/LoginDiv";
import Footer from "../../components/Footer";
import useAuth from "../../hooks/useAuth";
import LoginUser from "../../services/LoginUser";
import {
  ContainerLogin,
  Container,
  TitleLogin,
  ContainerFormLogin,
  InputLogin,
  ContainerButtonLogin,
  ButtonLogin,
  TextForgottenPassw,
  ContainerButtonRegister,
  TextRegister,
  ButtonRegister,
  LinkRegister,
} from "./styles";
import GetUser from "../../services/GetUser";
import Messages from "../../components/Messages";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { setAuth } = useAuth();

  async function handleClick() {
    const credentials = {
      email: email,
      password: password,
    };

    const token = await LoginUser(credentials);
    if (!token?.code) {
      const user = await GetUser(token);
      const id = user.data.id;
      setAuth({ email, token, id });
      setEmail("");
      setPassword("");
      setSuccessMessage("success!");
      setErrorMessage("");
      setTimeout(() => {
        navigate("/home");
      }, 1000);

    } else {
      setErrorMessage(token.message);
      setSuccessMessage("");
      setAuth({});
    }
  }

  return (
    <>
      <LoginDiv />
      {errorMessage ? <Messages mesgError={errorMessage} /> : null}
      {successMessage ? <Messages mesgSuccess={successMessage} /> : null}
      <ContainerLogin>

        <Container>

          <TitleLogin>Fake Instagram</TitleLogin>
          <ContainerFormLogin>
            <InputLogin
              placeholder="Email address"
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></InputLogin>
            <InputLogin
              placeholder="Password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></InputLogin>
          </ContainerFormLogin>
          <ContainerButtonLogin>
            <ButtonLogin onClick={handleClick}>Login</ButtonLogin>
          </ContainerButtonLogin>
          <TextForgottenPassw>Fogotten your password?</TextForgottenPassw>
          <ContainerButtonRegister>
            <TextRegister>Do not have an account?</TextRegister>
            <ButtonRegister>
              <LinkRegister title="Register" href="/register">
                Register
              </LinkRegister>
            </ButtonRegister>
          </ContainerButtonRegister>
        </Container>
      </ContainerLogin>
      <Footer />
    </>
  );
};

export default Login;
