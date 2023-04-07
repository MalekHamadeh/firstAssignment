import React from "react";
import { createContext, useEffect, useState } from "react";
import Dashboard from "../Components/Home/DrawerComponents/Dashboard";
import PersonalBoard from "../Components/Home/DrawerComponents/PersonalBoard";
import Settings from "../Components/Home/DrawerComponents/Settings";
import YellowTech from "../Components/Home/DrawerComponents/YellowTech";
import BrotliLogo from "../Images/Icons/brotliLogo.svg";
import PersonalBoardIcon from "../Images/Icons/personalBoardIcon.svg";
import HomeIcon from "../Images/Icons/homeIcon.svg";
import SettingsIcon from "../Images/Icons/settingsIcon.svg";
// import { Home } from "@mui/icons-material";

const DrawerContext = createContext<DrawerContextProps>({
  mainItems: [],
  subItems: [],
  data: {
    title: "",
    component: null,
  },
  handleChanges: (title: string, component: JSX.Element) => {},
});

interface DrawerProviderProps {
  children: React.ReactNode;
}

type handleDataChanages = (title: string, component: JSX.Element) => void;

interface mainItems {
  icon: string;
  title: string;
  component: JSX.Element;
}
export interface subItems {
  text: string;
  iconColor: string;
  title: string;
}

interface NeededData {
  title: string;
  component?: JSX.Element | null;
}

interface subItemsArray extends Array<subItems> {}
interface mainItemsArray extends Array<mainItems> {}

export interface DrawerContextProps {
  mainItems: mainItemsArray;
  subItems: subItemsArray;
  data: NeededData;
  handleChanges: handleDataChanages;
}

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

  const handleChanges: handleDataChanages = (
    title: string,
    component: JSX.Element
  ) => {
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
