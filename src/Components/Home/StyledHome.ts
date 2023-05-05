import { IconButton, Typography, Divider } from "@mui/material";
import styled from "styled-components";

//#region HomePage Styling
export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: rows;
  height: 100vh;
  width: 100vw;
`;
export const DrawerWrapper = styled.div`
  flex-grow: 0;
  height: 100%;
`;
export const HeroSectionWrapper = styled.div`
  flex-grow: 1;
  height: 100%;
  overflow-y: hidden;
`; // for the HeroSection component called in HomePage
//#endregion

//#region HeroSection Component
export const StyledHeroWrapper = styled.div`
display: flexG
flex-direction: rows;
height: 100%;
width: 100%;
`;

export const StyledHeroHeader = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledHeroHeaderContent = styled.div`
  width: 95%;
  padding-left: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledHeaderTitle = styled(Typography)`
  && {
    font-size: 1.5rem;
    font-family: "Rubik", sans-serif;
  }
`;

export const StyledHeaderTitleWrapper = styled.div``;
export const StyledHeaderIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 2rem;
`;

export const StyledSmallBtn = styled(IconButton)`
  && {
    background-color: ${({ color }) =>
      color === "primary" ? "#4C84FF" : color === "warning" && "#F7C101"};
    color: #fff;
    border-radius: 25%;
    &:hover {
      background-color: ${({ color }) =>
        color === "primary" ? "#2b6cfb" : color === "warning" && "#D6A802"};
    }
  }
`;

export const StyledHeroBody = styled.div`
  height: 93.5%;
  width: 100%;
  display: flex;
  z-index: 1;
  justify-content: center;
`;

export const StyledDivider = styled(Divider).attrs({
  light: true,
})`
  && {
    margin-left: 4rem;
  }
`;
//#endregion
