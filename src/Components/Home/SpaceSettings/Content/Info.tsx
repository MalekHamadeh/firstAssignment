import React from "react";
import {
  CancelButton,
  InfoAvatar,
  InfoButtonItem,
  InfoContentGrid,
  InfoContentItem,
  InfoContentTitle,
  InfoContentWrapper,
  InfoInput,
  InfoLanguage,
  InfoPreferences,
  InfoTitle,
  InfoTitleItem,
  SaveButton,
} from "../StyledSettings";

import Avatar from "../../../../Images/Pictures/avatar.svg";
import { MenuItem } from "@mui/material";

const Info = () => {
  return (
    <InfoContentWrapper>
      <InfoTitleItem>
        <InfoTitle>Info</InfoTitle>
      </InfoTitleItem>
      <InfoContentGrid>
        <InfoContentItem>
          <InfoContentTitle>Avatar</InfoContentTitle>
          <InfoAvatar src={Avatar} />
        </InfoContentItem>
        <InfoContentItem>
          <InfoContentTitle>Full Name</InfoContentTitle>
          <InfoInput placeholder='Full Name' />
        </InfoContentItem>
        <InfoContentItem>
          <InfoContentTitle>Username</InfoContentTitle>
          <InfoInput placeholder='Username' />
        </InfoContentItem>
        <InfoContentItem>
          <InfoContentTitle>Email</InfoContentTitle>
          <InfoInput placeholder='Email' />
        </InfoContentItem>
        <InfoContentItem>
          <InfoPreferences>Preferences</InfoPreferences>
        </InfoContentItem>
        <InfoContentItem>
          <InfoContentTitle>Language</InfoContentTitle>
          <InfoLanguage>
            <MenuItem value='' disabled>
              Select Language
            </MenuItem>
            <MenuItem value='English'>English</MenuItem>
            <MenuItem value='Italian'>Italian</MenuItem>
          </InfoLanguage>
        </InfoContentItem>
      </InfoContentGrid>
      <InfoButtonItem>
        <CancelButton>Cancel</CancelButton>
        <SaveButton>Save</SaveButton>
      </InfoButtonItem>
    </InfoContentWrapper>
  );
};

export default Info;
