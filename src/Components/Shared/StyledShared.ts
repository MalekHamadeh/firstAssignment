import { Alert, Grid, Typography } from "@mui/material";
import styled from "styled-components";

//#region Styling Alert

export const AlertWrapper = styled.div`
  width: 100%;
  height: 80%;
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
    line-height: 1.5rem;
    font-size: 1rem;
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
  background-color: green;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
