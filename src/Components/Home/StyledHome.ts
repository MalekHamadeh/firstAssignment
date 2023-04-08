import { IconButton, Typography, Grid } from "@mui/material";
import styled from "styled-components";

interface ImageSource {
  src: string;
}

//#region HomePage Styling
export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: rows;
  height: 100vh;
`;
export const DrawerWrapper = styled.div`
  flex-shrink: 0;
`;
export const HeroSectionWrapper = styled.div`
  margin: 2rem;
  margin-top: 0;
  flex-grow: 1;
`; // for the HeroSection component called in HomePage
//#endregion

//#region HeroSection Component
export const StyledHeroWrapper = styled.div`
display: flex
flex-direction: rows;
height: 100%;
`;

export const StyledHeroHeader = styled.div`
  height: 7%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledHeaderTitle = styled(Typography)`
  && {
    margin-left: 3rem;
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
  margin-right: 2rem;
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
  height: calc(100% - 7%);
  width: 100%;
`;
//#endregion

//#region Dashboard Component
export const DashboardWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const DashboardGrid = styled(Grid).attrs({ container: true })`
  && {
    height: 100%;
    width: 100%;
  }
`;

export const LeftGridItem = styled(Grid).attrs({ item: true })`
  && {
    flex-grow: 1.1;
  }
`;
export const RightGridItem = styled(Grid).attrs({ item: true })`
  && {
    flex-grow: 1;
    background-color: #f7f7f7;
  }
`;
//#endregion

//#region LeftDashboard Component
export const LeftWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const LeftGrid = styled(Grid).attrs({ container: true })`
  && {
    background-color: #c4c4c4;
    height: 100%;
    width: 100%;
  }
`;

export const LeftTopGridItem = styled(Grid).attrs({ item: true })`
  && {
    height: 20%;
    border-radius: 1rem;
    margin: 1rem;
    margin-top: 2rem;
    margin-bottom: 0;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e8f0fe;
  }
`;

export const TopWrapper = styled(Grid).attrs({ container: true })`
  height: 80%;
  margin-left: 1rem;
  background-color: black;
`;

export const TopTextWrapperItem = styled(Grid).attrs({ item: true })`
  && {
    height: 100%;
  }
`;
export const TopPictureWrapperItem = styled(Grid).attrs({ item: true })`
  && {
    height: 100%;
    flex-grow: 1;
    display: flex;

    justify-content: center;
  }
`;

export const InfoGrid = styled(Grid).attrs({ container: true })`
  && {
    flex-direction: column;
    display: flex;
    gap: 2rem;
  }
`;

export const Title = styled(Typography).attrs({ variant: "h2" })`
  && {
    font-family: "Rubik", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 1.8rem;
    letter-spacing: 0.013em;
    color: #31394e;
  }
`;

export const Text = styled(Typography).attrs({ variant: "h2" })`
  && {
    font-family: "Rubik", sans-serif;
    font-weight: 300;
    font-size: 1.2rem;
    line-height: 1.5;
    letter-spacing: 0.05rem;
    color: #31394e;
  }
`;

export const StyledImage = styled.img<ImageSource>`
  height: 120%;
  width: auto;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
`;
export const BottomWrapper = styled.div``;

export const LeftBottomGridItem = styled(Grid).attrs({ item: true })`
  && {
    background-color: #fff;
    border-radius: 1rem;
    margin: 1rem;
    padding: 1rem;
    flex-grow: 6;
  }
`;

//#endregion
