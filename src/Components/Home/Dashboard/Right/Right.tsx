import React from "react";
import {
  GoToProjectButton,
  RightProjectTitle,
  RightWrapper,
  RightWrapperReview,
  RightWrapperTitle,
  RightWrapperToDos,
  TitleContent,
  TitleContentItem,
  GoToIcon,
  TaskListWrapper,
} from "../StyledDashboard";
import backIcon from "../../../../Images/Icons/backIcon.svg";

const Right = () => {
  return (
    <RightWrapper>
      <RightWrapperTitle>
        <TitleContent>
          <TitleContentItem>
            <RightProjectTitle>Marketing</RightProjectTitle>
          </TitleContentItem>
          <TitleContentItem>
            <GoToProjectButton>
              Go to Project
              <GoToIcon src={backIcon} />
            </GoToProjectButton>
          </TitleContentItem>
        </TitleContent>
      </RightWrapperTitle>
      <RightWrapperToDos>
        <TaskListWrapper>TOdo</TaskListWrapper>
      </RightWrapperToDos>
      <RightWrapperReview>Pending Review</RightWrapperReview>
    </RightWrapper>
  );
};

export default Right;
