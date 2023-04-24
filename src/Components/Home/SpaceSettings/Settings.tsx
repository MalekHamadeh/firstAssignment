import React, { useState, useContext } from "react";

import {
  LeftGridItem,
  LeftWrapperGrid,
  ListItem,
  ListItemText,
  ListTitle,
  ListTitleItem,
  ListWrapper,
  RightGridItem,
  RightWrapperGrid,
  SettingsDivider,
  SettingsGrid,
  SettingsWrapper,
  StyledSettingsIcon,
} from "./StyledSettings";

import SettingsIcon from "../../../Images/Icons/settingsIcon.svg";

import HomeContext from "../../../Context/HomeContext";
import ContentManager from "./Content/ContentManager";

const Settings = () => {
  const { selectedContent, handleSelectedContent } = useContext(HomeContext);
  const [selected, setSelected] = useState(true);

  const handleSelectionInfo = () => {
    setSelected(!selected);
    handleSelectedContent("Info");
  };
  const handleSelectionMemebers = () => {
    setSelected(!selected);
    handleSelectedContent("Members");
  };

  return (
    <SettingsWrapper>
      <SettingsGrid>
        <LeftGridItem>
          <LeftWrapperGrid>
            <ListWrapper>
              <ListTitleItem>
                <StyledSettingsIcon src={SettingsIcon} />
                <ListTitle>Space Settings</ListTitle>
              </ListTitleItem>
              <ListItem>
                <ListItemText selected={selected} onClick={handleSelectionInfo}>
                  Info
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText
                  selected={!selected}
                  onClick={handleSelectionMemebers}
                >
                  Members
                </ListItemText>
              </ListItem>
            </ListWrapper>
          </LeftWrapperGrid>
        </LeftGridItem>
        <SettingsDivider />
        <RightGridItem>
          <RightWrapperGrid>
            <ContentManager />
          </RightWrapperGrid>
        </RightGridItem>
      </SettingsGrid>
    </SettingsWrapper>
  );
};

export default Settings;
