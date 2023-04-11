import React, { useContext, useEffect, useState } from "react";
import FormInputs from "./FormInputs";
import {
  ContainedBtn,
  ContentButtonGrid,
  ContentButtonItem,
  ContentGrid,
  ContentInputGrid,
  ContentTitle,
  ContentWrapper,
  StyledButton,
  StyledText,
  TitleDesc,
  TitleItem,
} from "./StyledAuthentication";
import { AuthenticationContextProps } from "../../Context/ContextTypes";
import AuthenticationContext from "../../Context/AuthenticationContext";

const Signup = () => {
  const {
    signUpTitle,
    step,
    setStep,
    handleScreens,
  }: AuthenticationContextProps = useContext(AuthenticationContext);

  const [register, shouldRegister] = useState<boolean>(false);

  useEffect(() => {
    step === 2 && shouldRegister(true);
    console.log(register);
  }, [step]);

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
    <ContentWrapper>
      <ContentGrid>
        <TitleItem>
          <ContentTitle>SignUp</ContentTitle>
        </TitleItem>
        <TitleDesc>
          <StyledText>{signUpTitle[step]}</StyledText>
        </TitleDesc>
        <ContentInputGrid>
          <FormInputs from='signup' formStep={step} />
        </ContentInputGrid>
        <ContentButtonGrid>
          <ContentButtonItem>
            <ContainedBtn onClick={handleNext} register={register}>
              {register ? "Register" : "Next"}
            </ContainedBtn>
          </ContentButtonItem>
        </ContentButtonGrid>
      </ContentGrid>
    </ContentWrapper>
  );
};

export default Signup;
