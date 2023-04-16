import React, { createContext, useState } from "react";

import UrgentPriority from "../Images/Icons/PriorityIcons/urgentPriority.svg";
import HighPriority from "../Images/Icons/PriorityIcons/highPriority.svg";
import MediumPriority from "../Images/Icons/PriorityIcons/mediumPriority.svg";
import LowPriority from "../Images/Icons/PriorityIcons/lowPriority.svg";

import Task from "../Images/Icons/TaskIcons/task.svg";
import Bug from "../Images/Icons/TaskIcons/bug.svg";
import Macro from "../Images/Icons/TaskIcons/macro.svg";

interface HomeContextProps {
  projectList: {
    name: string;
    iconColor: string;
  }[];

  taskList: TaskListProps[];

  handleTaskPriority: (priority: string) => string;
  handleTaskIcons: (icon: string) => string;
}

interface TaskListProps {
  priority: string;
  icon: string;
  title: string;
  description: string;
  projectName: string;
  projectNameColor: string;
}

interface HomeProviderProps {
  children: React.ReactNode;
}

const HomeContext = createContext<HomeContextProps>({} as HomeContextProps);

export const HomeProvider = ({ children }: HomeProviderProps) => {
  const [projectList, setProjectList] = useState([
    {
      name: "LD Website",
      iconColor: "#DB54FD",
    },
    {
      name: "LD Website Marketing",
      iconColor: "#61D26F",
    },
    {
      name: "Roundrush",
      iconColor: "#1FAAE9",
    },
    {
      name: "Roundrush Website",
      iconColor: "#4086E0",
    },
    {
      name: "Marketing",
      iconColor: "#7A6FEF",
    },
    {
      name: "Roundrush Dev Ops",
      iconColor: "#EEC301",
    },
    {
      name: "Social LD",
      iconColor: "#61D26F",
    },
    {
      name: "Machine Learning",
      iconColor: "#FD612C",
    },
  ]);

  const [taskList, setTaskList] = useState([
    {
      priority: "urgent",
      icon: "bug",
      title: "WMS-20",
      description: "Certe, inquam, pertinax non intell...",
      projectName: "LD Website",
      projectNameColor: "#DB54FD",
    },
    {
      priority: "urgent",
      icon: "task",
      title: "WMS-11",
      description: "Ac hac et ac tristique luctus.",
      projectName: "Roundrush",
      projectNameColor: "#1FAAE9",
    },
    {
      priority: "high",
      icon: "bug",
      title: "WMS-1",
      description: "Varius ultricies vitae eget.",
      projectName: "Roundrush",
      projectNameColor: "#1FAAE9",
    },
    {
      priority: "high",
      icon: "task",
      title: "WMS-12",
      description: "Ultrices ultrices etiam sed.",
      projectName: "LD Website",
      projectNameColor: "#DB54FD",
    },
    {
      priority: "medium",
      icon: "macro",
      title: "WMS-28",
      description: "Magna bibendum nibh mi habitant.",
      projectName: "Marketing",
      projectNameColor: "#7A6FEF",
    },
    {
      priority: "low",
      icon: "bug",
      title: "WMS-22",
      description: "Enim at eget morbi amet integ..",
      projectName: "Roundrush Website",
      projectNameColor: "#4086E0",
    },
    {
      priority: "low",
      icon: "bug",
      title: "WMS-22",
      description: "Enim at eget morbi amet integ..",
      projectName: "Roundrush Website",
      projectNameColor: "#4086E0",
    },
  ]);

  const handleTaskPriority = (string: string) => {
    switch (string) {
      case "urgent":
        return UrgentPriority;
      case "high":
        return HighPriority;
      case "medium":
        return MediumPriority;
      case "low":
        return LowPriority;
      default:
        return null;
    }
  };

  const handleTaskIcons = (string: string) => {
    switch (string) {
      case "bug":
        return Bug;
      case "task":
        return Task;
      case "macro":
        return Macro;
      default:
        return null;
    }
  };

  return (
    <HomeContext.Provider
      value={{ projectList, taskList, handleTaskPriority, handleTaskIcons }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeContext;
