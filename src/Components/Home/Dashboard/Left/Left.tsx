import React from "react";
import {
  BottomGridItem,
  LeftGrid,
  TopGridItem,
  GridItemContent,
  InfoGrid,
  InfoGridItem,
  Title,
  Text,
  TopPictureWrapperItem,
  StyledImage,
  BottomGrid,
  TitleGridItem,
  ContentGridItem,
  ProjectTitle,
  ContentWrapper,
  ContentGrid,
  ContentItem,
  ContentItemWrapper,
} from "../StyledDashboard";
import WelcomPic from "../../../../Images/Pictures/WelcomePic.svg";
import FavoriteProjectList from "../../../Shared/FavoriteProjectList";

const Left = () => {
  return (
    <LeftGrid>
      <TopGridItem>
        <GridItemContent>
          <InfoGrid>
            <InfoGridItem>
              <Title>Welcome Back, Name</Title>
            </InfoGridItem>
            <InfoGridItem>
              <Text>
                in <strong>Marketing </strong> You have <strong>14 </strong>
                tasks to accomplish and <strong>10 </strong> <br /> review left
                in your current iteration
              </Text>
            </InfoGridItem>
          </InfoGrid>
          <TopPictureWrapperItem>
            <StyledImage src={WelcomPic} />
          </TopPictureWrapperItem>
        </GridItemContent>
      </TopGridItem>
      <BottomGridItem>
        <BottomGrid>
          <TitleGridItem>
            <ProjectTitle>Favorite Project</ProjectTitle>
          </TitleGridItem>
          <ContentGridItem>
            <ContentWrapper>
              <ContentGrid>
                <ContentItem>
                  <ContentItemWrapper>
                    <FavoriteProjectList />
                  </ContentItemWrapper>
                </ContentItem>
                <ContentItem>
                  <ContentItemWrapper>
                    <FavoriteProjectList />
                  </ContentItemWrapper>
                </ContentItem>
                <ContentItem>
                  <ContentItemWrapper>
                    <FavoriteProjectList />
                  </ContentItemWrapper>
                </ContentItem>
                <ContentItem>
                  <ContentItemWrapper>
                    <FavoriteProjectList />
                  </ContentItemWrapper>
                </ContentItem>
                <ContentItem>
                  <ContentItemWrapper>
                    <FavoriteProjectList />
                  </ContentItemWrapper>
                </ContentItem>
                <ContentItem>
                  <ContentItemWrapper>
                    <FavoriteProjectList />
                  </ContentItemWrapper>
                </ContentItem>
                <ContentItem>
                  <ContentItemWrapper>
                    <FavoriteProjectList />
                  </ContentItemWrapper>
                </ContentItem>
              </ContentGrid>
            </ContentWrapper>
          </ContentGridItem>
        </BottomGrid>
      </BottomGridItem>
    </LeftGrid>
  );
};

export default Left;
