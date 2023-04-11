import React, { useContext, useEffect, useState } from "react";
import FormInputs from "./FormInputs";
import {
  GridContainer,
  GridItem,
  SignUpButtonsItem,
  SignUpGrid,
  SignUpInputItem,
  SignUpTitleItem,
  SignUpWrapper,
  StyledButton,
  StyledInput,
  StyledText,
} from "./StyledAuthentication";
import SignUpContext, { SignUpContextProps } from "../../Context/SignUpContext";
import { AuthenticationContextProps } from "../../Context/ContextTypes";
import AuthenticationContext from "../../Context/AuthenticationContext";

const Signup = () => {
  const {
    signUpTitle,
    step,
    setStep,
    handleScreens,
  }: AuthenticationContextProps = useContext(AuthenticationContext);

  const goToLogin = () => {
    handleScreens("Login");
  };
  const handleNext = () => {
    if (step !== 2) {
      setStep(step + 1);
    } else {
      handleScreens("Login");
      setStep(0);
    }
  };

  return (
    <SignUpWrapper>
      <SignUpGrid>
        <SignUpTitleItem>Title</SignUpTitleItem>
        <SignUpInputItem>
          <FormInputs from='signup' formStep={step} />
        </SignUpInputItem>
        <SignUpButtonsItem>
          {signUpTitle[step] !== "Create your company space" ? (
            <StyledButton variant='contained' onClick={handleNext}>
              Next
            </StyledButton>
          ) : (
            <StyledButton
              variant='contained'
              register={true}
              onClick={handleNext}
            >
              Register
            </StyledButton>
          )}
        </SignUpButtonsItem>
      </SignUpGrid>
      {/* <GridItem xs={1} />
      <GridItem xs={1} />
      <GridItem xs={1}>
        <StyledText variant='h4'>Sign Up</StyledText>
      </GridItem>
      <GridItem xs={1} />
      <GridItem xs={1}>
        <StyledText variant='body1'>{signUpTitle[step]}</StyledText>
      </GridItem>
      <GridItem xs={1} />
      <GridItem xs={1}>
        <FormInputs from='signup' formStep={step} />
      </GridItem>
      <GridItem xs={1}>
        {signUpTitle[step] !== "Create your company space" ? (
          <StyledButton variant='contained' onClick={handleNext}>
            Next
          </StyledButton>
        ) : (
          <StyledButton
            variant='contained'
            register={true}
            onClick={handleNext}
          >
            Register
          </StyledButton>
        )}
      </GridItem> */}
    </SignUpWrapper>
  );
};

export default Signup;
