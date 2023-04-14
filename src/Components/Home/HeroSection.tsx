import React, { useState, useContext } from "react";
import {
  StyledHeaderIconWrapper,
  StyledHeaderTitle,
  StyledHeaderTitleWrapper,
  StyledHeroBody,
  StyledHeroHeader,
  StyledHeroWrapper,
  StyledSmallBtn,
  StyledDivider,
  StyledHeroHeaderContent,
} from "./StyledHome";
import AddIcon from "@mui/icons-material/Add";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import DrawerContext from "../../Context/DrawerContext";

const HeroSection = () => {
  const [shouldShowIcon, setShouldShowIcon] = useState(true);
  const { data } = useContext(DrawerContext);
  const { title, component } = data;
  return (
    <StyledHeroWrapper>
      <StyledHeroHeader>
        <StyledHeroHeaderContent>
          <StyledHeaderTitleWrapper>
            <StyledHeaderTitle>{title}</StyledHeaderTitle>
          </StyledHeaderTitleWrapper>
          {shouldShowIcon && (
            <StyledHeaderIconWrapper>
              <StyledSmallBtn color='warning'>
                <NotificationsNoneIcon />
              </StyledSmallBtn>
              <StyledSmallBtn color='primary'>
                <AddIcon />
              </StyledSmallBtn>
            </StyledHeaderIconWrapper>
          )}
        </StyledHeroHeaderContent>
      </StyledHeroHeader>
      <StyledDivider />
      <StyledHeroBody>{component}</StyledHeroBody>
    </StyledHeroWrapper>
  );
};

export default HeroSection;
