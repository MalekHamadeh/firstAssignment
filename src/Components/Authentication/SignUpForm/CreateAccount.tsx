import React from "react";

import { Grid } from "@mui/material";

import { StyledInput } from "../../Shared/StyledShared";

const CreateAccount = () => {
  return (
    <Grid container direction='column' gap={1}>
      <Grid item xs={1}>
        <StyledInput placeholder='Enter Username' />
      </Grid>
      <Grid item xs={1}>
        <StyledInput placeholder='Enter password' />
      </Grid>
    </Grid>
  );
};

export default CreateAccount;
