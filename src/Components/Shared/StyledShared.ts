import {
  Alert,
  Grid,
  Typography,
  FormControl,
  FormLabel,
  InputLabel,
  TextField,
  OutlinedInput,
} from "@mui/material";
import styled from "styled-components";

//#region Styling Alert

export const AlertWrapper = styled.div`
  width: 24vw;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledAlert = styled(Alert)`
  && {
    background-color: #f4f6fc;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  & .MuiAlert-message {
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem;
    font-size: 0.883rem;
    color: ${({ severity }) => (severity === "error" ? "#fd5461" : "#29C293")};
  }
  & .MuiAlert-icon {
    color: ${({ severity }) => (severity === "error" ? "#fd5461" : "#29C293")};
  }
`;

//#endregion

//#region Styling ProjectIcon
export const ProjectIconWrapper = styled.div`
  width: 80%;
`;

export const ProjectIconGrid = styled(Grid).attrs({
  container: true,
  direction: "column",
})`
  height: 100%;
`;

export const IconItem = styled(Grid).attrs({ item: true })`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90%;
  width: 100%;
`;

export const IconContent = styled.div`
  width: 65%;
  height: 55%;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
`;

export const ProjectNameAbb = styled(Typography).attrs({ variant: "h6" })`
  && {
    color: #ffffff;
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1.625rem;
    line-height: 1.9375rem;
  }
`;

export const ProjectNameItem = styled(Grid).attrs({ item: true })`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 10%;
`;

//#endregion

//#region Styling Inputs
export const StyledInputLabel = styled(InputLabel)`
  && {
    color: #adb0b8;
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    padding-left: 0.9rem;
  }
`;

export const StyledInput = styled(TextField).attrs({
  variant: "outlined",
  fullWidth: true,
  size: "small",
  InputLabelProps: {
    shrink: true,
  },
  InputProps: {
    notched: false,
  },
})`
  && {
    display: flex;
    align-items: center;
  }
  fieldset {
    border-color: #d9dbde;
  }
  && .MuiOutlinedInput-root {
    font-size: 0.97rem;
    &.Mui-focused {
      border: none;
      fieldset {
        border-color: #d9dbde;
      }
    }
    &: hover {
      border: none;
      fieldset {
        border-color: #d9dbde;
      }
    }
  }
  && .MuiInputLabel-outlined {
    color: #adb0b8;
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    font-size: 0.833rem;
    padding-left: 0.9rem;
    transform: translate(-0.2rem, -1.3rem) scale(1);
  }

  && .MuiFormHelperText-root {
    width: 100%;
    justify-items: start;
  }
`;

//#endregion
