import React, { useContext } from "react";
// import FormInputs from "./FormInputs";
import {
  GridContainer,
  GridItem,
  StyledButton,
  StyledInput,
  StyledText,
} from "./StyledAuthentication";
// import SignUpContext from "../../Utils/SignUpContext/SignUpContext";

// { onClick, successfulSignUp }
const Signup = () => {
  //   const { title, step, setStep } = useContext(SignUpContext);

  //   const goToLogin = () => {
  //     onClick("Login");
  //     successfulSignUp(true);
  //   };
  //   const handleNext = () => {
  //     setStep((prev) => prev + 1);
  //   };
  const step: Number = 0;
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
          {
            // title[step]
          }
        </StyledText>
      </GridItem>
      <GridItem xs={1} />
      <GridItem xs={1}>{/* <FormInputs from='signup' /> */}</GridItem>
      <GridItem xs={1}>
        {step !== 2 ? (
          <StyledButton
            variant='contained'
            //    onClick={handleNext}
          >
            Next
          </StyledButton>
        ) : (
          <StyledButton
            variant='contained'
            register={true}
            //   onClick={goToLogin}
          >
            Register
          </StyledButton>
        )}
      </GridItem>
    </GridContainer>
  );
};

export default Signup;
