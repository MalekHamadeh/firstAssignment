import React from "react";
import {
  ContentList,
  ContentListItem,
  ContentTitleGrid,
  ContentTitleItem,
  ContentTitle,
  ListItemEmail,
  ListItemName,
  ListItemStatus,
  MemberAvatar,
  MemberName,
  MemberOwner,
  MembersTableWrapper,
  ContentTitleStatus,
  ListStatus,
  ListEmail,
  ListMore,
} from "./StyledShared";
import { Divider, Icon } from "@mui/material";
import Avatar from "../../Images/Pictures/avatar.svg";
import { Members } from "../../Context/ContextTypes";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

interface MembersTable_Props {
  members: Members[];
}

const MembersTable = ({ members }: MembersTable_Props) => {
  return (
    <MembersTableWrapper>
      <ContentTitleGrid>
        <ContentTitleItem>
          <ContentTitle>Name</ContentTitle>
        </ContentTitleItem>
        <ContentTitleItem>
          <ContentTitle>Email</ContentTitle>
        </ContentTitleItem>
        <ContentTitleStatus>
          <ContentTitle>Status</ContentTitle>
        </ContentTitleStatus>
      </ContentTitleGrid>
      <ContentList>
        {members.map((member, index) => {
          return (
            <>
              <ContentListItem
                key={index}
                disabled={member.status === "Inactive"}
              >
                <ListItemName>
                  <MemberAvatar src={member.avatar} />
                  <MemberName>{member.name}</MemberName>
                  {member.owner && <MemberOwner label='Owner' />}
                </ListItemName>
                <ListItemEmail>
                  <ListEmail>{member.email}</ListEmail>
                </ListItemEmail>
                <ListItemStatus>
                  <ListStatus status={member.status}>
                    {member.status}
                  </ListStatus>
                </ListItemStatus>
                <ListMore>
                  <MoreHorizIcon />
                </ListMore>
              </ContentListItem>
              <Divider
                sx={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#F4F6FC",
                  visibility:
                    index === members.length - 1 ? "hidden" : "visible",
                }}
              />
            </>
          );
        })}
      </ContentList>
    </MembersTableWrapper>
  );
};

export default MembersTable;
