import React from "react";
import { GridContainer, GridItem, StyledInput } from "../StyledAuthentication";

const NewPassword = () => {
  return (
    <GridContainer>
      <GridItem>
        <StyledInput placeholder='Enter your new password' />
      </GridItem>
    </GridContainer>
  );
};

export default NewPassword;
