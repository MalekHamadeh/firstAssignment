import React, { useState } from "react";
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
import { Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import DrawerContext from "../../Context/DrawerContext";

const HeroSection = () => {
  const [shouldShowIcon, setShouldShowIcon] = useState(true);
  const { data } = React.useContext(DrawerContext);
  return (
    <StyledHeroWrapper>
      <StyledHeroHeader>
        <StyledHeroHeaderContent>
          <StyledHeaderTitleWrapper>
            <StyledHeaderTitle>{data.title}</StyledHeaderTitle>
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
      <StyledHeroBody>{data.component}</StyledHeroBody>
    </StyledHeroWrapper>
  );
};

export default HeroSection;
