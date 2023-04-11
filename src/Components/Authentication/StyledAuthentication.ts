import styled from "styled-components";
import {
  Box,
  Paper,
  Alert,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

interface isRegesteredProps {
  register?: boolean;
}

//#region Authentication Layout Styling
export const Outline = styled(Box)`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #e8f0fe 100%);
  && {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25%;
`;

export const HeaderContainer = styled.div`
  height: 90%;
  width: 30%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const LogoWrapper = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLogo = styled.img`
  width: 40%;
`;

export const SloganWrapper = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Slogan = styled(Typography)`
  && {
    color: #4c84ff;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 1rm;
    line-height: 2rem;
    text-transform: uppercase;
    letter-spacing: 0.375rem;
  }
`;

export const StyledPaperWrapper = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: 1rem;
`;

export const StyledPaper = styled(Paper)`
  && {
    height: 70%;
    width: 35%;
    display: flex;
    justify-content: center;
  }
`;
//#endregion

//#region All styling for Aythentication Components
export const GridContainer = styled(Grid).attrs({ container: true })``;
export const GridItem = styled(Grid).attrs({ item: true })``;

export const AuthenticationWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// the && opertator is used because Material-Ui has a higher specificity than our CSS so in order to override the MaterialUI CSS we use && instead of !important
export const StyledText = styled(Typography)`
  && {
    font-family: "Rubik", sans-serif;
    color: ${({ variant }) => (variant === "h4" ? "#000000" : "#5A6171")};
  }
`;

export const StyledInput = styled(TextField)`
  && {
    width: 100%;
  }
`;
export const StyledButton = styled(Button)<isRegesteredProps>`
  width: 100%;
  height: 70%;
  && {
    font-family: "Rubik", sans sheriff;
    text-transform: none;
    color: ${({ variant }) => (variant === "text" ? "#4C84FF" : "#FFFFFF")}
    background-color: ${({ register, variant }) =>
      register && variant === "contained" ? "#29C293" : "#4C84FF"};
    &:hover {
      background-color: ${({ register, variant }) =>
        register && variant === "contained" ? "#29C293" : "#4C84FF"};
      background-color: ${({ variant }) => variant === "text" && "transparent"};
    }
  }
`;
//#endregion

//#region Styling for the Login Component
export const LoginWrapper = styled.div`
  height: 80%;
  width: 80%;
  display: flex;
  // background-color: blue;
  justify-content: center;
  align-items: center;
`;

export const LoginGrid = styled(Grid).attrs({ container: true })`
  && {
    height: 100%;
    width: 100%;
    // background-color: red;
    flex-direction: rows;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const LoginTitleItem = styled(Grid).attrs({ item: true })`
  && {
    display flex;
    width: 90%;
    height: 15%;
    justify-content: center;
    align-items: center;
  }

`;

export const ScreenTitle = styled(Typography)`
  && {
    font-family: "Rubik", sans sheriff;
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 1.25rem;
  }
`;

export const LoginAlert = styled(Grid).attrs({ item: true })`
  height: 15%;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginInputGrid = styled(Grid).attrs({
  container: true,
  item: true,
})`
  && {
    display flex;
    height: 40%;
    width: 90%;
    justify-content: center;
    // background-color: green;
  }
`;

export const LoginInputItem = styled(Grid).attrs({ item: true })`
  && {
    display flex;
    width: 100%;
    height: 50%;
    justify-content: center;
    align-items: center;
    // background-color: blue;
    // border: 1px solid black;
  }
`;

export const LoginButtonItem = styled(Grid).attrs({ item: true })`
  && {
    display flex;
    height: 20%;
    width: 90%;
    justify-content: center;
    align-items: center;

  }
`;
export const LoginLinksItem = styled(Grid).attrs({ item: true })`
  && {
    display flex;
    height: 10%;
    width: 90%;
    justify-content: space-between;
    align-items: center;
  
  }

`;

export const LinkButton = styled(Button)`
  && {
    font-family: "Rubik", sans sheriff;
    text-transform: none;
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #4c84ff;
    &:hover {
      color: #4c84ff;
    }
`;

//#endregion

//#region Styling for the ForgotPassword Component

export const ForgotPasswordWrapper = styled.div`
  height: 80%;
  width: 80%;
  display: flex;

  justify-content: center;
`;

export const PasswordGrid = styled(Grid).attrs({ container: true })`
  && {
    width: 100%;
    flex-direction: rows;
    display: flex;
    justify-content: center;
  }
`;

export const PasswordTitleItem = styled(Grid).attrs({ item: true })`
  && {
    height: 15%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const PasswordAlertItem = styled(Grid).attrs({ item: true })`
  && {
    height: 15%;
    width: 100%;
  }
`;
export const PasswordDesItem = styled(Grid).attrs({ item: true })`
  && {
    height: 15%;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const PasswordInputItem = styled(Grid).attrs({ item: true })`
  && {
    height: 25%;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
export const PasswordButtonsItem = styled(Grid).attrs({ item: true })`
  && {
    height: 30%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

//#endregion

//#region Styling for the SignUp Component

export const SignUpWrapper = styled.div`
  height: 80%;
  width: 80%;
  display: flex;
  justify-content: center;
  background-color: red;
`;

export const SignUpGrid = styled(Grid).attrs({ container: true })`
  && {
    height: 100%;
    width: 100%;
    flex-direction: rows;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: green;
  }
`;

export const SignUpTitleItem = styled(Grid).attrs({ item: true })`
  && {
    height: 20%;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blue;
  }
`;

export const SignUpInputItem = styled(Grid).attrs({ item: true })`
   {
    && {
      height: auto;
      width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: yellow;
    }
  }
`;

export const SignUpButtonsItem = styled(Grid).attrs({ item: true })`
  && {
    height: 20%;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
  }
`;

//#endregion
