import React, { useContext } from "react";
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
  onClick: (string: String) => void;
  // successfulSignUp: Boolean;
}

const Signup = ({ onClick }: SignupProps) => {
  const { title, step, setStep }: SignUpContextProps =
    useContext(SignUpContext);

  const goToLogin = () => {
    onClick("Login");
    // successfulSignUp(true);
  };
  const handleNext = () => {
    setStep(step + 1);
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
        <StyledText variant='body1'>
          {title[step as keyof { 0: string; 1: string; 2: string }]}
        </StyledText>
      </GridItem>
      <GridItem xs={1} />
      <GridItem xs={1}>
        <FormInputs from='signup' />
      </GridItem>
      <GridItem xs={1}>
        {step !== 2 ? (
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
