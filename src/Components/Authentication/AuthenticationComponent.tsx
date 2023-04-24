import React, { useEffect, useState, useContext } from "react";

import Login from "./Login";
import Signup from "./SignUp";
import ForgotPassword from "./ForgotPassword";

import { AuthenticationWrapper } from "./StyledAuthentication";

import AuthenticationContext from "../../Context/AuthenticationContext";

const AuthenticationComponent = () => {
  const { screen } = useContext(AuthenticationContext);
  const [screenState, setScreenState] = useState<string | undefined>("Login");

  useEffect(() => {
    setScreenState(screen);
  }, [screen]);

  return (
    <AuthenticationWrapper>
      {screenState === "Login" ? (
        <Login />
      ) : screenState === "SignUp" ? (
        <Signup />
      ) : (
        screenState === "ForgotPassword" && <ForgotPassword />
      )}
    </AuthenticationWrapper>
  );
};

export default AuthenticationComponent;
