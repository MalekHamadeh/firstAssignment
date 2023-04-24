import React from "react";

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

const Right = () => {
  return (
    <RightWrapper>
      <RightWrapperTitle>
        <TitleContentItem>
          <RightProjectTitle>Marketing</RightProjectTitle>
        </TitleContentItem>
        <TitleContentItem>
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
