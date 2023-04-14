import React from "react";
import {
  ListGrid,
  ListItemGrid,
  ListTitleChip,
  ListTitleItem,
  ListTitleName,
  TitleChip,
  TitleName,
} from "./StyledShared";

interface CompressedTasksProps {
  title: string;
}

const CompressedTasks = ({ title }: CompressedTasksProps) => {
  return (
    <ListGrid>
      <ListTitleItem>
        <ListTitleName>
          <TitleName>{title}</TitleName>
        </ListTitleName>
        <ListTitleChip>
          <TitleChip label={12} />
        </ListTitleChip>
      </ListTitleItem>
      <ListItemGrid></ListItemGrid>
    </ListGrid>
  );
};

export default CompressedTasks;
