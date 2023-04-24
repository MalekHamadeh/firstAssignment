import React, { createContext, useState } from "react";

import Dashboard from "../Components/Home/Dashboard/Dashboard";
import PersonalBoard from "../Components/Home/PersonalBoard";
import Settings from "../Components/Home/SpaceSettings/Settings";
import YellowTech from "../Components/Home/YellowTech";

import BrotliLogo from "../Images/Icons/DrawerIcons/brotliLogo.svg";
import PersonalBoardIcon from "../Images/Icons/DrawerIcons/personalBoardIcon.svg";
import HomeIcon from "../Images/Icons/DrawerIcons/homeIcon.svg";
import SettingsIcon from "../Images/Icons/DrawerIcons/settingsIcon.svg";

import {
  DrawerContextProps,
  DrawerProviderProps,
  NeededData,
  handleDataChanages,
  mainItemsArray,
  subItemsArray,
} from "./ContextTypes";

const DrawerContext = createContext<DrawerContextProps>(
  {} as DrawerContextProps
);

export const DrawerProvider = ({ children }: DrawerProviderProps) => {
  const [mainItems, setMainItems] = useState<mainItemsArray>([
    {
      icon: BrotliLogo,
      title: "YellowTech Inc.",
      component: <YellowTech />,
    },
    {
      icon: PersonalBoardIcon,
      title: "Personal Board",
      component: <PersonalBoard />,
    },
    {
      icon: HomeIcon,
      title: "Dashboard",
      component: <Dashboard />,
    },
    {
      icon: SettingsIcon,
      title: "Space Settings",
      component: <Settings />,
    },
  ]);
  const [subItems, setSubItems] = useState<subItemsArray>([
    {
      text: "Coraly Tech & Dev",
      iconColor: "Yellow",
      title: "Coraly",
    },
    {
      text: "Design Board",
      iconColor: "Red",
      title: "Coraly",
    },
    {
      text: "Growth Hacking",
      iconColor: "pink",
      title: "Coraly",
    },
    {
      text: "Website",
      iconColor: "Yellow",
      title: "Lasting Dynamics",
    },
    {
      text: "Growth Hacking",
      iconColor: "Red",
      title: "Lasting Dynamics",
    },
    {
      text: "UI/UX Design",
      iconColor: "Pink",
      title: "Lasting Dynamics",
    },
    {
      text: "VL - Tech & Dev",
      iconColor: "Yellow",
      title: "Vetrina Live",
    },
    {
      text: "VL - Growth Hacking",
      iconColor: "Red",
      title: "Vetrina Live",
    },
  ]);

  const [data, setData] = useState<NeededData>({
    title: "Dashboard",
    component: <Dashboard />,
  });

  const handleChanges: handleDataChanages = (title, component) => {
    setData({
      title,
      component,
    });
  };

  return (
    <DrawerContext.Provider
      value={{
        mainItems,
        subItems,
        data,
        handleChanges,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerContext;
