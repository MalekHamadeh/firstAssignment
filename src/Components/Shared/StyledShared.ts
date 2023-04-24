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
  iconcolor: string;
}

interface TitleChip {
  title: string;
}

interface ItemProject {
  projectcolor: string;
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

export const ProjectIconGrid = styled(GridContainer).attrs({
  direction: "row",
  columns: 12,
})`
  && {
    height: 100%;
    width: 100%;
  }
`;

export const ProjectItem = styled(GridItem)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40%;
  width: 19%;
`;

export const ProjectItemGrid = styled(GridContainer).attrs({
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

export const ProjectIcon = styled(GridItem)<ProjectIconBC>`
  && {
    background-color: ${({ iconcolor }) => iconcolor};
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

export const ProjectNameWrapper = styled(GridItem)`
  && {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 30%;
    text-align: center;
    margin-top: 1rem;
  }
`;

export const ProjectNameItem = styled(GridItem)`
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
    padding-top: 1rem;
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
    background-color: ${({ title }) =>
      title === "Todos" ? "rgba(0, 121, 255, 0.3)" : "rgba(245, 166, 35, 0.3)"};
    height: 1.2rem;

    & .MuiChip-label {
      color: ${({ title }) => (title === "Todos" ? "#0079ff" : "#F5A623")};
      text-align: center;
      opacity: 1;
    }
  }
`;
export const ListItemGrid = styled(ItemNestedGrid)`
  && {
    height: 90%;
    width: 100%;
    padding-top: 1rem;
  }
`;

export const ListGridItem = styled(ItemNestedGrid).attrs({
  xs: 12,
})`
  && {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export const PriorityListItem = styled(GridItem)`
  && {
    width: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const ItemPriority = styled.img`
  && {
    width: 24px;
    height: 24px;
  }
`;
export const StatusListItem = styled(GridItem)`
  && {
    width: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const ItemStatus = styled.img`
  && {
    width: 24px;
    height: 24px;
  }
`;
export const TitleListItem = styled(GridItem)`
  && {
    width: 10%;
  }
`;
export const ItemTitle = styled(Typography)`
  && {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
  }
`;
export const DescListItem = styled(GridItem)`
  && {
    width: 50%;
  }
`;
export const ItemDescription = styled(Typography)`
  && {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }
`;
export const ProjectListItem = styled(GridItem)`
  && {
    width: 25%;
    display: flex;
    justify-content: flex-end;
  }
`;
export const ItemProject = styled(Chip).attrs({
  size: "small",
})<ItemProject>`
  && {
    background-color: ${({ projectcolor }) => projectcolor};

    & .MuiChip-label {
      font-family: "Rubik";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 10px;
      text-align: center;
      color: #ffffff;
    }
  }
`;

//#endregion

//#region Styling Members Table
interface ContentListItemProps {
  disabled?: boolean;
}

interface ListStatusProps {
  status: string;
}

export const MembersTableWrapper = styled(GridContainer)`
  && {
    height: 60%;
  }
`;

export const ContentTitleGrid = styled(ItemNestedGrid)`
  && {
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
  }
`;

export const ContentTitleItem = styled(GridItem)`
  && {
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

export const ContentTitleStatus = styled(ContentTitleItem)`
  && {
    display: flex;
    justify-content: center;
  }
`;

export const ContentTitle = styled(Typography)`
  && {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: rgba(49, 57, 78, 0.5);
    text-transform: uppercase;
  }
`;

export const ContentList = styled(ItemNestedGrid).attrs({})`
  && {
    width: 100%;
    height: 80%;
    padding-top: 1rem;
  }
`;

export const ContentListItem = styled(ItemNestedGrid)<ContentListItemProps>`
  && {
    width: 100%;
    height: 20%;
    background-color: ${({ disabled }) =>
      disabled ? "#EAEBED" : "transparent"};
    opacity: ${({ disabled }) => (disabled ? 0.95 : 1)};
  }
`;

export const ListItemName = styled(GridItem)`
  && {
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 3rem;
  }
`;

export const MemberAvatar = styled.img`
  height: 60%;
  width: 10%;
`;

export const MemberName = styled(Typography)`
  && {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #31394e;
    width: 30%;
  }
`;

export const MemberOwner = styled(Chip)`
  && {
    height: 55%;
    width: 23%;
    border-radius: 0.5rem;
    color: #29c293;
    background-color: #bfeddf;
    font-size: 14px;
    font-family: "Rubik";
    text-transform: uppercase;
    font-weight: 400;
    text-align: center;
  }
`;

export const ListItemEmail = styled(GridItem)`
  && {
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

export const ListEmail = styled(Typography)`
  && {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #838895;
  }
`;

export const ListItemStatus = styled(GridItem)`
  && {
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ListStatus = styled(Typography)<ListStatusProps>`
  && {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: ${({ status }) => (status === "Active" ? "#29C293" : "#FD5461")};
  }
`;

export const ListMore = styled(GridItem)`
  && {
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;

    color: #838895;
  }
`;

//#endregion
