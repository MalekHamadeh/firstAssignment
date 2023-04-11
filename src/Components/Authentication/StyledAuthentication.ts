import styled from "styled-components";
import {
  Box,
  Paper,
  Button,
  Grid,
  TextField,
  Typography,
  FormLabel,
} from "@mui/material";
import { StyledInput } from "../Shared/StyledShared";

interface ButtonProps {
  register?: boolean;
  variant?: string;
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
  height: 40%;
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

export const SloganWrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledLogo = styled.img`
  width: 40%;
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
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

export const StyledPaper = styled(Paper)`
  && {
    height: fit-content;
    width: 37.43vw;
    display: flex;
    justify-content: center;
  }
`;
//#endregion

//#region All styling for Aythentication Components
export const AuthenticationWrapper = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// the && opertator is used because Material-Ui has a higher specificity than our CSS so in order to override the MaterialUI CSS we use && instead of !important

export const ContentWrapper = styled.div`
  height: fit-content;
  width: fit-content;
  display: flex;
  justify-content: center;
`;

export const ContentGrid = styled(Grid).attrs({ container: true })`
  && {
    margin: 4rem;
    height: fit-content;
    width: fit-content;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

export const TitleItem = styled(Grid).attrs({ item: true })`
  && {
    display: flex;
    width: 24vw;
    height: fit-content;
    justify-content: center;
    align-items: center;
  }
`;

export const ContentTitle = styled(Typography)`
  && {
    font-family: "Rubik", sans sheriff;
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 1.25rem;
  }
`;

export const TitleDesc = styled(Grid).attrs({ item: true })`
  && {
    width: 24vw;
    height: fit-content;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
  }
`;

export const StyledText = styled(Typography)`
  && {
    font-family: "Rubik", sans-serif;
    color: ${({ variant }) => (variant === "h4" ? "#000000" : "#5A6171")};
  }
`;

export const ContentAlert = styled(Grid).attrs({ item: true })`
  && {
    width: 24vw;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ContentInputGrid = styled(Grid).attrs({
  container: true,
  item: true,
})`
  && {
    display: flex;
    width: 24vw;
    justify-content: center;
    gap: 1rem;
    height: auto;
    flex-direction: rows;
  }
`;

export const ContentInputItem = styled(Grid).attrs({
  container: true,
  item: true,
})`
  && {
    display: flex;
    width: 24vw;
    justify-content: center;
    gap: 1rem;
    height: fit-content;
    flex-direction: rows;
  }
`;

export const ContentButtonGrid = styled(Grid).attrs({
  container: true,
  item: true,
})`
  && {
    display: flex;
    width: 24vw;
    height: fit-content;
    gap: 1rem;
  }
`;

export const ContentButtonItem = styled(Grid).attrs({ item: true })`
  && {
    margin-top: 1rem;
    display: flex;
    width: 24vw;
    height: auto;
    justify-content: center;
  }
`;

export const StyledButton = styled(Button)<ButtonProps>`
  width: 24vw;
  height: 5vh;
  && {
    font-family: "Rubik", sans sheriff;
    text-transform: none;
    color: ${({ variant }) => (variant === "text" ? "#4C84FF" : "#FFFFFF")};
  }
`;
export const ContainedBtn = styled(StyledButton).attrs({
  variant: "contained",
})`
  && {
    background-color: ${({ register }) => (register ? "#29C293" : "#4C84FF")};

    &:hover {
      background-color: ${({ register }) => (register ? "#29C293" : "#4C84FF")};
    }
  }
`;
export const TextBtn = styled(StyledButton).attrs({ variant: "text" })`
  && {
    font-weight: 400;
    color: #4c84ff;
    width: auto;
  }
`;

export const ContentLinksItem = styled(Grid).attrs({ item: true })`
  && {
    display: flex;
    height: auto;
    width: 24vw;
    justify-content: space-between;
    align-items: end;
  }
`;

export const ContentLinkButton = styled(Button)`
  && {
    font-family: "Rubik", sans sheriff;
    text-transform: none;
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #4c84ff;
    height: fit-content;
    &:hover {
      color: #4c84ff;
    }
  }
`;
//#endregion

//#region Styling for the ForgotPassword Component

export const PasswordLinkItem = styled(ContentLinksItem)`
  && {
    justify-content: center;
  }
`;

//#endregion

//#region Styling for the SignUp Component

export const SignUpWrapper = styled(ContentWrapper)``;

export const SignUpGrid = styled(Grid).attrs({ container: true })`
  && {
    height: 100%;
    width: 100%;
    flex-direction: rows;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const SignUpTitleItem = styled(Grid).attrs({ item: true })`
  && {
    height: 20%;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
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
  }
`;

//#endregion

//#region Styling for the CompanyInfo Component
