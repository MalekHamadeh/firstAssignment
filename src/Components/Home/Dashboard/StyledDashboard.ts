import { Typography, Grid, Divider } from "@mui/material";
import IconButton from "@mui/material-next/Button";

import styled from "styled-components";

interface ImageSource {
  src: string;
}

//#region Dashboard Component
export const DashboardWrapper = styled.div`
  height: 100%;
  width: 100%;
  margin-left: 2rem;
`;

export const DashboardGrid = styled(Grid).attrs({ container: true })`
  && {
    height: 100%;
    width: 100%;
  }
`;

export const LeftGridItem = styled(Grid).attrs({ item: true })`
  && {
    flex-grow: 1;
    margin-top: 3rem;
  }
`;

export const VerticalDivider = styled(Divider).attrs({
  orientation: "vertical",
})`
  && {
    height: 100%;
    background-color: #eaebed;
  }
`;

//#endregion

//#region Left Component

export const LeftGrid = styled(Grid).attrs({ container: true })`
  && {
    height: 100%;
    width: 100%;
    flex-direction: column;
    // margin-top: 3rem;
    gap: 1rem;
  }
`;

export const TopGridItem = styled(Grid).attrs({ item: true })`
  && {
    height: 30%;
    display: flex;
    width: 90%;
    margin-left: 1.8rem;
  }
`;

export const GridItemContent = styled(Grid).attrs({
  container: true,
  item: true,
})`
  && {
    background-color: #e8f0fe;
    border-radius: 1rem;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 2rem;
  }
`;

export const InfoGrid = styled(Grid).attrs({ container: true, item: true })`
  && {
    flex-direction: column;
    height: 100%;
    border-radius: 1rem;
    width: 60%;
    display: flex;
    gap: 3rem;
    padding-top: 2rem;
    padding-left: 2rem;
  }
`;

export const TopPictureWrapperItem = styled(Grid).attrs({ item: true })`
  && {
    height: 120%;
    width: 35%;
    display: flex;
    margin-top: -2.2rem;
    border-radius: 1rem;
    margin-left: 2.5rem;
    // background-color: blue;
  }
`;
export const InfoGridItem = styled(Grid).attrs({ item: true })``;

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
  object-fit: cover;
`;

export const BottomGridItem = styled(Grid).attrs({ item: true })`
  && {
    height: 60%;
    width: 90%;
    margin-left: 1.8rem;
    flex-grow: 1;
  }
`;

export const BottomGrid = styled(Grid).attrs({ container: true })`
  && {
    height: 100%;
    width: 100%;
  }
`;

export const TitleGridItem = styled(Grid).attrs({ item: true, xs: 12 })`
  height: 10%;
  display: flex;
  align-items: center;
  padding-left: 0.25rem;
`;

export const ProjectTitle = styled(Typography).attrs({ variant: "h2" })`
  && {
    font-family: "Rubik", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.8rem;
`;

export const ContentGridItem = styled(Grid).attrs({ item: true, xs: 12 })`
  height: 90%;
  width: 100%;
`;
//#endregion

//#region Right Component
export const RightGridItem = styled(Grid).attrs({
  item: true,
})`
  && {
    flex-grow: 1.2;
  }
`;

export const RightWrapper = styled(Grid).attrs({ container: true })`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const RightWrapperTitle = styled(Grid).attrs({
  container: true,
  item: true,
  xs: 12,
})`
  && {
    height: 10%;
    width: 95%;
    display: flex;
    justify-content: space-between;
    padding-left: 1rem;
  }
`;

export const TitleContentItem = styled(Grid).attrs({ item: true })`
  display: flex;
  align-items: end;
`;

export const RightProjectTitle = styled(Typography).attrs({ variant: "h2" })`
  && {
    font-family: "Rubik", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1.625rem;
    line-height: 1.938rem;
    color: #4c84ff;
  }
`;

export const GoToProjectButton = styled(IconButton).attrs({})`
  && {
    font-family: "Rubik", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 0.875rem;
    color: #838895;
    height: 1rem;
    &:hover {
      background-color: transparent;
    }
  }
`;

export const GoToIcon = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  padding-left: 0.5rem;
`;

export const RightWrapperToDos = styled(Grid).attrs({
  item: true,
  xs: 12,
})`
  width: 100%;

  height: 45%;
  display: flex;
  justify-content: center;
`;

export const TaskListWrapper = styled.div`
  height: 100%;
  width: 95%;
  // background-color: yellow;
`;

export const RightWrapperReview = styled(Grid).attrs({ item: true, xs: 12 })`
  && {
    width: 100%;
    height: 45%;
    background-color: green;
  }
`;

//#endregion
