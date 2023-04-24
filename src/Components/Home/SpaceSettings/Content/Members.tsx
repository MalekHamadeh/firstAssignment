import React, { useContext } from "react";
import {
  MembersButtonItem,
  MembersContentGrid,
  MembersContentWrapper,
  MembersTitle,
  MembersTitleItem,
  SaveButton,
} from "../StyledSettings";
import MembersTable from "../../../Shared/MembersTable";
import HomeContext from "../../../../Context/HomeContext";

const Members = () => {
  const { members } = useContext(HomeContext);

  return (
    <MembersContentWrapper>
      <MembersTitleItem>
        <MembersTitle>Users on Plan</MembersTitle>
      </MembersTitleItem>
      <MembersContentGrid>
        <MembersTable members={members} />
      </MembersContentGrid>
      <MembersButtonItem>
        <SaveButton>save</SaveButton>
      </MembersButtonItem>
    </MembersContentWrapper>
  );
};

export default Members;
