import React, { useContext } from "react";
import {
  GridContainer,
  GridItem,
  StyledButton,
  StyledText,
} from "./StyledAuthentication";
import FormInputs from "./FormInputs";
import PasswordContext, {
  PasswordContextProps,
} from "../../Context/PasswordContext";

interface ForgotPasswordProps {
  onClick: (string: String) => void;
  didSucceed: (boolean: Boolean) => void;
}

const ForgotPassword = ({ onClick, didSucceed }: ForgotPasswordProps) => {
  const { title, step, setStep }: PasswordContextProps =
    useContext(PasswordContext);

  const handleNext = () => {
    setStep(step + 1);
  };

  const returnToLogin = () => {
    onClick("Login");
    didSucceed(true);
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
        <StyledText variant='h4'>Forgot your password</StyledText>
      </GridItem>
      <GridItem xs={1} />
      <GridItem xs={1}>
        <StyledText>{title[step as keyof { 0: string; 1: string }]}</StyledText>
      </GridItem>
      <GridItem xs={1} />
      <GridItem xs={1}>
        <FormInputs from='forgot' />
      </GridItem>
      {step !== 1 && (
        <>
          <GridItem xs={1}>
            <StyledButton variant='contained' onClick={handleNext}>
              Next
            </StyledButton>
          </GridItem>
          <GridItem xs={1}>
            <StyledButton variant='text' onClick={returnToLogin}>
              Go back
            </StyledButton>
          </GridItem>
        </>
      )}
      {step === 1 && (
        <GridItem xs={1}>
          <StyledButton variant='contained' onClick={returnToLogin}>
            Set New Password
          </StyledButton>
        </GridItem>
      )}
    </GridContainer>
  );
};

export default ForgotPassword;
