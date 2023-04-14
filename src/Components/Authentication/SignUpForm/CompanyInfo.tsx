import React, { useState } from "react";
import { StyledInput } from "../../Shared/StyledShared";
import { Grid, MenuItem, Checkbox } from "@mui/material";
import {
  TermsCheckBox,
  TermsCheckboxWrapper,
  TermsText,
  TermsTextWrapper,
  TermsWrapper,
} from "../StyledAuthentication";

const CompanyInfo = () => {
  const [industryType, setIndustryType] = useState<string>("");
  const [nbOfEmployees, setNbOfEmpolyees] = useState<number>(0);

  const handleNbOfEmployeesChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNbOfEmpolyees(parseInt(event.target.value));
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIndustryType(event.target.value);
  };
  return (
    <Grid container direction='row' gap={4} sx={{ width: "24vw" }}>
      <Grid item xs={12}>
        <StyledInput label='Company Name' placeholder='Enter Company Name' />
      </Grid>
      <Grid item xs={12}>
        <StyledInput label='Your space will be' placeholder='Space name' />
      </Grid>
      <Grid item xs={12}>
        <StyledInput
          label='Industry'
          value={industryType}
          select
          onChange={handleSelectChange}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </StyledInput>
      </Grid>
      <Grid item xs={12}>
        <StyledInput
          label='Number of employees'
          select
          value={nbOfEmployees}
          onChange={handleNbOfEmployeesChange}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </StyledInput>
      </Grid>
      <Grid item xs={12}>
        <TermsWrapper>
          <TermsCheckboxWrapper>
            <TermsCheckBox />
          </TermsCheckboxWrapper>
          <TermsText>
            <TermsTextWrapper>
              Accetto le Condizioni di utilizzo e Informativa sulla Privacy
            </TermsTextWrapper>
          </TermsText>
        </TermsWrapper>
      </Grid>
    </Grid>
  );
};

export default CompanyInfo;
