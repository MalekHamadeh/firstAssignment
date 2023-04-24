import React, { useRef, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { StyledInput } from "../Shared/StyledShared";
import {
  ContentWrapper,
  ContentGrid,
  TitleItem,
  ContentTitle,
  ContentAlert,
  ContentInputGrid,
  ContentInputItem,
  ContentButtonItem,
  ContentLinksItem,
  ContentButtonGrid,
  ContainedBtn,
  TextBtn,
} from "./StyledAuthentication";

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
    <ContentWrapper>
      <ContentGrid>
        <TitleItem>
          <ContentTitle>Login</ContentTitle>
        </TitleItem>
        <ContentAlert>{alertController()}</ContentAlert>
        <ContentInputGrid>
          <ContentInputItem>
            <StyledInput
              placeholder='Email'
              inputRef={emailRef}
              error={isError}
              helperText={isError ? "Please enter a valid email" : ""}
            />
            <StyledInput
              placeholder='Password'
              inputRef={passwordRef}
              error={isError}
              helperText={isError ? "Please enter a valid password" : ""}
            />
          </ContentInputItem>
        </ContentInputGrid>
        <ContentButtonGrid>
          <ContentButtonItem>
            <ContainedBtn variant='contained' onClick={canLogin}>
              Login
            </ContainedBtn>
          </ContentButtonItem>
          <ContentLinksItem>
            <TextBtn onClick={goToForgotPassword}>I forgot my password</TextBtn>
            <TextBtn onClick={goToSignUp}>I don’t have an account</TextBtn>
          </ContentLinksItem>
        </ContentButtonGrid>
      </ContentGrid>
    </ContentWrapper>
  );
};

export default Login;
