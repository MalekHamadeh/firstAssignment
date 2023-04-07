import { FC, useState } from "react";
import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/SignUp";

import {
  Outline,
  StyledPaper,
  Header,
  HeaderWrapper,
  StyledLogo,
} from "../Components/Authentication/StyledAuthentication";
import { SignUpProvider } from "../Context/SignUpContext";
import { PasswordProvider } from "../Context/PasswordContext";
import ForgotPassword from "../Components/Authentication/ForgotPassword";
import logo from "../Images/Logo/roundRushLogo.svg";

const Authentication = () => {
  const [screen, setScreen] = useState<String>("Login");
  const [successfulPass, setSuccessfulPass] = useState<Boolean>(false);
  const [successfulSignUp, setSuccessfulSignUp] = useState<Boolean>(false);

  const handleScreens = (string: String) => {
    setScreen(string);
  };

  const handleSucceed = (boolean: Boolean) => {
    setSuccessfulPass(boolean);
  };
  const handleSuccessfulSignUp = (boolean: Boolean) => {
    setSuccessfulSignUp(boolean);
  };

  return (
    <Outline>
      <HeaderWrapper>
        <StyledLogo src={logo} />
        <Header>The Optimized Workflow </Header>
        <Header>Out Of The Box</Header>
      </HeaderWrapper>
      <StyledPaper elevation={3}>
        {screen === "Login" ? (
          <Login
            onClick={handleScreens}
            successfulPass={successfulPass}
            successfulSignUp={successfulSignUp}
          />
        ) : screen === "SignUp" ? (
          <SignUpProvider>
            <Signup
              onClick={handleScreens}
              successfulSignUp={handleSuccessfulSignUp}
            />
          </SignUpProvider>
        ) : (
          <PasswordProvider>
            <ForgotPassword
              onClick={handleScreens}
              didSucceed={handleSucceed}
            />
          </PasswordProvider>
        )}
      </StyledPaper>
    </Outline>
  );
};

export default Authentication;
