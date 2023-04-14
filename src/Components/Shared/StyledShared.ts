import {
  Alert,
  Grid,
  Typography,
  InputLabel,
  TextField,
  Chip,
} from "@mui/material";
import styled from "styled-components";

interface ProjectIconBC {
  iconColor: string;
}

const GridContainer = styled(Grid).attrs({
  container: true,
})``;
const GridItem = styled(Grid).attrs({ item: true })``;

const ItemNestedGrid = styled(Grid).attrs({
  container: true,
  item: true,
})``;

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
  width: 100%;
  height: 90%;
  margin-top: 1rem;
`;

export const ProjectIconGrid = styled(Grid).attrs({
  container: true,
  direction: "row",
  columns: 12,
})`
  && {
    height: 100%;
    width: 100%;
  }
`;

export const ProjectItem = styled(Grid).attrs({ item: true })`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40%;
  width: 19%;
`;

export const ProjectItemGrid = styled(Grid).attrs({
  container: true,
  direction: "column",
})`
  && {
    height: 90%;
    width: 60%;
    display: flex;
    justify-content: start;
    align-items: center;
  }
`;

export const ProjectIcon = styled(Grid).attrs({ item: true })<ProjectIconBC>`
  && {
    background-color: ${({ iconColor }) => iconColor};
    height: 60%;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
  }
`;

export const ProjectNameAbb = styled(Typography).attrs({ variant: "h6" })`
  && {
    color: #ffffff;
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1.625rem;
    line-height: 1.9375rem;
    text-transform: uppercase;
  }
`;

export const ProjectNameWrapper = styled(Grid).attrs({
  item: true,
})`
  && {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 30%;
    text-align: center;
    margin-top: 1rem;
  }
`;

export const ProjectNameItem = styled(Grid).attrs({ item: true })`
  display: flex;
  justify-content: center;
  align-items: start;
  height: 100%;
`;

export const ProjectName = styled(Typography).attrs({ variant: "h6" })`
  && {
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 0.9rem;
    line-height: 1.3rem;
  }
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

//#region Styling CompressedList
export const ListGrid = styled(GridContainer)`
  && {
    height: 100%;
    width: 100%;
    display: flex;
    padding-top: 2rem;
  }
`;

export const ListTitleItem = styled(ItemNestedGrid)`
  && {
    height: 10%;
    width: 100%;
    display: flex;
    gap: 2rem;
  }
`;

export const ListTitleName = styled(GridItem)`
  && {
    display: flex;
    align-items: center;
  }
`;
export const TitleName = styled(Typography).attrs({ variant: "h6" })`
  && {
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: 400;


`;

export const ListTitleChip = styled(GridItem)`
  && {
    display: flex;
    align-items: center;
  }
`;
export const TitleChip = styled(Chip).attrs({
  size: "small",
})`
  && {
    background-color: #e8f0fe;
    height: 1.2rem;

    & .MuiChip-label {
      color: #0079ff;
      text-align: center;
      margin-left: -0.08rem;
    }
  }
`;
export const ListItemGrid = styled(ItemNestedGrid)`
  && {
    height: 90%;
    width: 100%;
    background-color: yellow;
  }
`;
