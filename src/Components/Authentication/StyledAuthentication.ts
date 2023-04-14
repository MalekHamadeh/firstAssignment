import styled from "styled-components";
import { Box, Paper, Button, Grid, Typography, Checkbox } from "@mui/material";

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
  height: 20%;
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
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SloganWrapper = styled.div`
  width: 100%;
  height: 20%;
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
    font-size: 0.83rem;
    line-height: 1.66rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.41rem;
  }
`;

export const StyledPaperWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;

export const StyledPaper = styled(Paper)`
  && {
    height: fit-content;
    width: fit-content;
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
`;

export const ContentWrapper = styled.div`
  height: fit-content;
  width: fit-content;
  display: flex;
  justify-content: center;
`;

const GridContainer = styled(Grid).attrs({ container: true })``;

const GridItem = styled(Grid).attrs({ item: true })`
  && {
    width: 24vw;
    display: flex;
    justify-content: center;
  }
`;
const ItemNestedGrid = styled(Grid).attrs({ container: true, item: true })`
  && {
    display: flex;
    width: 24vw;
    justify-content: center;
    height: fit-content;
    gap: 1rem;

`;

export const ContentGrid = styled(GridContainer)`
  && {
    margin: 4rem 4rem;
    height: fit-content;
    width: fit-content;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

export const TitleItem = styled(ItemNestedGrid)`
  && {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;

export const ContentTitle = styled(Typography)`
  && {
    font-family: "Rubik", sans sheriff;
    font-style: normal;
    font-weight: 400;
    font-size: 1.52rem;
    line-height: 1.25rem;
  }
`;

export const TitleDesc = styled(GridItem)`
  && {
    margin-bottom: 1rem;
  }
`;

export const StyledText = styled(Typography)`
  && {
    font-family: "Rubik", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 0.97rem;
    color: #5a6171;
  }
`;

export const ContentAlert = styled(GridItem)`
  && {
    align-items: center;
  }
`;

export const ContentInputGrid = styled(ItemNestedGrid)`
  && {
    height: auto;
    flex-direction: rows;
  }
`;

export const ContentInputItem = styled(ItemNestedGrid)`
  && {
    flex-direction: rows;
  }
`;

export const ContentButtonGrid = styled(ItemNestedGrid)``;

export const ContentButtonItem = styled(GridItem)`
  && {
    margin-top: 1rem;
    height: auto;
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

export const ContentLinksItem = styled(GridItem)`
  && {
    height: auto;
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

//#region Styling for the CompanyInfo Component
export const TermsWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const TermsCheckboxWrapper = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TermsCheckBox = styled(Checkbox).attrs({})`
  && .MuiCheckbox-root {
  }
`;

export const TermsTextWrapper = styled.div`
  width: 100%;
`;

export const TermsText = styled(Typography)`
&&{
  font-family: Rubik, sans-serif,
  font-style: normal;
  forn-weight: 400;
  font-size: 1rem;
  line-height: 1.8rem;
  color: #5A6171;
}
`;
//#endregion
