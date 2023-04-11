import React from "react";
import {
  IconContent,
  IconItem,
  ProjectIconGrid,
  ProjectIconWrapper,
  ProjectNameAbb,
  ProjectNameItem,
} from "./StyledShared";

const FavoriteProjectList = () => {
  return (
    <ProjectIconWrapper>
      <ProjectIconGrid>
        <IconItem>
          <IconContent>
            <ProjectNameAbb>LW</ProjectNameAbb>
          </IconContent>
        </IconItem>
        <ProjectNameItem>Name 1</ProjectNameItem>
      </ProjectIconGrid>
    </ProjectIconWrapper>
  );
};

export default FavoriteProjectList;
