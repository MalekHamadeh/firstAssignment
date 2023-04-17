import React from "react";

import {
  DashboardGrid,
  DashboardWrapper,
  LeftGridItem,
  RightGridItem,
  VerticalDivider,
} from "./StyledDashboard";

import Left from "./Left/Left";
import Right from "./Right/Right";

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
