import React, { useContext } from "react";

import {
  ListGrid,
  ListItemGrid,
  ListTitleChip,
  ListTitleItem,
  ListTitleName,
  TitleChip,
  TitleName,
  ListGridItem,
  ItemPriority,
  ItemStatus,
  ItemTitle,
  ItemDescription,
  ItemProject,
  PriorityListItem,
  StatusListItem,
  TitleListItem,
  DescListItem,
  ProjectListItem,
} from "./StyledShared";

import { Divider } from "@mui/material";

import HomeContext from "../../Context/HomeContext";

interface CompressedTasksProps {
  title: string;
}

const CompressedTasks = ({ title }: CompressedTasksProps) => {
  const { taskList, handleTaskIcons, handleTaskPriority } =
    useContext(HomeContext);
  return (
    <ListGrid>
      <ListTitleItem>
        <ListTitleName>
          <TitleName>{title}</TitleName>
        </ListTitleName>
        <ListTitleChip>
          <TitleChip label={title === "Todos" ? "12" : "24"} title={title} />
        </ListTitleChip>
      </ListTitleItem>
      <ListItemGrid>
        {taskList.map(
          (
            {
              priority,
              icon,
              title,
              description,
              projectName,
              projectNameColor,
            },
            index
          ) => (
            <>
              <ListGridItem key={index}>
                <PriorityListItem>
                  <ItemPriority src={handleTaskPriority(priority)} />
                </PriorityListItem>
                <StatusListItem>
                  <ItemStatus src={handleTaskIcons(icon)} />
                </StatusListItem>
                <TitleListItem>
                  <ItemTitle>{title}</ItemTitle>
                </TitleListItem>
                <DescListItem>
                  <ItemDescription>{description}</ItemDescription>
                </DescListItem>
                <ProjectListItem>
                  <ItemProject
                    projectcolor={projectNameColor}
                    label={projectName}
                  />
                </ProjectListItem>
              </ListGridItem>
              <Divider
                sx={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#F4F6FC",
                  visibility:
                    index === taskList.length - 1 ? "hidden" : "visible",
                }}
              />
            </>
          )
        )}
      </ListItemGrid>
    </ListGrid>
  );
};

export default CompressedTasks;
