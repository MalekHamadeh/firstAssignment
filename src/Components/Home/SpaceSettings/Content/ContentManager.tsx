import React, { useContext } from "react";
import HomeContext from "../../../../Context/HomeContext";
import Info from "./Info";
import Members from "./Members";

const ContentManager = () => {
  const { selectedContent } = useContext(HomeContext);
  return selectedContent === "Info" ? <Info /> : <Members />;
};

export default ContentManager;
