import { Button } from "@mui/material";
import React, { useRef, useState } from "react";
import {
  GridItem,
  GridContainer,
  StyledButton,
  StyledInput,
  // StyledAlert,
  StyledText,
} from "./StyledAuthentication";
import { useNavigate } from "react-router-dom";
import Alert from "../Shared/Alert";
// import Alert from "../Alert";
// { onClick, successfulPass, successfulSignUp }

interface LoginProps {
  onClick: (string: string) => void;
  successfulPass: Boolean;
  successfulSignUp: Boolean;
}

const Login = ({ onClick, successfulPass, successfulSignUp }: LoginProps) => {
  const [incorrect, isIncorrect] = useState(false);
  const [showAlert, shouldShowAlert] = useState(false);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const Navigate = useNavigate();

  const handleEmail = () => {
    const email = emailRef.current?.value;
  };
  const handlePassword = () => {
    const password = passwordRef.current?.value;
  };

  const canLogin = () => {
    emailRef.current?.value !== "" && passwordRef.current?.value !== ""
      ? Navigate("/home")
      : isIncorrect(true);
  };

  const goToSignUp = () => {
    onClick("SignUp");
    console.log("To signUp");
  };
  const goToForgotPassword = () => {
    onClick("ForgotPassword");
  };

  const alertController = () => {
    if (incorrect) {
      return (
        <Alert
          isError
          message='Please make sure you have the correct email or password'
        />
      );
    } else if (successfulPass) {
      return <Alert isSuccess message='Password was reset Successfully' />;
    } else if (successfulSignUp) {
      return <Alert isSuccess message='Account created Successfully' />;
    }
  };

  return (
    <GridContainer
      direction='column'
      justifyContent='center'
      alignItems='center'
      spacing={3}
    >
      {/* used to create whitespace between Title and Inputs*/}
      <GridItem />
      <GridItem />
      <GridItem xs={1}>
        <StyledText variant='h4'>Login</StyledText>
      </GridItem>
      <GridItem />
      <GridItem>{alertController()}</GridItem>
      <GridItem xs={1}>
        <StyledInput
          placeholder='Email'
          inputRef={emailRef}
          onChange={handleEmail}
        />
      </GridItem>
      <GridItem xs={1}>
        <StyledInput
          placeholder='Password'
          inputRef={passwordRef}
          onChange={handlePassword}
        />
      </GridItem>
      <GridItem xs={1}>
        <StyledButton variant='contained' onClick={canLogin}>
          Login
        </StyledButton>
      </GridItem>
      <GridItem>
        <GridContainer direction='row' gap={30}>
          <GridItem>
            <Button onClick={goToForgotPassword}>Forgot Password?</Button>
          </GridItem>
          <GridItem>
            <Button onClick={goToSignUp}>I dont have an account</Button>
          </GridItem>
        </GridContainer>
      </GridItem>
    </GridContainer>
  );
};

export default Login;
