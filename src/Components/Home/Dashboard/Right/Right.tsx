import React, { useContext } from "react";

import {
  GoToProjectButton,
  RightProjectTitle,
  RightWrapper,
  RightWrapperReview,
  RightWrapperTitle,
  RightWrapperToDos,
  TitleContentItem,
  GoToIcon,
  TaskListWrapper,
} from "../StyledDashboard";

import backIcon from "../../../../Images/Icons/backIcon.svg";

import CompressedTasks from "../../../Shared/CompressedTasks";
import DrawerContext from "../../../../Context/DrawerContext";

import Objectives from "../../Objectives/Objectives";

const Right = () => {
  const { handleChanges } = useContext(DrawerContext);
  const GoToObjectives = () => {
    handleChanges("Objectives", <Objectives />);
  };

  return (
    <RightWrapper>
      <RightWrapperTitle>
        <TitleContentItem>
          <RightProjectTitle>Marketing</RightProjectTitle>
        </TitleContentItem>
        <TitleContentItem onClick={GoToObjectives}>
          <GoToProjectButton>
            Go to Project
            <GoToIcon src={backIcon} />
          </GoToProjectButton>
        </TitleContentItem>
      </RightWrapperTitle>
      <RightWrapperToDos>
        <TaskListWrapper>
          <CompressedTasks title='Todos' />
        </TaskListWrapper>
      </RightWrapperToDos>
      <RightWrapperReview>
        <TaskListWrapper>
          <CompressedTasks title='Reviews' />
        </TaskListWrapper>
      </RightWrapperReview>
    </RightWrapper>
  );
};

export default Right;
