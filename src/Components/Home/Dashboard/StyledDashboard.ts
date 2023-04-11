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
    height: 100%;
    display: flex;
    border-radius: 1rem;
    margin-right: 4rem;
    margin-left: -2rem;
    margin-top: -2rem;
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
  height: 115%;
  width: 115%;
`;

export const BottomGridItem = styled(Grid).attrs({ item: true })`
  && {
    height: 60%;
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
`;

export const ContentWrapper = styled.div`
  height: 80%;
  width: 85%;
`;

export const ContentGrid = styled(Grid).attrs({
  container: true,
  columns: 10,
  rowSpacing: 1,
})`
  && {
    flex-direction: row;
    height: 100%;
    width: 90%;
  }
`;

export const ContentItem = styled(Grid).attrs({ item: true, xs: 2 })`
  display: flex;
`;

export const ContentItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 0.5rem;
  justify-content: center;
`;

//#endregion

//#region Right Component
export const RightGridItem = styled(Grid).attrs({ item: true })`
  && {
    flex-grow: 1.2;
  }
`;

export const RightWrapper = styled(Grid).attrs({ container: true })`
  height: 100%;
  width: 100%;
`;

export const RightWrapperTitle = styled(Grid).attrs({ item: true })`
  && {
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 2rem;
  }
`;
export const TitleContent = styled(Grid).attrs({ container: true })`
  && {
    height: 100%;
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const TitleContentItem = styled(Grid).attrs({ item: true })``;

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
  }
`;

export const GoToIcon = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  padding-left: 0.5rem;
`;

export const RightWrapperToDos = styled(Grid).attrs({ item: true })`
  && {
    width: 100%;
    background-color: blue;
  }
  height: 40%;
  display: flex;
  justify-content: center;
`;

export const TaskListWrapper = styled.div`
  height: 100%;
  width: 95%;
  background-color: white;
`;

export const RightWrapperReview = styled(Grid).attrs({ item: true, xs: 12 })`
  && {
    width: 100%;
    background-color: blue;
  }
  height: 40%;
  border-top: 5px solid black;
`;

//#endregion
