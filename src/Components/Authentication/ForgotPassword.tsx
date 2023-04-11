import React, { useContext, useEffect, useState } from "react";
import {
  ForgotPasswordWrapper,
  GridContainer,
  GridItem,
  PasswordAlertItem,
  PasswordButtonsItem,
  PasswordDesItem,
  PasswordGrid,
  PasswordInputItem,
  PasswordTitleItem,
  ScreenTitle,
  StyledButton,
  StyledText,
} from "./StyledAuthentication";
import FormInputs from "./FormInputs";
import PasswordContext, {
  PasswordContextProps,
} from "../../Context/PasswordContext";
import Alert from "../Shared/Alert";
import AuthenticationContext from "../../Context/AuthenticationContext";
import { AuthenticationContextProps } from "../../Context/ContextTypes";

const ForgotPassword = () => {
  const {
    passwordTitle,
    step,
    canContinuePassword,
    screen,
    setIsSuccessfulPassword,
    setStep,
    handleScreens,
  }: AuthenticationContextProps = useContext(AuthenticationContext);

  const handleNext = () => {
    if (step !== 1) {
      setStep(step + 1);
    } else {
      handleScreens("Login");
      setStep(0);
      setIsSuccessfulPassword(true);
    }
  };

  const returnToLogin = () => {
    handleScreens("Login");
    setStep(0);
  };
  return (
    <ForgotPasswordWrapper>
      <PasswordGrid>
        <PasswordTitleItem>
          <ScreenTitle>Forgot your password</ScreenTitle>
        </PasswordTitleItem>
        <PasswordDesItem>
          <StyledText>{passwordTitle[step]}</StyledText>
        </PasswordDesItem>
        <PasswordAlertItem>
          {canContinuePassword && (
            <Alert
              isSuccess
              message="Well done, we'll email you with a reset link."
            />
          )}
        </PasswordAlertItem>
        <PasswordInputItem>
          <FormInputs from='forgot' formStep={step} />
        </PasswordInputItem>
        <PasswordButtonsItem>
          <StyledButton variant='contained' onClick={handleNext}>
            {step === 1 ? "Recover Your Password" : "Next"}
          </StyledButton>
          {step !== 1 && (
            <>
              <StyledButton variant='text' onClick={returnToLogin}>
                Go back
              </StyledButton>
            </>
          )}
        </PasswordButtonsItem>
      </PasswordGrid>
    </ForgotPasswordWrapper>
  );
};

export default ForgotPassword;
