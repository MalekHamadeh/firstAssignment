import styled from "styled-components";
import { Grid, Divider, Typography, Button, Avatar, Chip } from "@mui/material";
import { StyledInput } from "../../Shared/StyledShared";

interface ListItemTextProps {
  selected?: boolean;
}

interface ButtonProps {
  varaint?: string;
  color?: string;
}

const GridContainer = styled(Grid).attrs({ container: true })``;
const GridItem = styled(Grid).attrs({ item: true })``;
const ItemNestedGrid = styled(Grid).attrs({
  container: true,
  item: true,
})``;

export const InfoButtonBase = styled(Button).attrs({
  variant: "contained",
  disableElevation: true,
})<ButtonProps>`
  && {
    height: 2rem;
    width: 6rem;
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #ffffff;
    border-radius: 4px;
  }
`;

//#region Space Settings main page

export const SettingsWrapper = styled.div`
  display: flex;
  width: 96.6%;
  height: 100%;
`;

export const SettingsGrid = styled(GridContainer)`
  && {
    height: 100%;
    width: 100%
    flex-direction: row;
  }
`;

export const LeftGridItem = styled(GridItem)`
  && {
    height: 95%;
    width: 15%;
    display: flex;
    align-items: center;
  }
`;

export const LeftWrapperGrid = styled(GridContainer)`
  && {
    height: 86%;
    width: 90%;
    display: flex;
  }
`;

export const ListWrapper = styled(GridContainer)`
  && {
    height: 20%;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
`;

export const ListTitleItem = styled(GridItem)`
  && {
    height: 30%;
    width: 100%;
    display: flex;
    gap: 0.5rem;
  }
`;

export const StyledSettingsIcon = styled.img`
  height: 1.5rem;
  width: 1.5rem;
`;

export const ListTitle = styled(Typography)`
  && {
    font-family: "Rubik", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: #4c84ff;
  }
`;

export const ListItem = styled(GridItem)`
  && {
    height: 30%;
    width: 80%;
  }
`;

export const ListItemText = styled(Typography)<ListItemTextProps>`
  && {
    font-family: "Rubik", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: ${({ selected }) => (selected ? "#4c84ff" : "#838895")};

    &:hover {
      cursor: pointer;
    }
  }
`;

export const RightGridItem = styled(GridItem)`
  && {
    height: 95%;
    width: 84.94%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const RightWrapperGrid = styled(GridContainer)`
  && {
    height: 86%;
    width: 95%;
  }
`;

export const SettingsDivider = styled(Divider).attrs({
  orientation: "vertical",
  LeftGridItem,
})`
  && {
    height: 80%;
    margin-top: 4.5rem;
  }
`;

//#endregion

//#region Info Content

export const InfoContentWrapper = styled(GridContainer)`
  && {
    height: 100%;
    width: 100%;
  }
`;

export const InfoTitleItem = styled(GridItem)`
  && {
    height: 10%;
    width: 100%;
    display: flex;
    align-items: center;
  }
`;

export const InfoTitle = styled(Typography)`
  && {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #31394e;
  }
`;

export const InfoContentGrid = styled(ItemNestedGrid)`
  && {
    height: 80%;
    width: 100%;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`;

export const InfoContentItem = styled(GridItem)`
  && {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const InfoContentTitle = styled(Typography)`
  && {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #adb0b8;
    padding-left: 0.5rem;
  }
`;

export const InfoAvatar = styled(Avatar)`
  && {
    // padding-top: 0.5rem;
  }
`;

export const InfoInput = styled(StyledInput)`
  && {
    height: 3.55rem;
    width: 36rem;
  }
`;

export const InfoPreferences = styled(Typography)`
  && {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #31394e80;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
`;

export const InfoLanguage = styled(InfoInput).attrs({
  select: true,
})`
  && {
    width: 10rem;
  }
`;

export const InfoButtonItem = styled(GridItem)`
  && {
    height: 10%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const CancelButton = styled(InfoButtonBase)`
  && {
    background-color: #fd5461;

    &:hover {
      background-color: #d94851;
    }
  }
`;
export const SaveButton = styled(InfoButtonBase)`
  && {
    background-color: #4c84ff;
  }
`;

//#endregion

//#region Members Content

export const MembersContentWrapper = styled(GridContainer)``;

export const MembersTitleItem = styled(GridItem)`
  && {
    height: 10%;
    width: 100%;
    display: flex;
    align-items: center;
  }
`;

export const MembersTitle = styled(Typography)`
  && {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #31394e;
  }
`;

export const MembersContentGrid = styled(GridItem)`
  height: 80%;
  width: 100%;
`;

export const MembersButtonItem = styled(GridItem)`
  && {
    height: 10%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

//#endregion
