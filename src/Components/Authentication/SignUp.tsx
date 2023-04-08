import React, { useContext, useEffect, useState } from "react";
import FormInputs from "./FormInputs";
import {
  GridContainer,
  GridItem,
  StyledButton,
  StyledInput,
  StyledText,
} from "./StyledAuthentication";
import SignUpContext, { SignUpContextProps } from "../../Context/SignUpContext";

interface SignupProps {
  onClick: (string: string) => void;
  successfulSignUp: (boolean: Boolean) => void;
}

const Signup = ({ onClick, successfulSignUp }: SignupProps) => {
  const [localStep, setLocalStep] = useState<number>(() => {
    const localSteps = localStorage.getItem("step");
    return localSteps ? +localSteps : 0;
  });
  const { title, step, setStep }: SignUpContextProps =
    useContext(SignUpContext);

  useEffect(() => {
    localStorage.setItem("step", step.toString());
    return () => {
      localStorage.removeItem("step");
    };
  }, [step]);

  const goToLogin = () => {
    onClick("Login");
    successfulSignUp(true);
  };
  const handleNext = () => {
    setStep(step + 1);
    setLocalStep((prev) => prev + 1);
  };

  return (
    <GridContainer
      direction='column'
      justifyContent='center'
      alignItems='center'
      spacing={2}
    >
      <GridItem xs={1} />
      <GridItem xs={1} />
      <GridItem xs={1}>
        <StyledText variant='h4'>Sign Up</StyledText>
      </GridItem>
      <GridItem xs={1} />
      <GridItem xs={1}>
        <StyledText variant='body1'>{title[localStep]}</StyledText>
      </GridItem>
      <GridItem xs={1} />
      <GridItem xs={1}>
        <FormInputs from='signup' formStep={localStep} />
      </GridItem>
      <GridItem xs={1}>
        {title[localStep] !== "Create your company space" ? (
          <StyledButton variant='contained' onClick={handleNext}>
            Next
          </StyledButton>
        ) : (
          <StyledButton variant='contained' register={true} onClick={goToLogin}>
            Register
          </StyledButton>
        )}
      </GridItem>
    </GridContainer>
  );
};

export default Signup;
