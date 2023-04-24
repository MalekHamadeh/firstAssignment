import React, { useContext } from "react";

import {
  ContentWrapper,
  ContentGrid,
  ContentAlert,
  ContentInputGrid,
  TitleItem,
  ContentButtonItem,
  StyledText,
  ContentTitle,
  ContentInputItem,
  PasswordLinkItem,
  ContentButtonGrid,
  ContainedBtn,
  TextBtn,
} from "./StyledAuthentication";

import FormInputs from "./FormInputs";
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
    <ContentWrapper>
      <ContentGrid>
        <TitleItem>
          <ContentTitle>Forgot your password</ContentTitle>
          <StyledText>{passwordTitle[step]}</StyledText>
        </TitleItem>
        <ContentAlert>
          {canContinuePassword && (
            <Alert
              isSuccess
              message="Well done, we'll email you with a reset link."
            />
          )}
        </ContentAlert>
        <ContentInputGrid>
          <ContentInputItem>
            <FormInputs />
          </ContentInputItem>
        </ContentInputGrid>
        <ContentButtonGrid>
          <ContentButtonItem>
            <ContainedBtn onClick={handleNext}>
              {step === 1 ? "Recover Your Password" : "Next"}
            </ContainedBtn>
          </ContentButtonItem>
          {step !== 1 && (
            <PasswordLinkItem>
              <TextBtn onClick={returnToLogin}>Back to login</TextBtn>
            </PasswordLinkItem>
          )}
        </ContentButtonGrid>
      </ContentGrid>
    </ContentWrapper>
  );
};

export default ForgotPassword;
