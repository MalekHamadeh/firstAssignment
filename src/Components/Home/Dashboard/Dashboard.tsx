import React from "react";
import {
  DashboardGrid,
  DashboardWrapper,
  LeftGridItem,
  RightGridItem,
  VerticalDivider,
} from "./StyledDashboard";
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
        <VerticalDivider />
        <RightGridItem>
          <Right />
        </RightGridItem>
      </DashboardGrid>
    </DashboardWrapper>
  );
};

export default Dashboard;
