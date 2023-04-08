import React from "react";
import {
  LeftBottomGridItem,
  LeftGrid,
  LeftTopGridItem,
  LeftWrapper,
  TopWrapper,
  InfoGrid,
  TopTextWrapperItem,
  Title,
  Text,
  TopPictureWrapperItem,
  StyledImage,
} from "../StyledHome";
import WelcomPic from "../../../Images/Pictures/WelcomePic.svg";

const Left = () => {
  return (
    <LeftWrapper>
      <LeftGrid direction='column'>
        <LeftTopGridItem>
          <TopWrapper>
            <TopTextWrapperItem>
              <InfoGrid>
                <Title>Welcome Back, Name</Title>
                <Text>
                  in <strong>Marketing </strong> You have <strong>14 </strong>
                  tasks to accomplish and <strong>10 </strong> <br /> review
                  left in your current iteration
                </Text>
              </InfoGrid>
            </TopTextWrapperItem>
          </TopWrapper>
          <TopPictureWrapperItem>
            <StyledImage src={WelcomPic} />
          </TopPictureWrapperItem>
        </LeftTopGridItem>
        <LeftBottomGridItem>
          <h1>BOTTOM</h1>
        </LeftBottomGridItem>
      </LeftGrid>
    </LeftWrapper>
  );
};

export default Left;
