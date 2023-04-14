import React, { useContext } from "react";
import {
  ProjectIconWrapper,
  ProjectIconGrid,
  ProjectItem,
  ProjectItemGrid,
  ProjectNameAbb,
  ProjectNameItem,
  ProjectIcon,
  ProjectNameWrapper,
  ProjectName,
} from "./StyledShared";
import HomeContext from "../../Context/HomeContext";

const FavoriteProjectList = () => {
  const { projectList } = useContext(HomeContext);

  const getProjectNameAbb = (name: string) => {
    const nameArray = name.split(" ");
    if (nameArray.length > 2) {
      return (
        nameArray[0].charAt(0) + nameArray[1].charAt(0) + nameArray[2].charAt(0)
      );
    } else if (nameArray.length > 1) {
      return nameArray[0].charAt(0) + nameArray[1].charAt(0);
    } else {
      return nameArray[0].charAt(0);
    }
  };

  return (
    <ProjectIconWrapper>
      <ProjectIconGrid>
        {projectList.map(({ name, iconColor }, index) => (
          <ProjectItem key={index}>
            <ProjectItemGrid>
              <ProjectIcon iconColor={iconColor}>
                <ProjectNameAbb>{getProjectNameAbb(name)}</ProjectNameAbb>
              </ProjectIcon>
              <ProjectNameWrapper>
                <ProjectNameItem>
                  <ProjectName>{name}</ProjectName>
                </ProjectNameItem>
              </ProjectNameWrapper>
            </ProjectItemGrid>
          </ProjectItem>
        ))}
      </ProjectIconGrid>
    </ProjectIconWrapper>
  );
};

export default FavoriteProjectList;
