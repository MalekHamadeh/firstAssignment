import React from "react";
import {
  DashboardGrid,
  DashboardWrapper,
  LeftGridItem,
  RightGridItem,
} from "../StyledHome";
import { Divider } from "@mui/material";
import Left from "./Left";
import Right from "./Right";

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <DashboardGrid direction='row'>
        <LeftGridItem>
          <Left />
        </LeftGridItem>
        <Divider orientation='vertical' flexItem />
        <RightGridItem>
          <Right />
        </RightGridItem>
      </DashboardGrid>
    </DashboardWrapper>
  );
};

export default Dashboard;
