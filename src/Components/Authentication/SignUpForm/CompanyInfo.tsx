import React from "react";
import { StyledInput } from "../../Shared/StyledShared";
import Grid from "@mui/material/Grid/Grid";

const CompanyInfo = () => {
  return (
    <Grid container direction='column' gap={5}>
      <Grid item xs={1}>
        <StyledInput label='Company Name' placeholder='Enter Company Name' />
      </Grid>
      <Grid item xs={1}>
        <StyledInput
          label='Company Address'
          placeholder='Enter Company Address'
        />
      </Grid>
      <Grid item xs={1}>
        <StyledInput
          label='Phone Number'
          placeholder='Enter Company Phone Number'
        />
      </Grid>
      <Grid item xs={1}>
        <StyledInput label='Company Email' placeholder='Enter Company Email' />
      </Grid>
    </Grid>
  );
};

export default CompanyInfo;
