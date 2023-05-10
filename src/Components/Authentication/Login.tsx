import React, { useRef, useContext, useEffect, useState } from "react";
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

import UserContext from "../../Context/AuthenticationContext/UserContext";

const Login = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [shouldShow, setShouldShow] = useState(false);
  const [canContinue, setCanContinue] = useState(false);
  const Navigate = useNavigate();

  const {
    canLogin,
    isSuccessfulSignUp,
    isSuccessfulPassword,
    isError,
    handleScreens,
    setIsSuccessfulPassword,
    setIsSuccessfulSignUp,
    setIsError,
    LoginUser,
  } = useContext(UserContext);

  useEffect(() => {
    if (isSuccessfulPassword) {
      setShouldShow(true);
      setTimeout(() => {
        setIsSuccessfulPassword(false);
        setShouldShow(false);
      }, 4000);
    }

    if (isSuccessfulSignUp) {
      setShouldShow(true);
      setTimeout(() => {
        setIsSuccessfulSignUp(false);
        setShouldShow(false);
      }, 4000);
    }

    if (isError) {
      setShouldShow(true);
      setTimeout(() => {
        setIsError(false);
        setShouldShow(false);
      }, 4000);
    }

    if (isSuccessfulPassword || isSuccessfulSignUp || isError) {
      setShouldShow(true);
    }
  }, [isSuccessfulPassword, isSuccessfulSignUp, isError]);

  useEffect(() => {
    setCanContinue(canLogin);
  }, [canLogin]);

  const userLogin = async () => {
    if (emailRef.current?.value !== "" && passwordRef.current?.value !== "") {
      try {
        let user = await LoginUser(
          emailRef.current?.value || "",
          passwordRef.current?.value || ""
        );

        if (user) {
          Navigate("/home");
        }
      } catch (error) {
        console.log(isError);
      }
    }
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
              error={shouldShow && isError}
              helperText={shouldShow && isError && "Please enter a valid email"}
            />
            <StyledInput
              placeholder='Password'
              inputRef={passwordRef}
              error={shouldShow && isError}
              helperText={
                shouldShow && isError && "Please enter a valid password"
              }
            />
          </ContentInputItem>
        </ContentInputGrid>
        <ContentButtonGrid>
          <ContentButtonItem>
            <ContainedBtn variant='contained' onClick={userLogin}>
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
