import React, { useRef, useContext, useEffect } from "react";
import {
  StyledButton,
  StyledInput,
  LoginGrid,
  LoginTitleItem,
  LoginButtonItem,
  LoginLinksItem,
  LoginInputGrid,
  LoginAlert,
  LoginInputItem,
  LoginWrapper,
  LinkButton,
  ScreenTitle,
} from "./StyledAuthentication";
import { useNavigate } from "react-router-dom";
import Alert from "../Shared/Alert";
import AuthenticationContext from "../../Context/AuthenticationContext";

const Login = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const Navigate = useNavigate();

  const {
    isSuccessfulSignUp,
    isSuccessfulPassword,
    isError,
    handleScreens,
    setIsSuccessfulPassword,
    setIsSuccessfulSignUp,
    setIsError,
  } = useContext(AuthenticationContext);

  const handleEmail = () => {
    const email = emailRef.current?.value;
  };
  const handlePassword = () => {
    const password = passwordRef.current?.value;
  };

  useEffect(() => {
    if (isSuccessfulPassword) {
      setTimeout(() => {
        setIsSuccessfulPassword(false);
      }, 3000);
    }

    if (isSuccessfulSignUp) {
      setTimeout(() => {
        setIsSuccessfulSignUp(false);
      }, 4000);
    }

    if (isError) {
      setTimeout(() => {
        setIsError(false);
      }, 4000);
    }
  }, [isSuccessfulPassword, isSuccessfulSignUp, isError]);

  const canLogin = () => {
    emailRef.current?.value !== "" && passwordRef.current?.value !== ""
      ? Navigate("/home")
      : setIsError(true);
  };

  const goToSignUp = () => {
    handleScreens("SignUp");
  };
  const goToForgotPassword = () => {
    handleScreens("ForgotPassword");
  };

  const alertController = () => {
    if (isError) {
      return (
        <Alert
          isError
          message='Please make sure you have the correct email or password'
        />
      );
    } else if (isSuccessfulPassword) {
      return <Alert isSuccess message='Password was reset Successfully' />;
    } else if (isSuccessfulSignUp) {
      return <Alert isSuccess message='Account created Successfully' />;
    }
  };

  return (
    <LoginWrapper>
      <LoginGrid>
        <LoginTitleItem>
          <ScreenTitle>Login</ScreenTitle>
        </LoginTitleItem>
        <LoginAlert>{alertController()}</LoginAlert>
        <LoginInputGrid>
          <LoginInputItem>
            <StyledInput placeholder='Email' inputRef={emailRef} />
          </LoginInputItem>
          <LoginInputItem>
            <StyledInput placeholder='Password' inputRef={passwordRef} />
          </LoginInputItem>
        </LoginInputGrid>
        <LoginButtonItem>
          <StyledButton variant='contained' onClick={canLogin}>
            Login
          </StyledButton>
        </LoginButtonItem>
        <LoginLinksItem>
          <LinkButton onClick={goToForgotPassword}>
            I forgot my password
          </LinkButton>
          <LinkButton onClick={goToSignUp}>I don’t have an account</LinkButton>
        </LoginLinksItem>
      </LoginGrid>
    </LoginWrapper>
  );
};

export default Login;
